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
