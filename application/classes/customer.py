class Customer:
    def __init__(self):
        self.nama = None
        self.job = None
        self.deskripsi = None
        self.foto = None
        self.email = None
        self.no_hp = None

        self.list_pengalaman = []
        self.list_edukasi = []
        self.list_penghargaan = []
        self.list_kemampuan = []
        self.list_sosial_media = []
        self.list_bahasa = []
        self.list_rujukan = []

    def set_nama(self, nama):
        self.nama = nama

    def set_job(self, job):
        self.job = job

    def set_deskripsi(self, deskripsi):
        self.deskripsi = deskripsi

    def set_foto(self, foto):
        self.foto = foto
        
    def set_no_hp(self, no_hp):
        self.no_hp = no_hp

    def set_email(self, email):
        self.email = email

    def add_pengalaman(self, pengalaman):
        self.list_pengalaman.append(pengalaman)

    def add_edukasi(self, edukasi):
        self.list_edukasi.append(edukasi)

    def add_penghargaan(self, penghargaan):
        self.list_penghargaan.append(penghargaan)

    def add_kemampuan(self, kemampuan):
        self.list_kemampuan.append(kemampuan)

    def add_sosial_media(self, sosial_media):
        self.list_sosial_media.append(sosial_media)

    def add_bahasa(self, bahasa):
        self.list_bahasa.append(bahasa)

    def add_rujukan(self, rujukan):
        self.list_rujukan.append(rujukan)
