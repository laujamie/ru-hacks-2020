import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Header = () => (
  <div>
    <div>
      <Container>
        <Row>
          <Col xs={6}>
            <Row>
              <img src="logo.png" class="parrot-logo" alt="logo" />
            </Row>
            <Row>
              <p className="slogan-subtitle">
                <br />
                Collective thinking made simpler.
              </p>
            </Row>
          </Col>

          <Col xs={6}>
            <img src="header-image.png" class="header-image" alt="logo" />
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Header;
