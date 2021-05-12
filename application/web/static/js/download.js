$(function() {
    const path_name = window.location.pathname.split('/')
    const unique_code = path_name[2]
    const generator_endpoint = `http://cv-generator-core.herokuapp.com/generate`
    const file_url = `https://storage.googleapis.com/cv-generator-e29dd.appspot.com/cv/${unique_code}.pdf`

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
                alert('Your file has downloaded!')
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
            },
            error: (err) => {
                swal.close();
                alert('Error on generating your cv')
            }
        })
    }

    generate()
})