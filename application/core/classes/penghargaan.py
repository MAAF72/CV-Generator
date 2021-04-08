class Penghargaan:
    def __init__(self, obj={}):
        self.set_nama(obj.get('nama', None))
        self.set_instansi(obj.get('instansi', None))
        self.set_tahun(obj.get('tahun', None))
        self.set_deskripsi(obj.get('deskripsi', None))

    def set_nama(self, nama):
        self.nama = nama

    def set_instansi(self, instansi):
        self.instansi = instansi

    def set_tahun(self, tahun):
        self.tahun = tahun
        
    def set_deskripsi(self, deskripsi):
        self.deskripsi = deskripsi
