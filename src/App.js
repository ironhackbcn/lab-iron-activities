import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import activities from './data/data';
import Card from './Components/Card';
import List from './Components/List';
import Favourites from './Components/Favourites';
import ShoppingCart from './Components/ShoppingCart';


class App extends Component {

  state = {
    activities: activities,
    openedCart: false,
    openedFav: false,
  }

  cartHandler = () => {
    if (this.state.openedCart) {
      this.setState({
        openedCart: false,
      });
    } else {
      this.setState({
        openedCart: true,
      });
    }
  }

  favHandler = () => {
    if (this.state.openedFav) {
      this.setState({
        openedFav: false,
      });
    } else {
      this.setState({
        openedFav: true,
      });
    }
  }

  toggleCart = (uuid) => {
    const newActivities = this.state.activities.map((activity) => {
      if (activity.uuid === uuid) {
        activity.ordered = !activity.ordered;
      }
      return activity;
    });

    this.setState({
      activities: newActivities,
    })
  }

  toggleFav = (uuid) => {
    const newActivities = this.state.activities.map((activity) => {
      if (activity.uuid === uuid) {
        activity.fav = !activity.fav;
      }
      return activity;
    });

    this.setState({
      activities: newActivities,
    })
  }

  render() {

    const boughtActivities = this.state.activities.filter((activity) => activity.ordered === true);
    const favActivities = this.state.activities.filter((activity) => activity.fav === true);

    return (
      <div>
        <Router>
          <div>
            <div className="navbar">
              <h1>Brands</h1>
              <a href="#" onClick={this.cartHandler}>
                <img src="./assets/cart.svg" alt="shoppingCart" width="30px" height="30px" />
                <span className="badge badge-pill badge-primary">{boughtActivities.length}</span>
              </a>
              {this.state.openedCart ? <ShoppingCart boughtActivities={boughtActivities} deleteFromCart={this.toggleCart} /> : null}
              
              <a href="#" onClick={this.favHandler}>
                <img src="./assets/star.svg" alt="favorite" width="30px" height="30px" />
                <span className="badge badge-pill badge-primary">{favActivities.length}</span>
              </a>
              {this.state.openedFav ? <Favourites favActivities={favActivities} deleteFromFav={this.toggleFav} /> : null}
            </div>
            <Switch>
              <Route exact path="/activities/:id" render={(props) => <Card {...props} activities={this.state.activities} toggleCart={this.toggleCart} toggleFav={this.toggleFav}/>} />
              <Route path="/activities" render={(props) => <List {...props} activities={this.state.activities} toggleCart={this.toggleCart} toggleFav={this.toggleFav}/>} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;




