from flask import Flask, render_template
app = Flask(__name__)

'''
API's for FLASK APP
'''
# profile api for fetching user
from ProfileAPI import profile_api
app.register_blueprint(profile_api)

# fetching randomized words using NLTK
from WordAPI import word_api
app.register_blueprint(word_api)

# upload text or audio files via AWS S3
from FileUploadAPI import file_upload_api
app.register_blueprint(file_upload_api)

'''
MAIN 
'''
@app.route("/home")
@app.route("/home/user=<string:user>", methods=['GET', 'POST'])
def home(user=None):
    home_input = (f", {user}") if user != None else ""
    return render_template(
        "home.html", greet=home_input
    )
    
if __name__ == "__main__":
    app.run(debug=True)