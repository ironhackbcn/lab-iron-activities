import React, { Component } from 'react';
import { MyContext } from './context/Provider';
import axios from 'axios';
import { Button } from './Button';
import { FavButton } from './FavButton';

class Cards extends Component {

  state = {
    cards: [],
    status: 'isLoading',
  }

  componentDidMount() {
    axios.get('https://api.musement.com/api/v3/venues/164/activities?limit=18&offset=1')
      .then(result => {
        this.setState({
          cards: result.data,
          status: 'isLoaded',
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({
          status: 'isError'
        })
      });
  }

  render() {
    const theme = this.context;
    const { status, cards } = this.state;
    switch (status) {
      case 'isLoading':
        return 'Loading...'
      case 'isLoaded':
        return <ul class='all-events-list'>
          {cards.map((card, index) =>
            <li className='event-item' key={`${index}${card.title}`}>
              <div className='fav-container'>
                <FavButton onClickData={() => theme.favCard(card)} />
              </div>
              <img className='event-img' src={card.cover_image_url} alt={card.title} />
              <h4>{card.title}</h4>
              <p className='event-description'>{card.description}</p>
              <p>{card.retail_price.formatted_value}</p>
              <Button onClickData={() => { theme.addCard(card) }} />
            </li>)}
        </ul>
      case 'isError':
        return 'Error'
    }
  }
}
Cards.contextType = MyContext;

export default Cards;