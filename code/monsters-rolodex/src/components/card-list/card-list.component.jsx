import {Component} from 'react';

class CardList extends Component {

  render() {
    console.log(this.props.monsters);
    console.log('CardList.render() called');

    const { monsters } = this.props;

    return (
      <div className="card-list">
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
