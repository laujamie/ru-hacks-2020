import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Recorder from './Recorder';
import blobToBase64 from '../utils/blobToBase64';

const NotesCard = ({ store, dispatch }) => {
  const [record, setRecord] = useState(false);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState(false);
  const startRecording = () => {
    setRecord(true);
  };
  const stopRecording = () => {
    setRecord(false);
  };

  const sendAudio = (audio) => {
    axios
      .get(`${process.env.REACT_APP_API_BASE}/audio`, {
        params: {
          audioString: audio,
        },
      })
      .then((res) => {
        console.log(res);
        setNotes(res.data.message);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  useEffect(() => {
    if (store && store.blob) {
      blobToBase64(store.blob.blob, sendAudio);
    }
  }, [store]);

  return (
    <Card style={{ height: '90vh' }} className="text-container">
      <Card.Header className="buttons-container">
        <Container>
          <Row className="buttons-row">
            <Col>
              <Button
                className="record-button"
                style={{ width: '17vh' }}
                variant="warning"
                onClick={startRecording}
              >
                record
              </Button>
            </Col>
            <Col>
              <Button
                style={{ width: '17vh' }}
                variant="danger"
                className="stop-button"
                onClick={stopRecording}
              >
                stop
              </Button>
            </Col>
            <Col>
              <Button
                style={{ width: '17vh' }}
                variant="info"
                className="btn-info"
              >
                copy
              </Button>
            </Col>

            <Col>
              <Button
                style={{ width: '17vh' }}
                variant="info"
                className="btn-info"
              >
                clear
              </Button>
            </Col>
            <Col>
              <Button
                style={{ width: '17vh' }}
                variant="info"
                className="btn-info"
              >
                save
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Header>
      <Card.Body className="meeting-text">
        <Recorder record={record} store={store} dispatch={dispatch} />
        <br />
        <u className="meeting-mins-text">Meeting Minutes</u>
        <p className="date-text">Date: May 17, 2020</p>
        <p className="attendees-text">
          Attendees: Edmund, Elaine, Jamie, Jessie{' '}
        </p>
        <p className="api-text">
          {notes ? notes : 'Please record to add notes'}
        </p>
        {error && (
          <p className="api-text">An error occurred, please try again.</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default NotesCard;
