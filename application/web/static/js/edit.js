$(function() {
    const path_name = window.location.pathname.split('/')
    const unique_code = path_name[2]

    async function get_file_from_url(url, name, defaultType='image/jpeg') {
        let file_promise = await new Promise(async (resolve) => {
            const response = await fetch(url)
            const data = await response.blob()
            resolve(new File([data], name, {
                type: response.headers.get('content-type') || defaultType,
            }))
        })
        return file_promise
    }

    $.get(`/get/${unique_code}`, dataType='json')
        .done((res) => {
            const customer = res.customer

            fill_identity(customer)

            get_file_from_url(customer.foto, 'previous-photo.jpg').then((file) => readPhoto(file))

            const list_bahasa = customer.list_bahasa
            for (let i = 0; i < list_bahasa.length; i++) {
                add_bahasa(list_bahasa[i])
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
                add_sosial_media(list_sosial_media[i])
            }
        })
        .fail((err) => {
            alert(`There is no CV with code ${unique_code}`)
            window.location.replace(`/`)
        })
})