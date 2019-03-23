import React, { Component } from 'react';
import { contextHOC } from '../Context/ContextProvider';
import { Link } from 'react-router-dom';

class Card extends Component {

  state = {
    onCard:false,
    card: {},
    favorites: 0,
    isClicked: false
  }

  addCard = (event) => {
    event.preventDefault()
    const { title, cover_image_url, description, retail_price } = this.props.card
    const { addCards } = this.props
    this.setState({
      card:{
        title,
        cover_image_url,
        description,
        price: retail_price.value,
        currency: retail_price.currency,
        counter: 1
      }
    }, () => {
      addCards(this.state.card)
    })
  }

  sumFavorites = async (event) => {
    try {
      event.preventDefault()
      const { addFavorites, restFavorites } = this.props;
      const { isClicked } = this.state;
      if(!isClicked){
       await this.setState({
          favorites: this.state.favorites + 1,
          isClicked: true
        })
        await addFavorites() 
      } else {
        await this.setState({
          favorites: this.state.favorites - 1,
          isClicked: false
        }) 
        await restFavorites()
      }
    } catch(error){
      console.log(error)
    } 
  }

  render() {
    const { title, cover_image_url, description, retail_price } = this.props.card
    return (
      <div className="card">
        <img src={cover_image_url} alt='img' />
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>{retail_price.currency} {retail_price.value}</h4>
        <button onClick={(event)=> {
          this.addCard(event)
        }}>
          Add
        </button>
        <button onClick={(event)=>{
          this.sumFavorites(event)
        }}>
          Favorite
        </button>
        <h4>{this.state.favorites}</h4>
        <Link to={`/${title}`} >
        More
        </Link>
      </div>
    );
  }
}

export default contextHOC(Card);