from flask import Blueprint
profile_api = Blueprint('profile_api', __name__)

@profile_api.route("/profile")
def profile():
    data = {
        "name": "Stephen",
        "id": 123456,
        "summary": "Hi, my name is Stephen. I am the creator of this application. Welcome!",
        "type": "admin"
    }
    return data