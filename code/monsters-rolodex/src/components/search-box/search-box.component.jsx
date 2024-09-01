// REMEMBER: just because you import a specific `.css` file for a component, this action
// **DOES NOT MEAN** these styles **only** apply to **this component**.
// React collects all these files into a single `.css` file that applies the standard
// scoping rules of `.css`.
import './search-box.styles.css';

const SearchBox = ({className, placeholder, onChangeHandler}) => (
  <input className={`search-box ${className}`}
         type='search'
         placeholder={placeholder}
         onChange={onChangeHandler}/>
)

export default SearchBox;
