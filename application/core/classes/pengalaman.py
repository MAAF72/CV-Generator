class Pengalaman:
    def __init__(self):
        self.nama = None
        self.instansi = None
        self.tahun_mulai = None
        self.tahun_selesai = None
        self.deskripsi = None

    def set_nama(self, nama):
        self.nama = nama

    def set_instansi(self, instansi):
        self.instansi = instansi

    def set_tahun_mulai(self, tahun_mulai):
        self.tahun_mulai = tahun_mulai

    def set_tahun_selesai(self, tahun_selesai):
        self.tahun_selesai = tahun_selesai

    def set_deskripsi(self, deskripsi):
        self.deskripsi = deskripsi

    def get_durasi(self):
        return self.tahun_selesai - self.tahun_mulai