import React, { Component } from 'react';
import { contextHOC } from '../Context/ContextProvider';
import { cardCall } from '../API/cardCall';
import { Link } from 'react-router-dom';

class CardId extends Component {

  state = {
    cards: []
  }

  paintCard = () => {
    const { cards } = this.state;
   return  cards.map((card, index) => (
      <div key={index}>
        <h2>{card.title}</h2>
        <p>{card.about}</p>
        <p>{card.description}</p>
        <h4>Meeting Poin: </h4>
        <p>{card.meeting_point}</p>
      </div>
    ))
  }

 componentDidMount(){
  const { id } = this.props.match.params;
  cardCall()
  .then(result => {
    const card = result.data.filter(card => card.title === id)
    this.setState({
      cards: card
    })
  })
  .catch(error => console.log(error))
  
 }

  render() {
    console.log(this.state.cards)
    return (
      <div>
        {this.paintCard()}
        <Link to={'/'} >
          Back
        </Link>
      </div>
    );
  }
}

export default contextHOC(CardId);