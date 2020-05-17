import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import Recorder from './Recorder';

const NotesCard = ({ store, dispatch }) => {
  const [record, setRecord] = useState(false);
  const startRecording = () => {
    setRecord(true);
  };
  const stopRecording = () => {
    setRecord(false);
  };

  useEffect(() => {
    console.log(store.blob);
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
