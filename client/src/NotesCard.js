import React from "react";
import { Card, Button } from "react-bootstrap";

const NotesCard = () => {
  return (
    <Card style={{ width: "60rem" }}>
      <Card.Header>
        <Button variant="warning">record</Button>
        <Button variant="danger">stop</Button>
        <Button variant="info">copy</Button>
        <Button variant="info">clear</Button>
        <Button variant="info">save</Button>
      </Card.Header>
      <Card.Body>
        <h>Meeting Minutes</h>
        <p>
          {" "}
          1. Event Schedule a. Workshops i. Machine Learning ii. Artificial
          Intelligence b. Meals i. Coffee chat with workshop leaders 2. Brand
          Management and Marketing a. Social media banners i. Assigned to:
          Design team b. Promo campaign ii. Assigned to Marketing 3. Attendees
          a. Registration i. 300 participants ii. 30 Volunteers and mentors iii.
          5 Speakers{" "}
        </p>
      </Card.Body>
    </Card>
  );
};

export default NotesCard;
