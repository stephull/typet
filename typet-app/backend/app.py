from flask import Flask, render_template
app = Flask(__name__)
import time

# home
@app.route("/")
def home(user=None):
    #user = "Stephen"    # test
    return render_template(
        "home.html", greet=((f", {user}") if user != None else "")
    )
    
# profile, dyanmic URL
@app.route("/profile/<id>")
def profile(id):
    return render_template("profile.html", id=id)