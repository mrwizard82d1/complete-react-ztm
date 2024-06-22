import { Component } from 'react';  // The `Component` class provided by react

import './App.css';

class App extends Component {
  constructor() {
    // Use constructor to instantiate **local** state

    // **Must** be called to initialize parent state
    super();  // Instantiates `Component` class

    // Initalize state with a JSON object
    this.state = {
      monsters: [
        { name: 'Linda' },
        { name: 'Frank' },
        { name: 'Jacky' },
        { name: 'Andrei' }
      ]
    }
  }
  
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => {
            // Using `monster.name` for key value works - but only because 
            // **we have no duplicate names**
            return <h1 key={monster.name}>{ monster.name }</h1>
          })
        }
      </div>
    );
}}

export default App