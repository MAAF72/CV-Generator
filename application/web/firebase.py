from firebase_admin import credentials, db, initialize_app, storage
from firebase_admin.exceptions import FirebaseError
import random
import string
import os

def generate_unique_code():
    def rand_aplhanum(k):
        return ''.join(random.choices(string.ascii_uppercase + string.digits, k=k))

    return '-'.join(rand_aplhanum(4) for _ in range(3))

class Firebase:
    def __init__(self):
        initialize_app(
            credentials.Certificate('cv-generator-e29dd-firebase-adminsdk-zvelg-ae5fe10a7a.json'), 
            {
                'databaseURL': 'https://cv-generator-e29dd-default-rtdb.firebaseio.com/',
                'storageBucket': 'cv-generator-e29dd.appspot.com'
            }
        )
        self.cv = db.reference('/cvs')
        self.template = db.reference('/templates')
        self.bucket = storage.bucket()

    def read_templates(self):
        return self.template.get()

    def read_template(self, id):
        return self.template.child(id).get()

    def create_cv(self, data):
        unique_code = generate_unique_code()
        while self.read_cv(unique_code) != None:
            unique_code = generate_unique_code()
        
        self.cv.child(unique_code).set(data)

        return unique_code

    def read_cv(self, unique_code):
        return self.cv.child(unique_code).get()

    def update_cv(self, unique_code, data):
        if self.read_cv(unique_code) is None:
            return False

        self.cv.child(unique_code).update(data)
        return True

    def update_cv_template(self, unique_code, data):
        if self.read_cv(unique_code) is None:
            return False

        self.cv.child(f'{unique_code}/template').update(data)
        return True

    def upload_file(self, file_data):
        blob = self.bucket.blob(f"upload/{file_data['name']}")
        blob.upload_from_string(
            data=file_data['content'], 
            content_type=file_data['type']
        )
        blob.make_public()
        
        return blob.public_url