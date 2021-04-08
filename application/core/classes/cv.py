from .customer import Customer
from .template import Template
import json

class CV:
    def __init__(self, obj={}):
        self.set_code(obj.get('code', None))
        self.set_customer(Customer(obj.get('customer', {})))
        self.set_template(Template(obj.get('template', {})))
        self.set_file(obj.get('file', None))

    def set_code(self, code):
        self.code = code

    def set_customer(self, customer):
        self.customer = customer

    def set_template(self, template):
        self.template = template

    def set_file(self, file):
        self.file = file
        
    def to_json(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)
