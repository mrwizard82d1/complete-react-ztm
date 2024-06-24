import { Component } from 'react';  // The `Component` class provided by react

import './App.css';

class App extends Component {
  constructor() {
    // Use constructor to instantiate **local** state

    // **Must** be called to initialize parent state
    super();  // Instantiates `Component` class

    // Initalize state with a JSON object
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    // Mounting occures only the the first time a component is added to the DOM

    // Remember that `fetch` returns a `Promise` (that we will eventually get data)

    fetch('https://jsonplaceholder.typicode.com/users').then((response) => 
      console.log(response)
    );
  }
  
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => {
            // Using `monster.name` for key value works - but only because 
            // **we have no duplicate names**
            return <div key={ monster.id }><h1>{ monster.name }</h1> </div>
          })
        }
      </div>
    );
}}

export default App