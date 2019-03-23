import React, { Component } from 'react';

export const MyContext = React.createContext();

export const withCounter = (Comp) => {
  return class WithCounter extends Component {
    render() {
      return (
        <MyContext.Consumer>
          {(value) => <Comp appContext={value} {...this.props} />}
        </MyContext.Consumer>
      );
    }
  }
}

class AppContext extends Component {

  state = {
    totalAmount: 0,
    addedCards: [],
    favedCards: [],
    counterCart: 0,
    counterFav: 0,
  }

  onNewCard = (card) => {
    const copiedArray = [...this.state.addedCards];
    if (copiedArray.filter(e => e.title === card.title).length > 0) {
      const deleteCard = copiedArray.filter(e => e.title !== card.title);
      this.setState({
        addedCards: deleteCard,
        totalAmount: this.state.totalAmount - card.retail_price.value,
        counterCart: deleteCard.length,
      })
    } else {
      this.setState({
        addedCards: [card, ...this.state.addedCards],
        totalAmount: this.state.totalAmount + card.retail_price.value,
        counterCart: this.state.counterCart + 1,
      })
    }
  }

  onNewFav = (card) => {
    const copiedArray = [...this.state.favedCards];
    if (copiedArray.filter(e => e.title === card.title).length > 0) {
      const deleteCard = copiedArray.filter(e => e.title !== card.title);
      this.setState({
        favedCards: deleteCard,
        counterFav: deleteCard.length,
      })
    } else {
      this.setState({
        favedCards: [card, ...this.state.favedCards],
        counterFav: this.state.counterFav + 1,
      })
    }
  }

  render() {
    return <MyContext.Provider
      value={{
        counterCart: this.state.counterCart, counterFav: this.state.counterFav,
        addCard: this.onNewCard, favCard: this.onNewFav, totalAmount: this.state.totalAmount,
        addedCards: this.state.addedCards,
        favedCards: this.state.favedCards,
      }}>
      {this.props.children}
    </MyContext.Provider>

  }
}

export default AppContext;