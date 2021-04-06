from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/input')
def input():
    ctx = {
        'title': 'Input Data',
        'js': [
            'input.js'
        ]
    }
    return render_template('form.html', **ctx)

@app.route('/edit/<unique_code>')
def edit(unique_code):
    print(unique_code)
    ctx = {
        'title': 'Edit Data',
        'js': [
            'edit.js'
        ]
    }
    return render_template('form.html', **ctx)

@app.route('/get/<unique_code>')
def get(unique_code):
    print(unique_code)
    '''
    Update formnya make js aja, jadi ini ngereturn data cvnya aja, nah nanti ini dipanggil lewat ajax di form edit
    '''

    sample = '''
    {
      "customer" : {
        "foto" : "https://maaf72.github.io/assets/image/photo.png",
        "job" : "Pengangguran",
        "list_bahasa" : [ {
          "level" : "N1",
          "nama" : "Bahasa Jepang",
          "py_class" : "classes.bahasa.Bahasa"
        } ],
        "list_edukasi" : [ {
          "deskripsi" : "Ranking 1 paralel",
          "instansi" : "SDIT Usamah",
          "jenjang" : "Sekolah Dasar",
          "py_class" : "classes.edukasi.Edukasi",
          "tahun_mulai" : 2006,
          "tahun_selesai" : 2012
        }, {
          "deskripsi" : "Ranking 1 paralel",
          "instansi" : "SMPIT Avicenna",
          "py_class" : "classes.edukasi.Edukasi",
          "tahun_mulai" : 2012,
          "tahun_selesai" : 2015
        }, {
          "deskripsi" : "Wibu nolep sejati",
          "instansi" : "SMAIT Thariq Bin Ziyad",
          "py_class" : "classes.edukasi.Edukasi",
          "tahun_mulai" : 2015,
          "tahun_selesai" : 2018
        }, {
          "deskripsi" : "Kang ngoding",
          "instansi" : "Telkom University",
          "py_class" : "classes.edukasi.Edukasi",
          "tahun_mulai" : 2018,
          "tahun_selesai" : "Sekarang"
        } ],
        "list_kemampuan" : [ {
          "nama" : "Ngoding",
          "py_class" : "classes.kemampuan.Kemampuan"
        } ],
        "list_pengalaman" : [ {
          "deskripsi" : "Gagal magang, males nanyain kelanjutan jadwal magang ehe",
          "instansi" : "Forstok",
          "nama" : "Junior Software Engineer",
          "py_class" : "classes.pengalaman.Pengalaman",
          "tahun_mulai" : 2021,
          "tahun_selesai" : 2021
        } ],
        "list_penghargaan" : [ {
          "deskripsi" : "Lomba Competitive Programming tingkat Internasional",
          "instansi" : "ACM",
          "nama" : "Finalist ACM ICPC Asia Jakarta Regional 2020",
          "py_class" : "classes.penghargaan.Penghargaan",
          "tahun" : 2020
        } ],
        "list_rujukan" : [ {
          "email" : "elon@musk.com",
          "instansi" : "Space Toon",
          "nama" : "Elon Musk",
          "no_hp" : "081269696969",
          "py_class" : "classes.rujukan.Rujukan"
        } ],
        "list_sosial_media" : [ {
          "link" : "https://www.linkedin.com/in/maaf72/",
          "nama" : "Linkedin",
          "py_class" : "classes.sosial_media.SosialMedia"
        }, {
          "link" : "https://www.instagram.com/maaf72/",
          "nama" : "Instagram",
          "py_class" : "classes.sosial_media.SosialMedia"
        } ],
        "nama" : "Fatih",
        "py_class" : "classes.customer.Customer"
      },
      "file" : "https://storage.googleapis.com/cv-generator-e29dd.appspot.com/cv/-MX6-FNRedoi1FXCiSS0.png",
      "py_class" : "classes.cv.CV",
      "template" : {
        "deskripsi" : "Ini template buat ngelamar doi bray",
        "file" : "template.html",
        "nama" : "Formal",
        "py_class" : "classes.template.Template"
      }
    }
    '''.strip()

    return sample

@app.route('/save/', defaults={ 'unique_code': None }, methods=['POST'])
@app.route('/save/<unique_code>', methods=['POST'])
def save(unique_code):
    if request.method == 'POST':
        if unique_code == None:
            print('Buat baru')
        else:
            print('Update')
        result = request.form
        print(result)
    return 'OK'

app.run()