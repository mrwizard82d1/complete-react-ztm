import {Component} from 'react';

class CardList extends Component {

  render() {
    const { monsters } = this.props;

    console.log(`render ${ monsters.length }`);

    return (
      <div>
        {
          monsters.map(monster => (
            <h1 key={monster.id}> {monster.name} </h1>
          ))
        }
      </div>
    )
  }
}

export default CardList;
