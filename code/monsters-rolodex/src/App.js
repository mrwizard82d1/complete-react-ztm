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
      monster1: {
        name: 'Linda'
      },
      monster2: {
        name: 'Frank'
      },
      monster3: {
        name: 'Jacky'
      }
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>{ this.state.monster1.name }</h1>
        <h1>{ this.state.monster2.name }</h1>
        <h1>{ this.state.monster3.name }</h1>
      </div>
    );
}}

export default App