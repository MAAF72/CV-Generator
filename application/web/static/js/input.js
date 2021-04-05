$(function() {
    function toJson(obj) {
        let data = {}
        $.each(obj, (k, v) => data[v.name] = v.value)
        return data
    }

    function serialize(form, cnt) {
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

    function getBase64(file, cb) {
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function() {
            cb(reader.result)
        }
        reader.onerror = function(error) {
            console.log('Error: ', error)
        }
    }


    /* Start : Add More Button */
    function add_socialmedia(name = '', link = '') {
        const html = `
        <div id="content-socialmedia">
            <div class="div-content-row">
                <input type="text" class="form-control" id="label" name="label" value="${name}" aria-describedby="label" placeholder="Social Media">
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
        $('#form-socialmedia').append(html)
    }

    function add_edukasi() {
        const html = `
        <div id="content-edukasi">
            <div class="div-content-row">
                <input type="text" class="form-control" id="jenjang" name="jenjang" aria-describedby="jenjang" placeholder="Jenjang">
                <div style="width: 16px;"></div>
                <input type="text" class="form-control" id="instansi" name="instansi" aria-describedby="instansi" placeholder="Instansi">
            </div>
            <div class="div-content-row">
                <input type="date" class="form-control" id="tahun_mulai" name="tahun_mulai" aria-describedby="tahun_mulai" placeholder="Date Start">
                <div style="width: 16px;"></div>
                <input type="date" class="form-control" id="tahun_selesai" name="tahun_selesai" aria-describedby="tahun_selesai" placeholder="Date End">
            </div>
            <div class="div-content-row">
                <textarea class="form-control" id="deskripsi" name="deskripsi" rows="3" placeholder="Describe about your Educate"></textarea>
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
        $('#form-edukasi').append(html)
    }

    function add_penghargaan() {
        const html = `
        <div id="content-penghargaan">
            <div class="div-content-row">
                <input type="text" class="form-control" id="name" name="name" aria-describedby="name" placeholder="Nama Penghargaan">
                <div style="width: 16px;"></div>
                <input type="text" class="form-control" id="instansi" name="instansi" aria-describedby="instansi" placeholder="Instansi">
            </div>
            <div class="div-content-row">
                <input type="date" class="form-control" id="tahun" name="tahun" aria-describedby="tahun" placeholder="tahun">
            </div>
            <div class="div-content-row">
                <textarea class="form-control" id="deskripsi" name="deskripsi" rows="3" placeholder="Describe about your Penghargaan"></textarea>
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
        $('#form-penghargaan').append(html)
    }    

    function add_kemampuan() {
        const html = `
        <div id="content-kemampuan">
            <div class="div-content-row">
                <input type="text" class="form-control" id="kemampuan" name="kemampuan" aria-describedby="kemampuan" placeholder="Kemampuan">
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
        $('#form-kemampuan').append(html)
    }

    function add_pengalaman() {
        var html = `
        <div id="content-pengalaman">               
            <div class="div-content-row">
                <input type="text" class="form-control" id="nama" name="nama" aria-describedby="nama" placeholder="Job Role">
                <div style="width: 16px;"></div>
                <input type="text" class="form-control" id="instansi" name="instansi" aria-describedby="instansi" placeholder="Instansi">
            </div>
            
            <div class="div-content-row">
                <input type="date" class="form-control" id="tahun_mulai" name="tahun_mulai"aria-describedby="tahun_mulai" placeholder="Date Start">
                <div style="width: 16px;"></div>
                <input type="date" class="form-control" id="tahun_selesai" name="tahun_selesai" aria-describedby="tahun_selesai" placeholder="Date End">
            </div>
            
            <div class="div-content-row">
                <textarea class="form-control" id="deskripsi" name="deskripsi" rows="3" placeholder="Your responsibilty"></textarea>
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
        $('#form-pengalaman').append(html)
    }

    function add_rujukan() {
        const html = `
        <div id="content-rujukan">
            <div class="div-content-row">
                <input type="text" class="form-control" id="name" name="name" aria-describedby="name" placeholder="Name">
                <div style="width: 16px;"></div>
                <input type="text" class="form-control" id="perusahaan" name="perusahaan" aria-describedby="perusahaan" placeholder="Perusahaan">
            </div>
            
            <div class="div-content-row">
                <input type="text" class="form-control" id="noHp" name="noHp" aria-describedby="Phone" placeholder="Phone">
                <div style="width: 16px;"></div>
                <input type="text" class="form-control" id="email" name="email" aria-describedby="email" placeholder="email">
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
        $('#form-rujukan').append(html)
    }

    function add_bahasa() {
        const html = `
        <div id="content-bahasa">
                                <div class="div-content-row">
                                    <input type="text" class="form-control" name="nama" aria-describedby="nama" placeholder="Bahasa">
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
        $('#form-bahasa').append(html);
    }
    /* End : Add More Button */

    /* Start : Delete Button */
    function delete_form_data(elem) {
        $(elem).parent().parent().remove()
    }
    /* End : Delete Button */

    /* Start : Add More Button Handler */
    $('#add-socialmedia').click(() => add_socialmedia())
    $('#add-edukasi').click(() => add_edukasi())
    $('#add-penghargaan').click(() => add_penghargaan())
    $('#add-kemampuan').click(() => add_kemampuan())
    $('#add-pengalaman').click(() => add_pengalaman())
    $('#add-rujukan').click(() => add_rujukan())
    $('#add-bahasa').click(() => add_bahasa())
    /* End : Add More Button Handler */

    /* Start : Delete Button Handler */
    $(document).on("click", `[id*="delete-"]`, function() {
        delete_form_data(this)
    })
    /*
    $(document).on("click", "#delete-socialmedia", function() {
        delete_form_data(this)
    })
    $(document).on("click", "#delete-edukasi", function() {
        delete_form_data(this)
    })
    $(document).on("click", "#delete-penghargaan", function() {
        delete_form_data(this)
    })
    $(document).on("click", "#delete-kemampuan", function() {
        delete_form_data(this)
    })
    $(document).on("click", "#delete-pengalaman", function() {
        delete_form_data(this)
    })
    $(document).on("click", "#delete-rujukan", function() {
        delete_form_data(this)
    })
    $(document).on("click", "#delete-bahasa", function() {
        delete_form_data(this)
    })
    */
    
    /*
    $('#delete-edukasi').click(() => delete_edukasi())
    $('#delete-penghargaan').click(() => delete_penghargaan())
    $('#delete-kemampuan').click(() => delete_kemampuan())
    $('#delete-pengalaman').click(() => delete_pengalaman())
    $('#delete-rujukan').click(() => delete_rujukan())
    $('#delete-bahasa').click(() => delete_bahasa())
    */
    /* End : Delete Button Handler */
    

    function send(photo) {
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
                'photo': photo,
                'socialmedia': formSocialmedia,
                'edukasi': formEdukasi,
                'penghargaan': formPenghargaan,
                'pengalaman': formPengalaman,
                'rujukan': formRujukan,
                'bahasa': formBahasa,
                'kemampuan': formKemampuan,
            },
            'template': {}
        }

        $.post('/save', datas)
            .done((res) => console.log('Sukses' + res))
            .fail((err) => console.log('Gagal' + err))

        console.log(datas);
    }


    $('#btn-choose-template').click(() => {
        let photo = $('#photo')[0].files[0]
        getBase64(photo, send)
    })
})



//navbar show when scroll down
window.onscroll = function(ev) {
    var x = document.getElementById("navbar-div");
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        //x.style.display = "default";
        x.className = "mx-auto navbar fixed-bottom";
    } else {
        //x.style.display = "none";
        x.className = "d-none";
    }
}