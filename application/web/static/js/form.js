//navbar show when scroll down
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
  if (currentScrollPos < 20) {
    // I am using 'display' instead of 'top':
    document.getElementById("navbar-div").className = 'mx-auto navbar fixed-bottom';
  } else {
    document.getElementById("navbar-div").className = "d-none";
  }
}

function toJson(obj) {
    let data = {}
    for (const [k, v] of Object.entries(obj)) { data[v.name] = v.value }
    return data
}

function serialize(form, cnt, py_class = null) {
    let arr = form.serializeArray()
    if (arr.length % cnt != 0) throw Error('Macem tak betul yang ngoding')

    let res = []

    for (let i = 0; i < arr.length; i += cnt) {
        let temp = []
        for (let j = 0; j < cnt; j++) temp.push(arr[i + j])
        res.push(toJson(temp))
    }

    return res
}

async function readFileAsDataURL(file) {
    let result_base64 = await new Promise((resolve) => {
        let fileReader = new FileReader()
        fileReader.onload = (e) => resolve(fileReader.result)
        fileReader.readAsDataURL(file)
    })
    return result_base64;
}

function fill_identity({ nama = '', email = '', no_hp = '', portolio = '', job = '', deskripsi = '', photo = ''}) {
    /*
    $('#form-customer #nama').val(customer.nama)
    //$('#form-customer #email').val(customer.email)
    //$('#form-customer #no_hp').val(customer.no_hp)
    $('#form-customer #job').val(customer.job)
    //$('#form-customer #deskripsi').val(customer.deskripsi)

    //nanti pakai destructuring aja, samain aja sama struktur jsonnya
    */
}

/* Start : Add More Button */
function add_sosial_media({ nama = '', link = '' }) {
    const html = `
    <div id="content-socialmedia">
        <div class="div-content-row">
            <input type="text" class="form-control" id="nama" name="nama" value="${nama}" aria-describedby="label" placeholder="Social Media">
            <div style="width: 16px;"></div>
            <input type="text" class="form-control" id="link" name="link" value="${link}" aria-describedby="link" placeholder="Link">
        </div>
        <div class="row justify-content-end">
            <button type="button" id="delete-socialmedia" class="btn btn-outline-danger justify-content-end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </button>
        </div>
        <hr>
    </div>`
    document.getElementById('form-socialmedia').insertAdjacentHTML('beforeend', html)
}

function add_edukasi({ jenjang = '', instansi = '', tahun_mulai = '', tahun_selesai = '', deskripsi = '' }) {
    const html = `
    <div id="content-edukasi">
        <div class="div-content-row">
            <input type="text" class="form-control" id="jenjang" name="jenjang" value="${jenjang}" aria-describedby="jenjang" placeholder="Jenjang">
            <div style="width: 16px;"></div>
            <input type="text" class="form-control" id="instansi" name="instansi" value="${instansi}" aria-describedby="instansi" placeholder="Instansi">
        </div>
        <div class="div-content-row">
            <input type="date" class="form-control" id="tahun_mulai" name="tahun_mulai" value="${tahun_mulai}" aria-describedby="tahun_mulai" placeholder="Date Start">
            <div style="width: 16px;"></div>
            <input type="date" class="form-control" id="tahun_selesai" name="tahun_selesai" value="${tahun_selesai}" aria-describedby="tahun_selesai" placeholder="Date End">
        </div>
        <div class="div-content-row">
            <textarea class="form-control" id="deskripsi" name="deskripsi" rows="3" placeholder="Describe about your Educate">${deskripsi}</textarea>
        </div>
        <div class="row justify-content-end">
            <button type="button" id="delete-edukasi" class="btn btn-outline-danger justify-content-end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </button>
        </div>
        <hr>
    </div>
    `
    document.getElementById('form-edukasi').insertAdjacentHTML('beforeend', html)
}

