import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const NotesCard = () => {
  return (
    <Card style={{ height: "90vh" }} className="text-container">
      <Card.Header className="buttons-container">
        <Container>
          <Row className="buttons-row">
            <Col>
              <Button
                className="record-button"
                style={{ width: "17vh" }}
                variant="warning"
              >
                record
              </Button>
            </Col>
            <Col>
              <Button
                style={{ width: "17vh" }}
                variant="danger"
                className="stop-button"
              >
                stop
              </Button>
            </Col>
            <Col>
              <Button
                style={{ width: "17vh" }}
                variant="info"
                className="btn-info"
              >
                copy
              </Button>
            </Col>

            <Col>
              <Button
                style={{ width: "17vh" }}
                variant="info"
                className="btn-info"
              >
                clear
              </Button>
            </Col>
            <Col>
              <Button
                style={{ width: "17vh" }}
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
        <br />
        <u className="meeting-mins-text">Meeting Minutes</u>
        <p className="date-text">Date: May 17, 2020</p>
        <p className="attendees-text">
          Attendees: Edmund, Elaine, Jamie, Jessie{" "}
        </p>
        <p className="api-text">**OUTPUT TEXT GOES HERE**</p>
      </Card.Body>
    </Card>
  );
};

export default NotesCard;
