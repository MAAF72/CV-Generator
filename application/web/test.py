import unittest
import json
import random

from app import app

class SaveCVTest(unittest.TestCase):
    def setUp(self):
        super().setUp()
        self.app = app.test_client()

    def test_update(self):
        unique_code = '63T9-9MDW-6WT5'
        old_data = self.app.get(f'/get/{unique_code}').data
        old_data_json = json.loads(old_data)

        tc = f'Ini deskripsinya berubah {random.randint(0, 100)}'
        old_data_json['customer']['deskripsi'] = tc
        del old_data_json['customer']['foto']

        response = self.app.post(
            f'/save/{unique_code}',
            data=json.dumps(old_data_json),
            content_type='application/json'
        )

        new_data = self.app.get('/get/63T9-9MDW-6WT5').data
        new_data_json = json.loads(new_data)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(new_data_json['customer']['deskripsi'], tc)

    def test_create(self):
        sample_unique_code = '63T9-9MDW-6WT5'
        sample_data = self.app.get(f'/get/{sample_unique_code}').data
        sample_data_json = json.loads(sample_data)

        tc = f'Ini template hasil duplicate {random.randint(0, 100)}'
        sample_data_json['customer']['deskripsi'] = tc
        del sample_data_json['customer']['foto']

        response = self.app.post(
            f'/save',
            data=json.dumps(sample_data_json),
            content_type='application/json'
        )

        created_unique_code = response.data.decode('utf-8')

        created_data = self.app.get(f'/get/{created_unique_code}').data
        created_data_json = json.loads(created_data)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(created_data_json['customer']['deskripsi'], tc)

if __name__ == '__main__':
    unittest.main()