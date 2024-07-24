import { Component } from 'react';

// REMEMBER: just because you import a specific `.css` file for a component, this action
// **DOES NOT MEAN** these styles **only** apply to **this component**.
// React components all these files into a single `.css` file that applies the standard
// scoping rules of `.css`.
import './search-box.styles.css';

class SearchBox extends Component {
  render() {
    return (
      <input className={`search-box ${this.props.className}`}
             type='search'
             placeholder={this.props.placeholder}
             onChange={this.props.onChangeHandler}/>
    )
  }
}

export default SearchBox;
