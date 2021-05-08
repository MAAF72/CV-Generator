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
    return render_template('landing.html', **ctx)

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

@app.route('/choose-template/<unique_code>')
def choose_template(unique_code):
    ctx = {
        'title': 'Choose Template You Like',
        'js': [
            'choose_template.js'
        ],
        'templates': fb.read_templates()
    }
    return render_template('choose_template.html', **ctx)

@app.route('/download/<unique_code>')
def download(unique_code):
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
    #print(unique_code)
    data = fb.read_cv(unique_code)

    if data == None:
      abort(404)

    return data

@app.route('/set-template/<unique_code>',  methods=['POST'])
def set_template(unique_code):
    try:
        data_cv = fb.read_cv(unique_code)
        data_template = fb.read_template(request.json['template_id'])

        if data_cv == None or data_template == None:
            abort(404)

        fb.update_cv_template(f'{unique_code}', {
            'nama': data_template['nama'],
            'deskripsi': data_template['deskripsi'],
            'file': data_template['file'],
        })

    except Exception as e:
        return 'ERROR'

    return 'OK'

@app.route('/save', defaults={ 'unique_code': None }, methods=['POST'])
@app.route('/save/<unique_code>', methods=['POST'])
def save(unique_code):
    if request.method == 'POST':
        try:  
            data = request.json
            base64_photo, data['customer']['foto'] = data['customer']['foto'], ''
            if unique_code == None:
                unique_code = fb.create_cv(data)
            else:
                if not fb.update_cv(unique_code, data):
                  return 'ERROR'

            file_photo = convert(base64_photo, unique_code)

            fb.update_cv(f'{unique_code}/customer', {
                'foto': fb.upload_file(file_photo)                
            })

            return unique_code
        except Exception as e:
            return 'ERROR'
    return 'OK'

if __name__ == '__main__':
    app.jinja_env.auto_reload = True
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run()
