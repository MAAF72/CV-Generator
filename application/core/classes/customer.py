from .pengalaman import Pengalaman
from .edukasi import Edukasi
from .penghargaan import Penghargaan
from .kemampuan import Kemampuan
from .sosial_media import SosialMedia
from .bahasa import Bahasa
from .rujukan import Rujukan

class Customer:
    def __init__(self, obj={}):
        self.set_nama(obj.get('nama', None))
        self.set_job(obj.get('job', None))
        self.set_deskripsi(obj.get('deksripsi', None))
        self.set_foto(obj.get('foto', None))
        self.set_email(obj.get('email', None))
        self.set_no_hp(obj.get('no_hp', None))

        self.list_pengalaman = []
        self.list_edukasi = []
        self.list_penghargaan = []
        self.list_kemampuan = []
        self.list_sosial_media = []
        self.list_bahasa = []
        self.list_rujukan = []
    
        for p in obj.get('list_pengalaman', []):
            self.add_pengalaman(Pengalaman(p))
        
        for e in obj.get('list_edukasi', []):
            self.add_edukasi(Edukasi(e))
            
        for p in obj.get('list_penghargaan', []):
            self.add_penghargaan(Penghargaan(p))
            
        for k in obj.get('list_kemampuan', []):
            self.add_kemampuan(Kemampuan(k))
            
        for sm in obj.get('list_sosial_media', []):
            self.add_sosial_media(SosialMedia(sm))
            
        for b in obj.get('list_bahasa', []):
            self.add_bahasa(Bahasa(b))
            
        for r in obj.get('list_rujukan', []):
            self.add_rujukan(Rujukan(r))

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