function add_penghargaan({ nama = '', instansi = '', tahun = '', deskripsi = '' }) {
    const html = `
    <div id="content-penghargaan">
        <div class="div-content-row">
            <input type="text" class="form-control" id="nama" name="nama" value="${nama}" aria-describedby="name" placeholder="Nama Penghargaan">
            <div style="width: 16px;"></div>
            <input type="text" class="form-control" id="instansi" name="instansi" value="${instansi}" aria-describedby="instansi" placeholder="Instansi">
        </div>
        <div class="div-content-row">
            <input type="date" class="form-control" id="tahun" name="tahun" value="${tahun}" aria-describedby="tahun" placeholder="tahun">
        </div>
        <div class="div-content-row">
            <textarea class="form-control" id="deskripsi" name="deskripsi" rows="3" placeholder="Describe about your Penghargaan">${deskripsi}</textarea>
        </div>
        <div class="row justify-content-end">
            <button type="button" id="delete-penghargaan" class="btn btn-outline-danger justify-content-end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </button>
        </div>
        <hr>
    </div>
    `
    document.getElementById('form-penghargaan').insertAdjacentHTML('beforeend', html)
}    

function add_kemampuan({ nama = '' }) {
    const html = `
    <div id="content-kemampuan">
        <div class="div-content-row">
            <input type="text" class="form-control" id="nama" name="nama" value="${nama}" aria-describedby="kemampuan" placeholder="Kemampuan">
        </div>
        <div class="row justify-content-end">
            <button type="button" id="delete-kemampuan" class="btn btn-outline-danger justify-content-end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </button>
        </div>
        <hr>
    </div>
    `
    document.getElementById('form-kemampuan').insertAdjacentHTML('beforeend', html)
}

function add_pengalaman({ nama = '', instansi = '', tahun_mulai = '', tahun_selesai = '', deskripsi = '' }) {
    var html = `
    <div id="content-pengalaman">               
        <div class="div-content-row">
            <input type="text" class="form-control" id="nama" name="nama" value="${nama}" aria-describedby="nama" placeholder="Job Role">
            <div style="width: 16px;"></div>
            <input type="text" class="form-control" id="instansi" name="instansi" value="${instansi}" aria-describedby="instansi" placeholder="Instansi">
        </div>
        
        <div class="div-content-row">
            <input type="date" class="form-control" id="tahun_mulai" name="tahun_mulai" value="${tahun_mulai}" aria-describedby="tahun_mulai" placeholder="Date Start">
            <div style="width: 16px;"></div>
            <input type="date" class="form-control" id="tahun_selesai" name="tahun_selesai" value="${tahun_selesai}" aria-describedby="tahun_selesai" placeholder="Date End">
        </div>
        
        <div class="div-content-row">
            <textarea class="form-control" id="deskripsi" name="deskripsi" rows="3" placeholder="Your responsibilty">${deskripsi}</textarea>
        </div>
        <div class="row justify-content-end">
            <button type="button" id="delete-pengalaman" class="btn btn-outline-danger justify-content-end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </button>
        </div>
        <hr>
    </div>
    `
    document.getElementById('form-pengalaman').insertAdjacentHTML('beforeend', html)
}

function add_rujukan({ nama = '', instansi = '', no_hp = '', email = '' }) {
    const html = `
    <div id="content-rujukan">
        <div class="div-content-row">
            <input type="text" class="form-control" id="nama" name="nama" value="${nama}" aria-describedby="name" placeholder="Name">
            <div style="width: 16px;"></div>
            <input type="text" class="form-control" id="instansi" name="instansi" value="${instansi}" aria-describedby="instansi" placeholder="Instansi">
        </div>
        
        <div class="div-content-row">
            <input type="text" class="form-control" id="no_hp" name="no_hp" value="${no_hp}" aria-describedby="Phone" placeholder="Phone">
            <div style="width: 16px;"></div>
            <input type="text" class="form-control" id="email" name="email" value="${email}" aria-describedby="email" placeholder="email">
        </div>
        <div class="row justify-content-end">
            <button type="button" id="delete-rujukan" class="btn btn-outline-danger justify-content-end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </button>
        </div>
        <hr>
    </div>
    `
    document.getElementById('form-rujukan').insertAdjacentHTML('beforeend', html)
}

