from flask import Flask, request, jsonify
from test import recognize

app = Flask(__name__)


@app.route('/')
@app.route('/audio')
def audio():
    audio_string = request.args.get('audioString')
    message = recognize(audio_string)
    print(message)
    return jsonify(message=message)

if __name__ == "__main__":
    app.run(port=8000)
