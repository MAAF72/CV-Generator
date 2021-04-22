import base64

def convert(blob, file_name):
    header, content = blob.split(';')
    file_type = header.split(':')[1]
    file_ext = file_type.split('/')[1]
    content = content.replace('base64,', '')
    file_data = base64.b64decode(content)

    return {
        'name': f'{file_name}.{file_ext}',
        'content': file_data,
        'type': file_type
    }