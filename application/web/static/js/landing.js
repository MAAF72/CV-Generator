$(function() {
    $('#edit-cv').click(() => {
        var unique_code = $('#input-unique-code').val()
        window.location.replace(`/edit/${unique_code}`)
    })
})