class Bahasa:
    def __init__(self, obj={}):
        self.set_nama(obj.get('nama', None))
        self.set_level(obj.get('level', None))

    def set_nama(self, nama):
        self.nama = nama

    def set_level(self, level):
        self.level = level
