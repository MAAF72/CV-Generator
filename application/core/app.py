from quart import Quart

from firebase_admin import credentials, db, initialize_app, storage
from firebase_admin.exceptions import FirebaseError

from pyppeteer import launch

from classes.customer import Customer
from classes.cv import CV
from classes.edukasi import Edukasi
from classes.bahasa import Bahasa
from classes.pengalaman import Pengalaman
from classes.penghargaan import Penghargaan
from classes.sosial_media import SosialMedia
from classes.kemampuan import Kemampuan
from classes.rujukan import Rujukan
from classes.template import Template

from pathlib import Path

import json
import jinja2

abs_path = Path(__file__).parent.absolute()

cred = credentials.Certificate('cv-generator-e29dd-firebase-adminsdk-zvelg-ae5fe10a7a.json')
initialize_app(cred, {
    'databaseURL': 'https://cv-generator-e29dd-default-rtdb.firebaseio.com/',
    'storageBucket': 'cv-generator-e29dd.appspot.com'
})

app = Quart(__name__)

ref = db.reference('/cvs')

@app.route('/enable-cors')
async def enable_cors():
    try:
        bucket = storage.bucket()

        bucket.cors = [
            {
                'origin': ['*'],
                'method': ['GET'],
                'maxAgeSeconds': 86400
            }
        ]

        bucket.update()
    except Exception as e:
        print('Error when enabling cors', e)
        return 'ERROR'

    return 'OK'
    
@app.route('/generate/<unique_code>')
async def generate(unique_code):
    try:
        cv = ref.child(unique_code)
        py_cv = CV(cv.get())

        template_folder = f'templates/{py_cv.template.id}'
        html_file = f'{template_folder}/{unique_code}.html'
        pdf_file = f'temp/{unique_code}.pdf'
        
        jinja_environment = jinja2.Environment(loader=jinja2.FileSystemLoader(template_folder))
        
        with open(html_file, 'w+') as jinja_output:
            jinja_output.write(jinja_environment.get_template(py_cv.template.file).render(data=py_cv.customer))

        generate_result = await generate_pdf(py_cv.template.id, unique_code)
        if generate_result == 'OK':
            bucket = storage.bucket()
            blob = bucket.blob(f'cv/{unique_code}.pdf')
            blob.upload_from_filename(pdf_file)
            blob.make_public()
            
            cv.update({
                'file': blob.public_url
            })
        else:
            return 'ERROR'
    except FirebaseError as e:
        print('Error when generating cv', e)
        return 'ERROR'

    return 'OK'

async def generate_pdf(template_id, unique_code):
    template_folder = f'templates/{template_id}'
    html_file = f'file://wsl%24/ubuntu/{abs_path}/{template_folder}/{unique_code}.html'
    pdf_file = f'temp/{unique_code}.pdf'
    
    try:
        print('trace 1')
        browser = await launch(options={'args': ['--no-sandbox']})
        print('trace 2')
        page = await browser.newPage()
        print('trace 3')
        await page.setViewport({
            'height': 0,
            'width': 0, 
            'preferCSSPageSize': True,
            'deviceScaleFactor': 2
        })
        print('trace 4')
        await page.goto('https://maaf72.github.io')
        print('trace 5')
        await page.waitFor(2000)
        print('trace 6')
        await page.pdf({
            'path': pdf_file,
            'format': 'A4',
            'printBackground': True
        })
        print('trace 7')
        
        await browser.close()
        
        return True
    except Exception as e:
        print('error when generating pdf', e)
        
    return False

if __name__ == '__main__':
    pyppeteer.chromium_downloader.download_chromium()
    app.jinja_env.auto_reload = True
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run()