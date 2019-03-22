import React, { Component } from 'react';
import { contextHOC } from '../Context/ContextProvider';

class Navbar extends Component {

  state = {
    paintCards: []
  }
  paintCards = () => {

    return this.state.paintCards.map((card, index) => (
      <div key={index} >
        <h4>{card.title}</h4>
      </div>
    ))
  }

  updateCards = () => {
    const { cards } = this.props
    this.setState({
      paintCards: cards
    },()=>{this.paintCards()})
  }


  render() {
    const {totalFavorites} = this.props
    return (
      <div className="navbar">
        <h2>Navbar</h2>
        <h5>{totalFavorites}</h5>
        <div className="navbar-card-menu">
          {this.paintCards()}
        </div>
        <button onMouseOver={(event)=> {
          this.updateCards()
        }}>
          See All
        </button>

      </div>
    );
  }
}

export default contextHOC(Navbar);