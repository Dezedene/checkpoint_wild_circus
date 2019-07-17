import React, { Component} from 'react';
import HomePage from './components/Homepage';
import './App.css';
import WhoWeAre from './components/WhoWeAre';

class App extends Component {
  constructor(){
    super()
    this.state = {
      isHomePageDisplayed : true,
      whoWeAreIsDisplayed : false,
    }
  }

  goToWhoWeAre = (event) => {
    event.preventDefault()
    this.setState({
      isHomePageDisplayed : false,
      whoWeAreIsDisplayed : true,
    })
  }

  render(){
  return (
    <div className="App">
      {this.state.isHomePageDisplayed && 
      <HomePage goToWhoWeAre={this.goToWhoWeAre}/>} 
      {this.state.whoWeAreIsDisplayed && 
      <WhoWeAre />}
    </div>
  );
  }
}

export default App;
