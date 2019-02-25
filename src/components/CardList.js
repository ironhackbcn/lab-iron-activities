import React, { Component } from 'react'
import Card from '../components/Card';
import data from '../data/data.json';
import '../styles/cardlist.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default class CardList extends Component {

  state = {
    activities: data,
  }

  listActivities = () => {
    const { activities } = this.state;
    return activities.map((activity, index) => {
      return < Card 
        activity={ activity }
        addToCart={this.props.addToCart} 
        deleteFromCart={this.props.deleteFromCart}
        addToFav={this.props.addToFav}
        unFav = {this.props.unFav} />
    })
  }

  render() {
    return (
      <div className="card-list">
        {this.listActivities()}
      </div>
    )
  }
}
