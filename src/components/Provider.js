import React, { Component } from 'react';
const MyContext = React.createContext();

export const withContext = (Comp) => {
  return class WithContext extends Component {
    render() {
      return (
        <MyContext.Consumer>
          {(value) => (
            <Comp
              favorites={value.favorites}
              addFavorites={value.addFavorites}
              cart={value.cart}
              addCart={value.addCart}
              counter={value.counter}
              {...this.props}
            />
          )}
        </MyContext.Consumer>
      )
    }
  }
}

class ContextProvider extends Component {

  state = {
    favorites: [],
    cart: [],
    counter: 1
  }

  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  handleFavorites = (e, activity) => {
    let inFavorites = false;
    let index;
    this.state.favorites.forEach((e, i) => {
      if (activity.title === e.title) {
        index = i;
        inFavorites = true;
      }
    })
    if (!inFavorites) {
      this.setState({
        favorites: [...this.state.favorites, activity]
      });
    } else {
      console.log(index);
      let favArr = this.state.favorites;
      favArr.splice(index, 1);
      this.setState({
        favorites: favArr
      });
    }

  }

  handleCart = (e, activity) => {
    console.log(activity);
    let inCart = false;
    let index;
    this.state.cart.forEach((e, i) => {
      if (activity.title === e.title) {
        index = i;
        inCart = true;
      }
    })
    if (!inCart) {
      this.setState({
        cart: [...this.state.cart, activity]
      });


    } else {
      console.log(index);
      let cartArr = this.state.cart;
      cartArr.splice(index, 1);
      this.setState({
        cart: cartArr
      });
    }
  }

  handleCartList = (e)=>{

  }

  render() {
    return (
      <MyContext.Provider value={{
        favorites: this.state.favorites,
        cart: this.state.cart,
        counter: this.state.counter,
        addFavorites: this.handleFavorites,
        addCart: this.handleCart,
        showCart: this.handleCartList,
      }}>
        {this.props.children}
      </MyContext.Provider>

    );
  }
}

export default ContextProvider;