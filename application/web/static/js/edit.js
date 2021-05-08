$(function() {
    const path_name = window.location.pathname.split('/')
    const unique_code = path_name[2]

    console.log(`Unique Code = ${unique_code}`)
    $.get(`/get/${unique_code}`, dataType='json')
        .done((res) => {
            console.log(res)
            const customer = res.customer

            $('#form-customer #nama').val(customer.nama)
            $('#form-customer #email').val(customer.email)
            $('#form-customer #no_hp').val(customer.no_hp)
            $('#form-customer #job').val(customer.job)
            $('#form-customer #portfolio').val(customer.portfolio)
            $('#form-customer #deskripsi').val(customer.deskripsi)

            const list_bahasa = customer.list_bahasa
            for (let i = 0; i < list_bahasa.length; i++) {
                
            }

            const list_kemampuan = customer.list_kemampuan
            for (let i = 0; i < list_kemampuan.length; i++) {
                add_kemampuan(list_kemampuan[i])
            }

            const list_edukasi = customer.list_edukasi
            for (let i = 0; i < list_edukasi.length; i++) {
                add_edukasi(list_edukasi[i])
            }

            const list_pengalaman = customer.list_pengalaman
            for (let i = 0; i < list_pengalaman.length; i++) {
                add_pengalaman(list_pengalaman[i])
            }

            const list_penghargaan = customer.list_penghargaan
            for (let i = 0; i < list_penghargaan.length; i++) {
                add_penghargaan(list_penghargaan[i])
            }

            const list_rujukan = customer.list_rujukan
            for (let i = 0; i < list_rujukan.length; i++) {
                add_rujukan(list_rujukan[i])
            }

            const list_sosial_media = customer.list_sosial_media
            for (let i = 0; i < list_sosial_media.length; i++) {
                add_socialmedia(list_sosial_media[i])
            }
            //load the photo
        })
        .fail((err) => {
            alert(`There is no CV with code ${unique_code}`)
            window.location.replace(`/`)
        })
})