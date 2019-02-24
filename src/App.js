import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import museumsList from './data/data.json';
import './Styles/app.css'

import Navbar from './components/navbar/Navbar.js';
import Card from './components/card/Card';
import CardDetails from './components/cardDetails/CardDetails';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
library.add(faShoppingCart, faStar);

class App extends Component {
  
  state = {
    museums: museumsList.splice(0, 18),
    inCart: [],
    inFavourites: [],
  };

  addToCart = (item, name) => {
    const { museums, inCart } = this.state;
    inCart.push(item);
    const selectedMuseum = museums.filter(museum => museum.title === name);
    const museumIndex = museums.indexOf(selectedMuseum[0]);
    selectedMuseum[0].inCart = true;
    museums.splice(museumIndex, 1, selectedMuseum[0]);

    this.setState({
      museums: museums,
      inCart: inCart,
    });
  };

  deleteFromCart = (name) => {
    const { inCart, museums } = this.state;
    const updatedCart = inCart.filter(item => item.title !== name);
    const selectedMuseum = museums.filter(museum => museum.title === name);
    const museumIndex = museums.indexOf(selectedMuseum[0]);
    selectedMuseum[0].inCart = false;
    museums.splice(museumIndex, 1, selectedMuseum[0]);

    this.setState({
      inCart: updatedCart,
      museums: museums,
    });
  };

  addToFavourites = (item) => {
    const { inFavourites } = this.state;
    inFavourites.push(item);
    this.setState({
      inFavourites: inFavourites,
    });
  };

  deleteFromFavourites = (name) => {
    const { inFavourites } = this.state;
    const updatedFavourites = inFavourites.filter(item => item.title !== name);

    this.setState({
      inFavourites: updatedFavourites,
    });
  };

  listMuseums = () => {
    const { museums } = this.state;
    return museums.map((museum, index) => {
      return <Card
        key={`${museum.title}-${index}`}
        index={index}
        museums={this.state.museums}
        museum={museum}
        title={museum.title}
        description={museum.description}
        price={museum.retail_price.formatted_value}
        url={museum.cover_image_url}
        idUrl={`/activities/${museum.uuid}`}
        addToCart={this.addToCart}
        addToFavourites={this.addToFavourites}
        />
    });
  };

  render() {
    return (
      <div>
        <Navbar
          cart={this.state.inCart}
          favourites={this.state.inFavourites}
          deleteFromCart={this.deleteFromCart}
          />
        <Router>
          <Switch>
            <Route exact path="/" render={(props) => {
              return(
                <div className="container">
                  {this.listMuseums()}
                </div>
              )
            }}>
            </Route>
            <Route path="/activities/:id" component={CardDetails} />              
          </Switch>
        </Router>
      </div>
    );
  };
};

export default App;
