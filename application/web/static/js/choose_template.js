$(function() {
    const path_name = window.location.pathname.split('/')
    const unique_code = path_name[2]

    let template_id = null
    console.log(`Unique Code = ${unique_code}`)

    $('#download-cv').click(() => {
        console.log(`Unique Code = ${unique_code}`)
        console.log(template_id);
        //do operation here to update cv's template with selected template then proceed to download page
    })

    //function select one template
    $('.row .radio').click(function(){
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
        template_id = $(this).attr('data-value');
    });

    

})
