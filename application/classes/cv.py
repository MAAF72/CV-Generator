import json

class CV:
    def __init__(self, dict=None):
        self.code = None
        self.customer = None
        self.template = None
        self.file = None

    def set_code(self, code):
        self.code = code

    def set_customer(self, customer):
        self.customer = customer

    def set_template(self, template):
        self.template = template

    def set_file(self, file):
        self.file = file