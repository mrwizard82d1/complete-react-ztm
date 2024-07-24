import {Component} from 'react';  // The `Component` class provided by react

import CardList from './components/card-list/card-list.component';
import SearchBox from "./components/search-box/search-box.component";

import './App.css';

class App extends Component {
  constructor() {
    // Use constructor to instantiate **local** state

    // **Must** be called to initialize parent state
    super();  // Instantiates `Component` class

    // Initialize state with a JSON object
    this.state = {
      monsters: [],
      textToMatch: '',
    };
  }

  componentDidMount() {

    // Mounting occurs only the first time a component is added to the DOM

    // Remember that `fetch` returns a `Promise` (that we will eventually get data)
    // Convert HTTP response to usable form that
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
          // This implementation completely replaces `this.state`
          return {monsters: users}
        }
      ));
  }

  onSearchChanged = (event) => {
    // "Calculate" the current `textToMatch`
    const textToMatch = event.target.value.toLocaleLowerCase();

    // Save `textToMatch` in the state for use later
    this.setState(() => {
      // The expression `{ textToMatch }` translates to an object whose
      // - Key is the name, `textToMatch` and whose
      // - Value is the value of the variable, `textToMatch`
      return {textToMatch};
    });
  };

  render() {
    console.log('App.render() called');

    const { monsters, textToMatch } = this.state;
    const { onSearchChanged } = this;

    const filteredMonsters = monsters.filter(monster => {
      const nameToTest = monster.name.toLocaleLowerCase();
      return nameToTest.includes(textToMatch);
    });

    return (
      <div className="App">
        <SearchBox
          className='search-box'
          placeholder="search monsters"
          onChangeHandler={onSearchChanged} />
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App
