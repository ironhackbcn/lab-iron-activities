import React, { Component } from 'react';
import { MyContext } from './context/Provider';
import axios from 'axios';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export class EventDetails extends Component {

  state = {
    card: {},
    status: 'isLoading',
  }

  componentDidMount() {
    const eventId = this.props.match.params.eventId;
    axios.get(`https://sandbox.musement.com/api/v3/activities/${eventId}`)
      .then(result => {
        this.setState({
          card: result.data,
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
    console.log(theme);
    const { status, card } = this.state;
    switch (status) {
      case 'isLoading':
        return 'Loading...'
      case 'isLoaded':
        return <article className='event-details'>
          <h3>{card.title}</h3>
          <div className='event-details-info'>
            <img src={card.cover_image_url} />
            <ul>
              <li><p className='event-details-price'><b>Price: </b>{card.retail_price.formatted_value}</p></li>
              {card.venues.map((venue, index) => {
                return (
                  <li key={`${venue.name}${index}`}>
                    <h3>{venue.name}</h3>
                    <p className='event-details-description'>{venue.meta_description}</p>
                  </li>);
              })}
            </ul>
          </div>
          <div className='event-details-buttons'>
            <Button onClickData={() => { theme.addCard(card) }} />
            <Link to='/'>Back to Home</Link>
          </div>
        </article>
      case 'isError':
        return 'Error'
    }
  }
}
EventDetails.contextType = MyContext;