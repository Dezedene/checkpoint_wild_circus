import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import backArrow from '../images/left-arrow.png';
import '../App.css';
import '../componentsCSS/WhoWeAre.css'

const WhoWeAre = ({goToHomePage}) => {
  return (
    <Container>
      <header>
      <h2 className = "pageTitle">Who We Are</h2>
      </header>
      <section>
        <h3 className = "presentationOfMathAndSeb">This lovely story began at Wild Code School when Math and Seb hopefully met, 
        from the moment they had THIS feeling, Wild Circus was born, their never-ending story equally. 
        Their shows are just about talking to each other, the originality of their exchanges led them to be recognized all around the world. Wow.  </h3>
      </section>
        <div>
          <img className="mathAndSebPicture" src={"https://i.imgur.com/GD31Umr.png"} alt="mathAndSeb"/>
        </div> 
        <div>
          <button className= "backButton" onClick={goToHomePage}><img className="backArrow" src={backArrow} alt="backArrow"/></button>
        </div>
    </Container>

  )
}

export default WhoWeAre;