import React, { Component} from 'react';
import HomePage from './components/Homepage';
import WhoWeAre from './components/WhoWeAre';
import Performances from './components/Performances'
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      isHomePageDisplayed : true,
      whoWeAreIsDisplayed : false,
      isPerformancesPageDisplayed: false,
    }
  }

  goToHomePage = (event) => {
    event.preventDefault()
    this.setState({
      isHomePageDisplayed: true,
      whoWeAreIsDisplayed: false,
      isPerformancesPageDisplayed: false,
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


  render(){
  return (
    <div className="App">
      {this.state.isHomePageDisplayed && 
      <HomePage goToWhoWeAre={this.goToWhoWeAre}
      goToPerformances={this.goToPerformances}/>} 
      {this.state.whoWeAreIsDisplayed && 
      <WhoWeAre goToHomePage={this.goToHomePage}/>}
      {this.state.isPerformancesPageDisplayed &&
      <Performances goToHomePage={this.goToHomePage}/>}
    </div>
  );
  }
}

export default App;
