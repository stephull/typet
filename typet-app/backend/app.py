from flask import Flask, render_template
app = Flask(__name__)

from ProfileAPI import profile_api
app.register_blueprint(profile_api)

@app.route("/home")
@app.route("/home/user=<string:user>", methods=['GET', 'POST'])
def home(user=None):
    home_input = (f", {user}") if user != None else ""
    return render_template(
        "home.html", greet=home_input
    )
    
if __name__ == "__main__":
    app.run(debug=True)