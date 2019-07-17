import React, { Component} from 'react';
import HomePage from './components/Homepage';
import './App.css';
import WhoWeAre from './components/WhoWeAre';

class App extends Component {
  constructor(){
    super()
    this.state = {
      isHomePageDisplayed : true,
    }
  }
  render(){
  return (
    <div className="App">
      <HomePage />
      <WhoWeAre />
    </div>
  );
  }
}

export default App;
