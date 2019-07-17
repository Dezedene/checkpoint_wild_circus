import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import '../componentsCSS/Homepage.css';
import '../App.css';

const Homepage = ({}) => {
  return(
    <Container>
      <header className="card-support head">
                <h1 className="title">Wild Circus</h1>
      </header>
      <div className="sections">
        <Row>
          <Col sm="12" md="6">
            
              <button className = "homepageButtons whoWeAre">Who We Are</button>
              <button className = "homepageButtons performances">Performances</button>
              <button className = "homepageButtons events">Events Booking</button>
              <button className = "homepageButtons contact">Contact</button>
            
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Homepage;