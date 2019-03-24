import React, { Component } from 'react';
import axios from 'axios';

// CSS
import 'bulma/css/bulma.css'
import './style.css'

// Components
import Navbar from './components/Navbar'
import CardsList from './components/CardsList'
import ActivityDetail from './components/ActivityDetail'

// Router
import { Route } from 'react-router-dom'

// Context
const Context = React.createContext();
export const Consumer = Context.Consumer

class App extends Component {
  state = {
    cart: [],
    favorite: [],
    activities: [],
  }

  // API
  componentDidMount = async () => {
    const itemsPerPage = 20
    const offset = 0

    const apiCall = await axios.get(`https://api.musement.com/api/v3/venues/164/activities?limit=${itemsPerPage}&offset=${offset}`)
    const data = apiCall.data

    this.setState(
      { activities: data }
    )
  }

  handleAddToCart = (newActivity) => {
    this.setState(
      { cart: [...this.state.cart, newActivity] }
    )
  }

  handleRemoveFromCart = (updatedCartList) => {
    this.setState(
      { cart: [...updatedCartList] }
    )
  }

  handleAddToFavorite = (newActivity) => {
    this.setState(
      { favorite: [...this.state.favorite, newActivity] }
    )
  }

  handleRemoveFromFavorite = (updatedFavoriteList) => {
    this.setState(
      { favorite: [...updatedFavoriteList] }
    )
  }

  render() {
    return (
      <section>
        <Context.Provider
          value={
            {
              addToCart: this.handleAddToCart,
              cart: this.state.cart,
              addToFavorite: this.handleAddToFavorite,
              favorite: this.state.favorite,
              removeFromCart: this.handleRemoveFromCart,
              removeFromFavorite: this.handleRemoveFromFavorite
            }
          }
        >
          <Route path='/' component={Navbar} />
          <Route exact path='/' render={(props) => <CardsList {...props} activities={this.state.activities} />} />
          <Route exact path='/activity/:id' render={(props) => <ActivityDetail {...props} activities={this.state.activities} />} />
        </Context.Provider>
      </section>
    );
  }
}
export default App;
