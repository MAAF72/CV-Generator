$(function() {
    const path_name = window.location.pathname.split('/')
    const unique_code = path_name[2]

    console.log(`Unique Code = ${unique_code}`)

    $('button').click(() => {
        console.log(`Unique Code = ${unique_code}`)
        //do operation here to update cv's template with selected template then proceed to download page
    })
})