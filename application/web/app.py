from flask import Flask, render_template, request, abort
from firebase import Firebase
from blob_converter import convert

app = Flask(__name__)
fb = Firebase()

@app.route('/')
def home():
    ctx = {
        'title': 'Homepage CV-Generator',
        'css': [],
        'js': [
            'landing.js',
            'input.js',
        ]
    }
    return render_template('landing.html', **ctx)

@app.route('/input')
def input():
    test = True
    ctx = {
        'title': 'Input Data',
        'css': [],
        'js': [
            'form.js',
            'input_test.js' if test else 'input.js',
        ]
    }
    return render_template('form.html', **ctx)

@app.route('/choose-template/<unique_code>')
def choose_template(unique_code):
    ctx = {
        'title': 'Choose Template You Like',
        'css': [
            'choose_template.css'
        ],
        'js': [
            'choose_template.js',
        ],
        'templates': fb.read_templates()
    }
    return render_template('choose_template.html', **ctx)

@app.route('/download/<unique_code>')
def download(unique_code):
    ctx = {
        'title': 'Finish | Download CV',
        'css': [],
        'js': [
            'download.js',
        ]
    }
    return render_template('download.html', **ctx)

@app.route('/edit/<unique_code>')
def edit(unique_code):
    if fb.read_cv(unique_code) is None:
      abort(404)

    ctx = {
        'title': 'Edit Data',
        'css': [],
        'js': [
            'form.js',
            'edit.js',
        ]
    }
    return render_template('form.html', **ctx)

@app.route('/get/<unique_code>')
def get(unique_code):
    data = fb.read_cv(unique_code)

    if data is None:
      abort(404)

    return data

@app.route('/set-template/<unique_code>',  methods=['POST'])
def set_template(unique_code):
    try:
        template_id = request.json['template_id']
        data_cv = fb.read_cv(unique_code)
        data_template = fb.read_template(template_id)

        if data_cv is None or data_template is None:
            abort(404)

        fb.update_cv_template(f'{unique_code}', {
            'id': template_id,
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

            base64_photo = None

            if 'foto' in data['customer']:
                base64_photo = data['customer']['foto']
                del data['customer']['foto']

            url_file_photo = None

            if unique_code:
                url_file_photo = fb.read_cv(unique_code)['customer']['foto']
                if not fb.update_cv(unique_code, data):
                  return 'ERROR'
            else:
                unique_code = fb.create_cv(data)

            if base64_photo:
                file_photo = convert(base64_photo, unique_code)
                url_file_photo = fb.upload_file(file_photo)

            fb.update_cv(f'{unique_code}/customer', {
                'foto': url_file_photo
            })

            return unique_code
        except Exception as e:
            print(e)
            return 'ERROR'
    return 'OK'

if __name__ == '__main__':
    app.jinja_env.auto_reload = True
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run()
