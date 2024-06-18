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
      // Ullustrating shallow merge
      // Change name field to refer to an object
      name: { firstName: 'Larry', lastName: 'Jones' },
      company: 'Improving'
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi, { this.state.name.firstName } { this.state.name.lastName }! I work at { this.state.company }.</p>
        <button onClick={ () => { 
          // This call now "breaks" because it assumes that `name` in our object has a value of type string
          // But our change has `name` referring to an **object**.:w
          this.setState({ name: 'Lawrence' });
          console.log(this.state) 
          }}>
            Change name
         </button>
        </header>
      </div>
    );
}}

export default App