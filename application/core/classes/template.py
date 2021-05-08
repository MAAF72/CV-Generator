class Template:
    def __init__(self, obj={}):
        self.set_id(obj.get('id', None))
        self.set_nama(obj.get('nama', None))
        self.set_deskripsi(obj.get('deskripsi', None))
        self.set_file(obj.get('file', None))

    def set_id(self, id):
        self.id = id

    def set_nama(self, nama):
        self.nama = nama

    def set_deskripsi(self, deskripsi):
        self.deskripsi = deskripsi

    def set_file(self, file):
        self.file = file
