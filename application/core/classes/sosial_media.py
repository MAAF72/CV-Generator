class SosialMedia:
    def __init__(self, obj={}):
        self.set_nama(obj.get('nama', None))
        self.set_link(obj.get('link', None))

    def set_nama(self, nama):
        self.nama = nama

    def set_link(self, link):
        self.link = link
