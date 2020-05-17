import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import HeaderImage from './header-image.png';
import Logo from './logo.png';

const Header = () => (
  <div>
    <div>
      <Container>
        <Row>
          <Col xs={6}>
            <Row>
              <img
                src={Logo}
                className="parrot-logo"
                alt="logo"
                style={{ width: '100%' }}
              />
            </Row>
            <Row>
              <p className="slogan-subtitle">
                <br />
                Collective thinking made simpler.
              </p>
            </Row>
          </Col>

          <Col xs={6}>
            <img
              src={HeaderImage}
              className="header-image"
              alt="logo"
              style={{ width: '100%' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Header;
