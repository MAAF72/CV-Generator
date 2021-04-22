from flask import Flask, render_template, request, abort
from firebase import Firebase
from blob_converter import convert
import json

app = Flask(__name__)
fb = Firebase()

@app.route('/home')
def home():
    ctx = {
        'title': 'Homepage CV-Generator',
        'js': [
            'input.js'
        ]
    }
    return render_template('landingpage.html', **ctx)

@app.route('/input')
def input():
    test = True
    ctx = {
        'title': 'Input Data',
        'js': [
            'input_test.js' if test else 'input.js',
        ]
    }
    return render_template('form.html', **ctx)

@app.route('/choosetemplate/<unique_code>')
def choosetemplate(unique_code):
    ctx = {
        'title': 'Choose Template You Like',
        'js': [
            'choose_template.js'
        ],
        'templates': fb.read_templates()
    }
    return render_template('choosetemplate.html', **ctx)

@app.route('/download')
def download():
    ctx = {
        'title': 'Finish | Download CV',
        'js': [
            'download.js'
        ]
    }
    return render_template('download.html', **ctx)

@app.route('/edit/<unique_code>')
def edit(unique_code):
    if fb.read_cv(unique_code) == None:
      abort(404)

    ctx = {
        'title': 'Edit Data',
        'js': [
            'edit.js'
        ]
    }
    return render_template('form.html', **ctx)

@app.route('/get/<unique_code>')
def get(unique_code):
    # get data from database
    # parse it to string
    # return it
    print(unique_code)
    '''
    Update formnya make js aja, jadi ini ngereturn data cvnya aja, nah nanti ini dipanggil lewat ajax di form edit
    '''

    data = fb.read_cv(unique_code)

    if data == None:
      abort(404)

    return data

@app.route('/save', defaults={ 'unique_code': None }, methods=['POST'])
@app.route('/save/<unique_code>', methods=['POST'])
def save(unique_code):
    # get input as string of json,
    # parse to json,
    # get and convert base64 image to file,
    # upload file to storage
    # change photo field to url of uploaded file
    # upload json to database
    if request.method == 'POST':
        try:  
            data = request.json
            base64_photo, data['customer']['foto'] = data['customer']['foto'], ''
            if unique_code == None:
                unique_code = fb.create_cv(data)
            else:
                if not fb.update_cv(unique_code, data):
                  return 'ERROR'
            print('unique_code', unique_code)
            file_photo = convert(base64_photo, unique_code)

            fb.update_cv(f'{unique_code}/customer', {
                'foto': fb.upload_file(file_photo)                
            })

            return unique_code
        except Exception as e:
            print('ini errornya', str(e))
            return 'ERROR'
    return 'OK'

if __name__ == '__main__':
    app.jinja_env.auto_reload = True
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run()
