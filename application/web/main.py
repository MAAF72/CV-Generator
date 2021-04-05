from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/input')
def input():
    ctx = {
        'title': 'Input Data'
    }
    return render_template('input.html', **ctx)

@app.route('/edit/<unique_code>')
def edit(unique_code):
    print(unique_code)
    ctx = {
        'title': 'Edit Data',
        'js': [
            'edit.js'
        ]
    }
    return render_template('input.html', **ctx)

@app.route('/get/<unique_code>')
def get(unique_code):
    print(unique_code)
    '''
    Update formnya make js aja, jadi ini ngereturn data cvnya aja, nah nanti ini dipanggil lewat ajax di form edit
    '''
    return 'INVALID'

@app.route('/save/<unique_code>', methods=['POST'])
def save(unique_code):
    if request.method == 'POST':
        result = request.form
        print(result)
    return 'OK'

app.run()