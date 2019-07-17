import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import '../componentsCSS/Homepage.css';
import '../App.css';

const Homepage = ({goToWhoWeAre, goToPerformances, goToEvents, goToContact}) => {
  return(
    <Container>
      <header className="card-support head">
                <h1 className="title">Wild Circus</h1>
      </header>
      <div className="sections">
        <Row>
          <Col sm="12" md="6">
            
              <button className = "homepageButtons whoWeAreButton" onClick={goToWhoWeAre}>Who We Are</button>
              <button className = "homepageButtons performancesButton" onClick={goToPerformances}>Performances</button>
              <button className = "homepageButtons eventsButton" onClick={goToEvents}>Events Booking</button>
              <button className = "homepageButtons contactButton" onClick={goToContact}>Contact</button>
            
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Homepage;