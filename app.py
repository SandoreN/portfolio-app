from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/github')
def github():
    return render_template('github.html')

@app.route('/linkedin')
def linkedin():
    return render_template('linkedin.html')

if __name__ == "__main__":
    app.run(debug=True)
