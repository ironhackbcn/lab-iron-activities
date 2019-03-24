import React, { Component } from 'react';
const Context = React.createContext()



export const contextHOC = (Comp) => {
  return class contextHOC extends Component {
    render(){
      return(
        <Context.Consumer>
          {(value)=>(
            <Comp 
              cards={value.cards}
              addCards={value.addCards}
              addFavorites={value.addFavorites}
              totalFavorites={value.totalFavorites}
              restFavorites={value.restFavorites}
              removeCard={value.removeCard}
              {...this.props}
            />
            )
          }
        </Context.Consumer>
      )
    }
  }
}


class ContextProvider extends Component {

  state = {
    cards: [],
    favorites: 0
  }

  addCards = (card) => {
    this.setState({
      cards: [...this.state.cards, card]
    })
  }

  removeCard = (event, newCard) => {
    event.preventDefault()
    const cards  = [...this.state.cards]
    cards.forEach((card, index) => {
      if(card.title === newCard.title){
        cards.splice(index, 1)
      }
      return cards
    })
    this.setState({
      cards: cards
    })
    
  }

  addFavorites = () => {
    this.setState({
      favorites: this.state.favorites + 1
    })
  }

  restFavorites = () => {
    this.setState({
      favorites: this.state.favorites - 1
    })
  }

  render() {
    console.log(this.state.cards)
    return (
      <div>
        <Context.Provider value={{
          cards: this.state.cards,
          addCards: this.addCards,
          addFavorites: this.addFavorites,
          restFavorites: this.restFavorites,
          totalFavorites: this.state.favorites,
          removeCard: this.removeCard,
        }}>
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}

export default ContextProvider;