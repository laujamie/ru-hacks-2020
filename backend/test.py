from google.cloud import speech_v1p1beta1
from google.cloud.speech_v1p1beta1 import enums
import io
import base64


def sample_recognize():
    client = speech_v1p1beta1.SpeechClient()
    file_path = 'test'

    language_code = 'en-US'
    sample_rate_hertz = 16000

    config = {'language_code': language_code, 'audio_channel_count': 2}

    with io.open(file_path, 'rb') as f:
        content = base64.b64decode(f.read())
    audio = {'content': content}
    response = client.recognize(config, audio)
    for result in response.results:
        alternative = result.alternatives[0]
        print(u'Transcript: {}'.format(alternative.transcript))


if __name__ == '__main__':
    sample_recognize()