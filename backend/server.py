from flask import Flask, request, jsonify
from flask_cors import CORS
from test import recognize

app = Flask(__name__)
app.config['TESTING'] = True
CORS(app)

@app.route('/audio')
def audio():
    audio_string = request.args.get('audioString')
    message = recognize(audio_string)
    print(message)
    return jsonify(message=message)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000)
