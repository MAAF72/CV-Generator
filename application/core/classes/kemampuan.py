class Kemampuan:
    def __init__(self, obj={}):
        self.set_nama(obj.get('nama', None))

    def set_nama(self, nama):
        self.nama = nama
