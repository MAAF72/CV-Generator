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

$(function() {
    const path_name = window.location.pathname.split('/')
    const unique_code = path_name[2]
    const generator_endpoint = `http://cv-generator-core.herokuapp.com/generate`
    const ms = Date.now();
    const file_url = `https://storage.googleapis.com/cv-generator-e29dd.appspot.com/cv/${unique_code}.pdf?rand=${ms}`

    $('#btn-choose-template').click(() => window.location.replace(`/choose-template/${unique_code}`))

    $('#btn-download-cv').click(() => {
        fetch(file_url)
            .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = url
                a.download = `CVGen-${unique_code}.pdf`
                a.click()
                window.URL.revokeObjectURL(url)
            })
            .catch(() => alert('Gagal cok'))
    })

    $('#copy-button').click(() => {
        $('#kode-unik').select();
        document.execCommand('copy')
    })
                

    function generate() {
        
        $.ajax({
            url: `${generator_endpoint}/${unique_code}`,
            type: 'GET',
            success: (res) => {
                if (res != 'ERROR') {
                    swal.close();
                    alert('Your cv is ready to download!')
                    $('#btn-download-cv').prop('disabled', false)
                    $('#btn-download-cv').text('Download your CV')
                } else {
                    swal.close();
                    alert('Failed to generate your cv')
                }
                $('#cv-preview-section').html(`<embed src="${file_url}#toolbar=0&navpanes=0&scrollbar=0" class="cv-preview">`)
            },
            error: (err) => {
                swal.close();
                alert('Error on generating your cv')
            }
        })
    }

    generate()
    
    //showing value = unique_code in tags input
    document.getElementById("kode-unik").value = unique_code;
})

