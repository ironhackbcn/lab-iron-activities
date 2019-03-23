import React, { Component } from 'react';
import { contextHOC } from '../Context/ContextProvider';

class Navbar extends Component {

  state = {
    paintCards: [],
    isClicked: false
  }
  paintCards = () => {
    const { isClicked } = this.state
    if(isClicked){
      return this.state.paintCards.map((card, index) => (
        <div key={index} >
          <h4>{card.title}</h4>
          <p>{card.counter}</p>
        </div>
      ))
    }
  }

  updateCards = () => {
    const { cards } = this.props
    this.setState({
      paintCards: cards,
      isClicked: !this.state.isClicked
    },()=>{this.paintCards()})
  }


  render() {
    const {totalFavorites} = this.props
    console.log(this.state.isClicked)
    return (
      <div className="navbar">
        <h2>Navbar</h2>
        <h5>{totalFavorites}</h5>
        <div className="navbar-card-menu">
          {this.paintCards()}
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