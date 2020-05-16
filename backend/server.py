from flask import Flask

app = Flask(__name__)

@app.route('/audio')
def audio():
    return 'Hello World!'
