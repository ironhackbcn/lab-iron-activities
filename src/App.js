import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import activities from './data/data';
import Card from './Components/Card';
import List from './Components/List';
import ShoppingCart from './Components/ShoppingCart';


class App extends Component {

  state = {
    activities: activities,
  }

  render() {

    return (
      <div>
        <Router>
          <div>
            <div>
              <ShoppingCart activities={this.state.activities}/>
            </div>
          <Switch>
            <Route exact path="/activities/:id" render={(props) => <Card {...props} activities={this.state.activities} />} />
            <Route path="/activities" render={(props) => <List {...props} activities={this.state.activities} />} />
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
