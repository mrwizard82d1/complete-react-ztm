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
            <div className='card-container'>
              {/* This code is rendered for each `monster` in `monsters`*/}
              <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
            </div>
          ))
        }
      </div>
    )
  }
}

export default CardList;
