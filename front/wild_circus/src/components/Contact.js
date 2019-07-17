import React from 'react';
import { Container } from 'reactstrap';
import '../componentsCSS/Contact.css';
import '../App.css';


const Contact = ({goToHomePage}) => {
  return (
    <Container>
      <header>
        <h2 className = "contactTitle">Contact</h2>
      </header>
    </Container>
  )
}

export default Contact;