function add_bahasa({ nama = '', level = '' }) {
    const html = `
    <div id="content-bahasa">
        <div class="div-content-row">
            <input type="text" class="form-control" name="nama" value="${nama}" aria-describedby="nama" placeholder="Bahasa">
            <div style="width: 16px;"></div>
            <select class="custom-select" id="level" name="level">
                <option hidden value="">Choose Level</option>
                <option value="Elementary">Elementary</option>
                <option value="Professional">Professional</option>
                <option value="Native">Native</option>
            </select>
            <!--
                <input type="text" class="form-control" id="level" name="level" aria-describedby="level" placeholder="Level">
                -->
        </div>
        <div class="row justify-content-end">
            <button type="button" id="delete-bahasa" class="btn btn-outline-danger justify-content-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
        </div>
        <hr>
    </div>
    `
    document.getElementById('form-bahasa').insertAdjacentHTML('beforeend', html)
}
/* End : Add More Button */

/* Start : Delete Button */
function delete_form_data(elem) {
    elem.parentNode.parentNode.remove()
}
/* End : Delete Button */

/* Start : Button Handler Using JQuery */
$(function() {
    const path_name = window.location.pathname.split('/')
    let unique_code = path_name.length >= 3 ? path_name[2] : null


    $('#add-socialmedia').click(() => add_sosial_media({}))
    $('#add-edukasi').click(() => add_edukasi({}))
    $('#add-penghargaan').click(() => add_penghargaan({}))
    $('#add-kemampuan').click(() => add_kemampuan({}))
    $('#add-pengalaman').click(() => add_pengalaman({}))
    $('#add-rujukan').click(() => add_rujukan({}))
    $('#add-bahasa').click(() => add_bahasa({}))

    $(document).on("click", `[id*="delete-"]`, function() {
        delete_form_data(this)
    })

    $(document).on("change", `[id*="tahun_mulai"]`, function() {
        // get value of this(tahun_mulai) with format year-month-day
        var month = this.getUTCMonth() + 1; //months from 1-12
        var day = this.getUTCDate();
        var year = this.getUTCFullYear();

        newdate = year + "-" + month + "-" + day;

        const tahun_selesai = $(this).siblings('#tahun_selesai')[0]
        $(tahun_selesai).attr('min', newdate)
    })

    $('#btn-choose-template').click(() => {
        //tampilkan loader
        Swal.fire({
            title: 'Almost Done',
            html: 'We generate your data, please choose template after this loading finish',
            allowOutsideClick: false,
            showCancelButton: false,
            showConfirmButton: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            },
        });



        let foto = $('#photo')[0].files[0]
        console.log(foto)
        readFileAsDataURL(foto)
            .then((foto_base64) => {
                let formCustomer = serialize($('#form-customer'), 6);
                let formSocialmedia = serialize($('#form-socialmedia'), 2);
                let formEdukasi = serialize($('#form-edukasi'), 5);
                let formPenghargaan = serialize($('#form-penghargaan'), 4);
                let formPengalaman = serialize($('#form-pengalaman'), 5);
                let formRujukan = serialize($('#form-rujukan'), 4);
                let formBahasa = serialize($('#form-bahasa'), 2);
                let formKemampuan = serialize($('#form-kemampuan'), 1);

                let datas = {
                    'customer': {
                        ...formCustomer[0],
                        'foto': foto_base64,
                        'list_sosial_media': formSocialmedia,
                        'list_edukasi': formEdukasi,
                        'list_penghargaan': formPenghargaan,
                        'list_pengalaman': formPengalaman,
                        'list_rujukan': formRujukan,
                        'list_bahasa': formBahasa,
                        'list_kemampuan': formKemampuan,
                    }
                }

                console.log(datas)

                let save_url = '/save' + (unique_code != null ? `/${unique_code}` : ``)

                $.ajax({
                    url: save_url,
                    type: 'POST',
                    data: JSON.stringify(datas),
                    contentType: 'application/json',
                    success: (res) => {
                        if (res != 'ERROR') {
                            swal.close();
                            if (unique_code == null) {
                                unique_code = res
                            }
                            console.log('Sukses, ' + res)
                            window.location.replace(`/choosetemplate/${unique_code}`)
                        } else {
                            swal.close();
                            alert('Gagal submit data')
                        }
                    },
                    error: (err) => {
                        swal.close();
                        console.log('Ajax Error')
                        console.log(err)
                    }
                })
            })
    })
})
/* End : Button Handler Using JQuery */