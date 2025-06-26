from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/course/<int:course_id>")
def course_detail(course_id):
    return render_template("course.html", course_id=course_id)

if __name__ == "__main__":
    app.run(debug=True)
