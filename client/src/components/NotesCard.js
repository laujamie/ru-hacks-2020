import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import Recorder from './Recorder';
import blobToBase64 from '../utils/blobToBase64';

const NotesCard = ({ store, dispatch }) => {
  const [record, setRecord] = useState(false);
  const [notes, setNotes] = useState('');
  const startRecording = () => {
    setRecord(true);
  };
  const stopRecording = () => {
    setRecord(false);
  };

  const sendAudio = (audio) => {
    axios
<<<<<<< HEAD
      .get(`${process.env.REACT_APP_API_BASE}/audio`, {
        params: {
          audioString: audio,
        }
      })
=======
      .get(`${process.env.REACT_APP_API_BASE}/audio?audioString=${audio}`)
>>>>>>> 6f08562306e252a8d013b62957c0cc9cc99b7afc
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (store.blob) {
      blobToBase64(store.blob.blob, sendAudio);
    }
  }, [store]);

  return (
    <Card style={{ width: '60rem' }}>
      <Card.Header>
        <Button variant="warning" onClick={startRecording}>
          record
        </Button>
        <Button variant="danger" onClick={stopRecording}>
          stop
        </Button>
        <Button variant="info">copy</Button>
        <Button variant="info">clear</Button>
        <Button variant="info">save</Button>
      </Card.Header>
      <Card.Body>
        <Recorder record={record} store={store} dispatch={dispatch} />
        <h1>Meeting Minutes</h1>
        <p>
          {' '}
          1. Event Schedule a. Workshops i. Machine Learning ii. Artificial
          Intelligence b. Meals i. Coffee chat with workshop leaders 2. Brand
          Management and Marketing a. Social media banners i. Assigned to:
          Design team b. Promo campaign ii. Assigned to Marketing 3. Attendees
          a. Registration i. 300 participants ii. 30 Volunteers and mentors iii.
          5 Speakers{' '}
        </p>
      </Card.Body>
    </Card>
  );
};

export default NotesCard;
