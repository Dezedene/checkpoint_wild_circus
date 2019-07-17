import React, { Component} from 'react';
import HomePage from './components/Homepage';
import WhoWeAre from './components/WhoWeAre';
import Performances from './components/Performances';
import Events from './components/Events';
import Contact from './components/Contact';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      isHomePageDisplayed : true,
      whoWeAreIsDisplayed : false,
      isPerformancesPageDisplayed: false,
      isEventsPageDisplayed : false,
      isContactPageDisplayed : false,
      numberOfWednesdayTicketPurchased: 0,
      numberOfThursdayTicketPurchased: 0,
      numberOfSaturdayTicketPurchased: 0,
      numberOfSundayTicketPurchased: 0,
      totalNumberOfTicketPurchased: 0,
    }
  }

  goToHomePage = (event) => {
    event.preventDefault()
    this.setState({
      isHomePageDisplayed: true,
      whoWeAreIsDisplayed: false,
      isPerformancesPageDisplayed: false,
      isEventsPageDisplayed : false,
    })
  }

  goToWhoWeAre = (event) => {
    event.preventDefault()
    this.setState({
      isHomePageDisplayed : false,
      whoWeAreIsDisplayed : true,
    })
  }

  goToPerformances = (event) => {
    event.preventDefault()
    this.setState({
      isHomePageDisplayed : false,
      isPerformancesPageDisplayed : true,
    })
  }
  
  goToEvents = (event) => {
    event.preventDefault()
    this.setState({
      isHomePageDisplayed : false,
      isEventsPageDisplayed : true,
    })
  }

  goToContact = (event) => {
    event.preventDefault()
    this.setState({
      isHomePageDisplayed : false,
      isContactPageDisplayed : true,
    })
  }

  buyWednesdayTicket = (event) => {
    event.preventDefault()
    this.setState({
      numberOfWednesdayTicketPurchased : this.state.numberOfWednesdayTicketPurchased +1,
      totalNumberOfTicketPurchased : this.state.totalNumberOfTicketPurchased +1,
    })
  }

  buyThursdayTicket = (event) => {
    event.preventDefault()
    this.setState({
      numberOfThursdayTicketPurchased : this.state.numberOfThursdayTicketPurchased +1,
      totalNumberOfTicketPurchased : this.state.totalNumberOfTicketPurchased +1,
    })
  }

  buySaturdayTicket = (event) => {
    event.preventDefault()
    this.setState({
      numberOfSaturdayTicketPurchased : this.state.numberOfSaturdayTicketPurchased +1,
      totalNumberOfTicketPurchased : this.state.totalNumberOfTicketPurchased +1,
    })
  }

  buySundayTicket = (event) => {
    event.preventDefault()
    this.setState({
      numberOfSundayTicketPurchased : this.state.numberOfSundayTicketPurchased +1,
      totalNumberOfTicketPurchased : this.state.totalNumberOfTicketPurchased +1,
    })
  }


  render() {
  return (
    <div className="App">
      {this.state.isHomePageDisplayed && 
      <HomePage goToWhoWeAre={this.goToWhoWeAre}
      goToPerformances={this.goToPerformances}
      goToEvents={this.goToEvents}
      goToContact={this.goToContact}/>}
      {this.state.whoWeAreIsDisplayed && 
      <WhoWeAre goToHomePage={this.goToHomePage}/>}
      {this.state.isPerformancesPageDisplayed &&
      <Performances goToHomePage={this.goToHomePage}/>}
      {this.state.isEventsPageDisplayed &&
      <Events goToHomePage={this.goToHomePage}
      buyWednesdayTicket={this.buyWednesdayTicket}
      buyThursdayTicket={this.buyThursdayTicket}
      buySaturdayTicket={this.buySaturdayTicket}
      buySundayTicket={this.buySundayTicket}
      totalNumberOfTicketPurchased={this.state.totalNumberOfTicketPurchased}/>}
      {this.state.isContactPageDisplayed &&
      <Contact goToHomePage={this.goToHomePage}/>}
    </div>
  )
  }
}

export default App;
