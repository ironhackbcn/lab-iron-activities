import React, { Component } from 'react';
import { MyContext } from './context/Provider';
import axios from 'axios';
import { Button } from './Button';
import { FavButton } from './FavButton';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Cards extends Component {

  state = {
    cards: [],
    status: 'isLoading',
    totalPages: [...new Array(3)],
  }

  componentDidMount() {
    this.getEventsRows();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.pageNumber !== prevProps.match.params.pageNumber) {
      this.getEventsRows();
    }
  }

  getEventsRows() {
    let page = this.props.match.params.pageNumber + 1;
    if (page == null) {
      page = 1;
    }
    axios.get(`https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=${page}`)
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

  onPageChange() {
    this.forceUpdate();
  }

  render() {
    const theme = this.context;
    const { status, cards, totalPages } = this.state;

    switch (status) {
      case 'isLoading':
        return 'Loading...'
      case 'isLoaded':
        return <>
          <ul className='all-events-list'>
            {cards.map((card, index) =>
              <li className='event-item' key={`${index}${card.title}`}>
                <div className='fav-container'>
                  <FavButton onClickData={() => theme.favCard(card)} favedCards={theme.favedCards} currentCard={card} />
                </div>
                <img className='event-img' src={card.cover_image_url} alt={card.title} />
                <Link to={`/event/${card.uuid}`} ><h4>{card.title}</h4></Link>
                <p className='event-description'>{card.description}</p>
                <p>{card.retail_price.formatted_value}</p>
                <Button onClickData={() => { theme.addCard(card) }} addedCards={theme.addedCards} currentCard={card} />
              </li>)}
          </ul>
          <div id='page-buttons'>
            {totalPages.map((page, index) => {
              let marked;
              if (index === parseInt(this.props.match.params.pageNumber) || index === 0 && this.props.match.params.pageNumber == null) {
                marked = {
                  background: 'gray',
                }
              }
              return <Link style={marked} className="circle" key={index} to={`/page/${index}`}></Link>
            })}
          </div>
        </>
      case 'isError':
        return 'Error';
      default:
    }
  }
}
Cards.contextType = MyContext;

export default withRouter(Cards);