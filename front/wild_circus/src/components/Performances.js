import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import backArrow from '../images/left-arrow.png';
import mathTokioHotel from '../images/mathTokioHotel.png';
import sebTokioHotel from '../images/sebTokioHotel.png';
import '../componentsCSS/Performances.css';
import '../App.css';

const Performances = ({goToHomePage}) => {
  return(
    <Container>
      <header>
      <h2 className = "performanceTitle">Performances</h2>
      </header>
      <h3 className = "eventTeasing">
          Program : <br/>
        - Exchanges as crazy as irrational. <br/> 
        - Eyes fights and multiple intimidations <br/> 
        - Transformations
      </h3>
      <Row className ="mathRow">
        <Col xs="6" md="3"><img className = "tokoiHotel" src={mathTokioHotel} alt = "mathTokoiHotel" /></Col>
        <Col xs="6" md="3"><p><strong>Particularity:</strong> He doesn't understand, and he's not as stupid as this</p>
        <p><strong>Special Attack: </strong>Crossing legs</p>
        <p><strong>Secret: </strong>He's a Super Saiyan</p></Col>
      </Row>
      <Row className = "sebRow">
        <Col xs="6" md="3"><img className = "tokoiHotel" src={sebTokioHotel} alt = "sebTokioHotel" /></Col>
        <Col xs="6" md="3"><p><strong>Particularity:</strong> He just don't care</p>
        <p><strong>Special Attack: </strong>To be inactive</p>
        <p><strong>Secret: </strong>The Red Room</p></Col>
      </Row>
      <div>
          <button className= "backButton" onClick={goToHomePage}><img className="backArrowPerf" src={backArrow} alt="backArrow"/></button>
      </div>

    </Container>
  )
}

export default Performances;