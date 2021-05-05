$(function() {
    function downloader(file_url) {
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
    }

    downloader("https://storage.googleapis.com/cv-generator-e29dd.appspot.com/cv/-MXjigtztMHe_iJ6I8U3.pdf")
    //downloader("https://maaf72.github.io/assets/image/photo.png")
})