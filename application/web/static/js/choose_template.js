$(function() {
    const path_name = window.location.pathname.split('/')
    const unique_code = path_name[2]
    const save_url = `/set-template/${unique_code}`

    let template_id = null

    $('#edit-cv').click(() => window.location.replace(`/edit/${unique_code}`))

    $('#download-cv').click(() => {
        if (template_id == null) {
            alert('Please select template first')
            return
        }

        $.ajax({
            url: save_url,
            type: 'POST',
            data: JSON.stringify({ 'template_id': template_id }),
            contentType: 'application/json',
            beforeSend: () => {
                //tampilkan loader
                Swal.fire({
                    title: 'Almost Done',
                    html: 'Your CV will be ready to download...',
                    allowOutsideClick: false,
                    showCancelButton: false,
                    showConfirmButton: false,
                    onBeforeOpen: () => {
                        Swal.showLoading()
                    },
                })
            },
            success: (res) => {
                if (res != 'ERROR') {
                    swal.close();
                    window.location.replace(`/download/${unique_code}`)
                } else {
                    swal.close();
                    alert('Gagal update template')
                }
            },
            error: (err) => {
                swal.close();
                alert('Error on saving your data')
            }
        })
    })

    //function select one template
    $('.row .radio').click(function() {
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
        template_id = $(this).attr('data-value');
    });

    

})
