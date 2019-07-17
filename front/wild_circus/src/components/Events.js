import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import backArrow from '../images/left-arrow.png';
import ticket from '../images/ticket.png';
import shop from '../images/shop.png';
import '../componentsCSS/Events.css';
import '../App.css';

const Events = ({goToHomePage, buyWednesdayTicket, buyThursdayTicket, buySaturdayTicket, buySundayTicket}) => {
  return (
    <Container>
      <header>
      <h2 className = "eventsTitle">Events Booking</h2>
      </header>

      <div className = "eventInstruction">
        <p> If you want to spend the smartest time ever and</p>
        <p>assist to the next confrontation, pick a date and </p>
        <p>book your ticket below !</p>
      </div>
      <div>
        <Row className = "wednesdayThursdayRow">
          <Col xs="5" md="3" className = "ticketSpace">
            <p>Wednesday</p>
            <p></p>
            <p>8 PM</p>
            <img className="ticketImage" src={ticket} alt="ticket" onClick={buyWednesdayTicket}/>
          </Col>
          <Col xs="5" md="3" className = "ticketSpace">
          <p>Thursday</p>
            <p>8 PM</p>
            <img className="ticketImage" src={ticket} alt="ticket" onClick={buyThursdayTicket}/>
          </Col>
        </Row>
        <Row>
          <Col xs="5" md="3" className = "ticketSpace">
          <p>Saturday</p>
            <p>8 PM</p>
            <img className="ticketImage" src={ticket} alt="ticket" onClick={buySaturdayTicket}/>
          </Col>
          <Col xs="5" md="3" className = "ticketSpace">
          <p>Sunday</p>
            <p>8 PM</p>
            <img className="ticketImage" src={ticket} alt="ticket" onClick={buySundayTicket}/>
          </Col>
        </Row>
      </div>

      <Row>
        <Col>
          <img className="shop" src={shop} alt="shop"/> 
        </Col>
      </Row>
       
  
      <div>
            <button className= "backButton" onClick={goToHomePage}><img className="backArrowPerf" src={backArrow} alt="backArrow"/></button>
      </div>
    </Container>
  )
  
}

export default Events;