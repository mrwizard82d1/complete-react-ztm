import {Component} from 'react';

import './card-list.styles.css';

class CardList extends Component {

  render() {
    console.log(this.props.monsters);
    console.log('CardList.render() called');

    const { monsters } = this.props;

    return (
      <div className="card-list">
        {
          monsters.map(monster => {
            const {id, name, email} = monster;

            return (
              <div className='card-container'
                   key={id}>
                {/* This code is rendered for each `monster` in `monsters`*/}
                <img alt={`monster ${name}`}
                     src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <h2>{name}</h2>
                <p>{email}</p>
              </div>
          )
        })}
      </div>
    )
  }
}

export default CardList;
