from flask import Blueprint
file_upload_api = Blueprint('file_upload_api', __name__)

@file_upload_api.route("/fileupload/text")
def postTextFile():
    pass

@file_upload_api.route("/fileupload/audio")
def postAudioFile():
    pass