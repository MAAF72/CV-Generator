$(function() {
    const path_name = window.location.pathname.split('/')
    const unique_code = path_name[2]
    const generator_endpoint = `http://cv-generator-core.herokuapp.com/generate`
    const file_url = `https://storage.googleapis.com/cv-generator-e29dd.appspot.com/cv/${unique_code}.pdf`

    $('#btn-download-cv').click(() => {
        fetch(file_url)
            .then(resp => resp.blob())
            .then(blob => {
                console.log(blob)
                const url = window.URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = url
                a.download = 'CV.pdf'
                a.click()
                window.URL.revokeObjectURL(url)
                alert('your file has downloaded!')
            })
            .catch(() => alert('Gagal cok'))
    })

    function generate() {
        $.ajax({
            url: `${generator_endpoint}/${unique_code}`,
            type: 'GET',
            success: (res) => {
                if (res != 'ERROR') {
                    swal.close();
                    $('#btn-download-cv').prop('disabled', false)
                    $('#btn-download-cv').text('Download your CV')
                } else {
                    swal.close();
                    alert('Gagal generate cv')
                }
            },
            error: (err) => {
                swal.close();
                console.log('Ajax Error')
                console.log(err)
            }
        })
    }

    generate()
})