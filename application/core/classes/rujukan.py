class Rujukan:
    def __init__(self, obj={}):
        self.set_nama(obj.get('nama', None))
        self.set_instansi(obj.get('instansi', None))
        self.set_no_hp(obj.get('no_hp', None))
        self.set_email(obj.get('email', None))
        
    def set_nama(self, nama):
        self.nama = nama

    def set_instansi(self, instansi):
        self.instansi = instansi
    
    def set_no_hp(self, no_hp):
        self.no_hp = no_hp

    def set_email(self, email):
        self.email = email
