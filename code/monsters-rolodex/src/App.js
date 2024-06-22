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
        { 
          name: 'Linda',
          id: 'fefc6e3b2bb34005a6f97023ee98ea31'
         },
        { 
          name: 'Frank',
          id: 'c99214203ac24620930232a1789a72c9'
        },
        { 
          name: 'Jacky' ,
          id: '3cf8972ef676483db8315c987f2054cc'
        },
        { 
          name: 'Andrei',
          id: '1d69619591fc4f0db0844e34e4a61bb'
        }
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
            return <h1 key={ monster.id }>{ monster.name }</h1>
          })
        }
      </div>
    );
}}

export default App