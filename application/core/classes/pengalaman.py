class Pengalaman:
    def __init__(self, obj={}):
        self.set_nama(obj.get('nama', None))
        self.set_instansi(obj.get('instansi', None))
        self.set_tahun_mulai(obj.get('tahun_mulai', None))
        self.set_tahun_selesai(obj.get('tahun_selesai', None))
        self.set_deskripsi(obj.get('deskripsi', None))

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
