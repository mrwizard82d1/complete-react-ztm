import './card.styles.css';

const Card = (props) => {
  const {id, name, email} = props.monster;

  return (
    <div className='card-container'
         key={id}>
      {/* This code is rendered for each `monster` in `monsters`*/}
      <img alt={`monster ${name}`}
           src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Card;
