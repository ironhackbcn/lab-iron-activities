import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';
import './Styles/app.css'

import Navbar from './components/navbar/Navbar.js';
import Card from './components/card/Card';
import CardDetails from './components/cardDetails/CardDetails';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
library.add(faShoppingCart, faStar);

class App extends Component {
  
  state = {
    museums: [],
    inCart: [],
    inFavourites: [],
  };

  //Connect to API and fetch information needed

  componentDidMount() {
    axios.get("https://api.musement.com/api/v3/venues/164/activities?limit=18")
    .then(response => {
        this.setState({museums: response.data})
    })
    .catch(error => console.log(error));
  };


  addToCart = (item, name) => {
    const { museums, inCart } = this.state;
    const selectedMuseum = museums.filter(museum => museum.title === name);
    const selectedMuseumInCart = inCart.filter(museum => museum.title === selectedMuseum[0].title);
    
    if (selectedMuseumInCart.length === 0){
      inCart.push(item);
      const museumIndex = museums.indexOf(selectedMuseum[0]);
      selectedMuseum[0].inCart = true;
      museums.splice(museumIndex, 1, selectedMuseum[0]);
  
      this.setState({
        museums: museums,
        inCart: inCart,
      });
    }
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

  addToFavourites = (item, name) => {
    const { museums, inFavourites } = this.state;
    const selectedMuseum = museums.filter(museum => museum.title === name);
    const selectedMuseumInFavourites = inFavourites.filter(museum => museum.title === selectedMuseum[0].title);
    
    if (selectedMuseumInFavourites.length === 0) {
      inFavourites.push(item);
      const museumIndex = museums.indexOf(selectedMuseum[0]);
      selectedMuseum[0].inFavourites = true;
      museums.splice(museumIndex, 1, selectedMuseum[0]);
  
      this.setState({
        museums: museums,
        inFavourites: inFavourites,
      });
    }    
  };

  deleteFromFavourites = (name) => {
    const { inFavourites, museums } = this.state;
    const updatedFavourites = inFavourites.filter(item => item.title !== name);
    const selectedMuseum = museums.filter(museum => museum.title === name);
    const museumIndex = museums.indexOf(selectedMuseum[0]);
    selectedMuseum[0].inFavourites = false;
    museums.splice(museumIndex, 1, selectedMuseum[0]);

    this.setState({
      inFavourites: updatedFavourites,
      museums: museums,
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
          deleteFromFavourites={this.deleteFromFavourites}
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
