import React, { Component } from 'react';
import { cardCall } from '../API/cardCall'
import Card from './Card'

class CardList extends Component {

  state = {
    cards: [],
  }

  componentDidMount(){
    cardCall()
    .then(result => {
      this.setState({
        cards: result.data
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    const { cards } = this.state
    return (
      <div className="cards-container">
        {cards.map(card => (
            <Card 
              key={card.uuid}
              card={card} 
            />
        ))}
      </div>
    );
  }
}

export default CardList;