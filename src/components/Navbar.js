import React, { Component } from 'react';
import { contextHOC } from '../Context/ContextProvider';

class Navbar extends Component {

  state = {
    paintCards: [],
    isClicked: false,
    totalAmount: 0
  }
  paintCards = () => {
    const { isClicked } = this.state
    const { removeCard } = this.props
    if(isClicked){
      return this.state.paintCards.map((card, index) => (
        <div key={index} >
          <h4>{card.title}</h4>
          <p>{card.counter}</p>
          <button onClick={(event)=>{removeCard(event, card)}}>Delete</button>
        </div>
      ))
    }
  }

  updateCards = () => {
    const { cards } = this.props
    this.setState({
      paintCards: cards,
      isClicked: !this.state.isClicked
    },()=>{
        this.paintCards() 
        this.totalAmount()
      })
  }

  totalAmount = () => {
    const total = this.state.paintCards.reduce((acc, next) => {
      return acc + next.price
    },0)
    this.setState({
      totalAmount: total
    })
  }


  render() {
    const {totalFavorites} = this.props
    const { totalAmount, isClicked } = this.state
    return (
      <div className="navbar">
        <h2>Navbar</h2>
        <h5>{totalFavorites}</h5>
        <div className="navbar-card-menu">
          {this.paintCards()}
          {isClicked && totalAmount > 0 ? <h3>{totalAmount}</h3> : null}
        </div>
        <button onClick={(event)=> {
          this.updateCards()
        }}>
          See All
        </button>
      </div>
    );
  }
}

export default contextHOC(Navbar);