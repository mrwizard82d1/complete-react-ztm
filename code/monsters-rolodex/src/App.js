import { Component } from 'react';  // The `Component` class provided by react

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    // Use constructor to instantiate **local** state

    // **Must** be called to initialize parent state
    super();  // Instantiates `Component` class

    // Initalize state with a JSON object
    this.state = {
      name: 'Larry'
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi, { this.state.name }!</p>
        <button onClick={ () => { 
          // Does **not** call `this.setState()`; consequently, react knows **nothing** about the change.
          this.state.name = 'Lawrence';
          console.log(this.state) 
          }}>
            Change name
         </button>
        </header>
      </div>
    );
}}

export default App