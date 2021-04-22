from firebase_admin import credentials, db, initialize_app, storage
from firebase_admin.exceptions import FirebaseError

from pyppeteer import launch
from syncer import sync

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

ref = db.reference('/cv')

def enable_cors():
    bucket = storage.bucket()

    bucket.cors = [
        {
            'origin': ['*'],
            'method': ['GET'],
            'maxAgeSeconds': 86400
        }
    ]

    bucket.update()

def create(ref, data):
    try:
        act = ref.push(data)
    except FirebaseError as e:
        print('Error when creating cv database', e)
    else:
        return act.key

    return None

def update(ref, unique_code, data):
    try:
        cv = get(ref, unique_code)
        cv.update(data)
    except FirebaseError as e:
        print('Error when updating cv database', e)

def delete(ref, unique_code):
    try:
        cv = get(ref, unique_code)
        cv.delete()
    except FirebaseError as e:
        print('Error when deleting cv database', e)


def generate(ref, unique_code):
    try:
        cv = get(ref, unique_code)
        py_cv = CV(cv.get())
        
        jinja_environment = jinja2.Environment(loader=jinja2.FileSystemLoader(f'templates/{py_cv.template.nama}'))
        

        with open(f'temp/{unique_code}.html', 'w+') as jinja_output:
            jinja_output.write(jinja_environment.get_template(py_cv.template.file).render(data=py_cv.customer))
            
        if generate_pdf(unique_code):
            file_path = f'temp/{unique_code}.pdf'
            
            bucket = storage.bucket()
            blob = bucket.blob(f'cv/{unique_code}.pdf')
            blob.upload_from_filename(file_path)
            blob.make_public()
            
            cv.update({
                'file': blob.public_url
            })
        else:
            print('error cuk')
    except FirebaseError as e:
        print('Error when generating cv', e)

def get(ref, unique_code):
    return ref.child(unique_code)

def create_dummy(ref):
    sd = Edukasi()
    sd.set_jenjang('Sekolah Dasar')
    sd.set_instansi('SDIT Usamah')
    sd.set_deskripsi('Ranking 1 paralel')
    sd.set_tahun_mulai(2006)
    sd.set_tahun_selesai(2012)

    smp = Edukasi()
    smp.set_deskripsi('Ranking 1 paralel')
    smp.set_instansi('SMPIT Avicenna')
    smp.set_tahun_mulai(2012)
    smp.set_tahun_selesai(2015)

    sma = Edukasi()
    sma.set_deskripsi('Wibu nolep sejati')
    sma.set_instansi('SMAIT Thariq Bin Ziyad')
    sma.set_tahun_mulai(2015)
    sma.set_tahun_selesai(2018)

    s1 = Edukasi()
    s1.set_deskripsi('Kang ngoding')
    s1.set_instansi('Telkom University')
    s1.set_tahun_mulai(2018)
    s1.set_tahun_selesai('Sekarang')

    magang = Pengalaman()
    magang.set_instansi('Forstok')
    magang.set_nama('Junior Software Engineer')
    magang.set_deskripsi('Gagal magang, males nanyain kelanjutan jadwal magang ehe')
    magang.set_tahun_mulai(2021)
    magang.set_tahun_selesai(2021)

    icpc = Penghargaan()
    icpc.set_instansi('ACM')
    icpc.set_nama('Finalist ACM ICPC Asia Jakarta Regional 2020')
    icpc.set_deskripsi('Lomba Competitive Programming tingkat Internasional')
    icpc.set_tahun(2020)

    linkedin = SosialMedia()
    linkedin.set_nama('Linkedin')
    linkedin.set_link('https://www.linkedin.com/in/maaf72/')

    instagram = SosialMedia()
    instagram.set_nama('Instagram')
    instagram.set_link('https://www.instagram.com/maaf72/')

    mantan_boss = Rujukan()
    mantan_boss.set_nama('Elon Musk')
    mantan_boss.set_instansi('Space Toon')
    mantan_boss.set_email('elon@musk.com')
    mantan_boss.set_no_hp('081269696969')

    bahasa_jepang = Bahasa()
    bahasa_jepang.set_nama('Bahasa Jepang')
    bahasa_jepang.set_level('N1')

    ngoding = Kemampuan()
    ngoding.set_nama('Ngoding')

    fatih = Customer()
    fatih.set_nama('Fatih')
    fatih.set_job('Pengangguran')
    fatih.set_foto('https://maaf72.github.io/assets/image/photo.png')
    fatih.add_edukasi(sd)
    fatih.add_edukasi(smp)
    fatih.add_edukasi(sma)
    fatih.add_edukasi(s1)
    fatih.add_pengalaman(magang)
    fatih.add_penghargaan(icpc)
    fatih.add_sosial_media(linkedin)
    fatih.add_sosial_media(instagram)
    fatih.add_rujukan(mantan_boss)
    fatih.add_bahasa(bahasa_jepang)
    fatih.add_kemampuan(ngoding)

    formal = Template()
    formal.set_nama('formal')
    formal.set_file('template.html')
    formal.set_deskripsi('Ini template buat ngelamar doi bray')

    py_cv = CV()
    py_cv.set_customer(fatih)
    py_cv.set_template(formal)

    unique_code = create(ref, json.loads(py_cv.to_json()))

    if unique_code:
        print('Berhasil membuat cv data', unique_code)
        generate(ref, unique_code)
        
@sync
async def generate_pdf(unique_code):
    try:
        browser = await launch()
        page = await browser.newPage()
        await page.setViewport({
            'height': 0,
            'width': 0, 
            'preferCSSPageSize': True,
            'deviceScaleFactor': 2
        })
        await page.goto(f'file://{abs_path}/temp/{unique_code}.html')
        await page.waitFor(2000)

        await page.pdf({
            'path': f'temp/{unique_code}.pdf',
            'format': 'A4',
            'printBackground': True
        })
        
        await browser.close()
        
        return True
    except Exception as e:
        print('error when generating pdf', e)
        
    return False

enable_cors()
#create_dummy(ref)
#get(ref, '-MW_Amrt1vl3s1AaTWfv')
