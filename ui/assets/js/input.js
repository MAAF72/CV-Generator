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
    //content-edukasi
    //content-penghargaan
    //content-kemampuan
    //content-pengalaman
    //content-rujukan



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









    $(document).on('click', '#btn-choose-template', function() {
        // Ambil selector dari semua form
        let formSkills = toJson($('#form-skills').serializeArray());

        let datas = {
            //'appreciation': formAppreciations,
            'skills': formSkills
        }

        console.log(formSkills);

    });
});
