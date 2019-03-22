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
    console.log('card', card);
    this.setState({
      cards: [...this.state.cards, card]
    })
  }

  addFavorites = (favorites) => {
    this.setState({
      favorites: this.state.favorites + favorites
    })
  }

  render() {

    return (
      <div>
        <Context.Provider value={{
          cards: this.state.cards,
          addCards: this.addCards,
          addFavorites: this.addFavorites,
          totalFavorites: this.state.favorites
        }}>
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}

export default ContextProvider;