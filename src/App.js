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
  }

  addToCart = (item) => {
    const { inCart } = this.state;
    inCart.push(item);
    this.setState({
      inCart: inCart,
    });
  }

  addToFavourites = () => {

  }

  listMuseums = () => {
    const { museums } = this.state;

    return museums.map((museum) => {
      return <Card
        key={museum.uuid}
        title={museum.title}
        description={museum.description}
        price={museum.retail_price.formatted_value}
        url={museum.cover_image_url}
        idUrl={`/activities/${museum.uuid}`}
        addToCart={this.addToCart}
        addToFavourites={this.addToFavourites}
        />
    });
  }

  render() {
    return (
      <div>
        <Navbar />
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
  }
}

export default App;
