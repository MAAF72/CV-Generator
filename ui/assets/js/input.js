$(function() {

    function toJson(array) {
        let datas = [];
        $.each(array, function(k, v)  {
            datas.push(
                {
                    [v.name]: v.value
                }
            )
        })
        return datas
    }

    //content-socialmedia
    $(document).on('click', '#add-socialmedia', function() {
        var html = `<div id="content-socialmedia">

        <div class="div-content-row">
            <input type="text" class="form-control" id="label" name="label" aria-describedby="label" placeholder="Social Media">
            <div style="width: 16px;"></div>
            <input type="text" class="form-control" id="link" name="link" aria-describedby="link" placeholder="Link">
        </div>
        <div class="row justify-content-end">
            <button type="button" id="delete-socialmedia" class="btn btn-outline-danger justify-content-end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
        </div>
        <hr>
    </div>`;
        $('#form-socialmedia').append(html);
    });

    //button delete
    $(document).ready(function () {
        $(document).on('click', '#delete-socialmedia', function() {
            var element = document.getElementById("content-socialmedia");
            element.remove();
        });
    });
    
    //content-edukasi
    $(document).on('click', '#add-edukasi', function() {
        var html = `<div id="content-edukasi">

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
    </div>`;
        $('#form-edukasi').append(html);
    });

    //button delete
    $(document).ready(function () {
        $(document).on('click', '#delete-edukasi', function() {
            var element = document.getElementById("content-edukasi");
            element.remove();
        });
    });

    //content-penghargaan
    $(document).on('click', '#add-penghargaan', function() {
        var html = `<div id="content-penghargaan">

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
    </div>`;
        $('#form-penghargaan').append(html);
    });

    //button delete
    $(document).ready(function () {
        $(document).on('click', '#delete-penghargaan', function() {
            var element = document.getElementById("content-penghargaan");
            element.remove();
        });
    });

    //content-kemampuan
    $(document).on('click', '#add-kemampuan', function() {
        var html = `<div id="content-kemampuan">

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
    </div>`;
        $('#form-kemampuan').append(html);
    });

    //button delete
    $(document).ready(function () {
        $(document).on('click', '#delete-kemampuan', function() {
            var element = document.getElementById("content-kemampuan");
            element.remove();
        });
    });

    //content-pengalaman
    $(document).on('click', '#add-pengalaman', function() {
        var html = `<div id="content-pengalaman">
                        
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
    </div>`;
        $('#form-pengalaman').append(html);
    });

    //button delete
    $(document).ready(function () {
        $(document).on('click', '#delete-pengalaman', function() {
            var element = document.getElementById("content-pengalaman");
            element.remove();
        });
    });


    //content-rujukan
    $(document).on('click', '#add-rujukan', function() {
        var html = `<div id="content-rujukan">

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
    </div>`;
        $('#form-rujukan').append(html);
    });

    //button delete
    $(document).ready(function () {
        $(document).on('click', '#delete-rujukan', function() {
            var element = document.getElementById("content-rujukan");
            element.remove();
        });
    });


    //content-bahasa
    //button addmore
    $(document).on('click', '#add-bahasa', function() {
        var html = `<div id="content-bahasa">

        <div class="div-content-row">
            <input type="text" class="form-control" name="nama" aria-describedby="nama" placeholder="Bahasa">
            <div style="width: 16px;"></div>
            <input type="text" class="form-control" id="level" name="level" aria-describedby="level" placeholder="Level">
        </div>
        
        <div class="row justify-content-end">
            <button type="button" id="delete-bahasa" class="btn btn-outline-danger justify-content-end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </button>
        </div>
        <hr>
    </div>  `;
        $('#form-bahasa').append(html);
    });

    //button delete
    $(document).ready(function () {
        $(document).on('click', '#delete-bahasa', function() {
            var element = document.getElementById("content-bahasa");
            element.remove();
        });
    });



    //get value
    $(document).on('click', '#btn-choose-template', function() {
        // Ambil selector dari semua form
        let uniqueCode = "ABCDEFG";
        let formCustomer = toJson($('#form-customer').serializeArray()); 
        let formSocialmedia = toJson($('#form-socialmedia').serializeArray());
        let formEdukasi = toJson($('#form-edukasi').serializeArray());
        let formPenghargaan = toJson($('#form-penghargaan').serializeArray());
        let formPengalaman = toJson($('#form-pengalaman').serializeArray());
        let formRujukan = toJson($('#form-rujukan').serializeArray());
        let formBahasa = toJson($('#form-bahasa').serializeArray());
        let formKemampuan = toJson($('#form-kemampuan').serializeArray());

        let datas = {
            'code': uniqueCode,
            'customer': {
                //customer identity
                'name': formCustomer[0]["name"],
                'email': formCustomer[1]["email"],
                'noHp': formCustomer[2]["noHp"],
                'portFolio': formCustomer[3]["portFolio"],
                'job': formCustomer[4]["job"],
                'deskripsi': formCustomer[5]["deskripsi"],

                //component value
                'socialmedia':formSocialmedia,
                'edukasi':formEdukasi,
                'penghargaan':formPenghargaan,
                'pengalaman':formPengalaman,
                'rujukan':formRujukan,
                'bahasa':formBahasa,
                'kemampuan':formKemampuan,
            },
            'template':{}
        }

        console.log(datas);

    });
});



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
