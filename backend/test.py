from google.cloud import speech_v1p1beta1
from google.cloud.speech_v1p1beta1 import enums
import io
import base64
import os

def recognize(audio_string):
    client = speech_v1p1beta1.SpeechClient()

    language_code = 'en-US'
    sample_rate_hertz = 16000

    config = {'language_code': language_code, 'audio_channel_count': 2}

    content = base64.b64decode(audio_string)
    audio = {'content': content}
    response = client.recognize(config, audio)
    res = ''
    for result in response.results:
        alternative = result.alternatives[0]
        res += alternative.transcript + '\n'
    return res

if __name__ == '__main__':
    print(recognize())
