import React, { Component} from 'react';
import HomePage from './components/Homepage';
import WhoWeAre from './components/WhoWeAre';
import Performances from './components/Performances'
import Events from './components/Events' 
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      isHomePageDisplayed : true,
      whoWeAreIsDisplayed : false,
      isPerformancesPageDisplayed: false,
      isEventsPageDisplayed : false,
      numberOfTicketPurchased: "",
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

  render() {
  return (
    <div className="App">
      {this.state.isHomePageDisplayed && 
      <HomePage goToWhoWeAre={this.goToWhoWeAre}
      goToPerformances={this.goToPerformances}
      goToEvents={this.goToEvents}/>}
      {this.state.whoWeAreIsDisplayed && 
      <WhoWeAre goToHomePage={this.goToHomePage}/>}
      {this.state.isPerformancesPageDisplayed &&
      <Performances goToHomePage={this.goToHomePage}/>}
      {this.state.isEventsPageDisplayed &&
      <Events goToHomePage={this.goToHomePage}/>}
    </div>
  )
  }
}

export default App;
