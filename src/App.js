import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TopBar from './component/TopBar';
import List from './component/List';
import ClassDetail from './component/ClassDetail';
import activities from './data/data.json';

class App extends Component {

  state = {
    activities,
    reserved: [],
    favs: [],
    budget: 0,
    isHidden: true,
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden,
    })
  }

  addActivity = (index) => {
    this.setState({
      reserved: [...this.state.reserved, activities[index]]
    }, this.updateBudget(activities[index], '+'))
  }

  removeActivity = (index) => {
    const foundIndex = this.state.reserved.findIndex((reserve)=>{
      return reserve.title === activities[index].title;
    });

    if (foundIndex > -1){
      const [ removed ] = this.state.reserved.splice(foundIndex, 1);
      this.setState({
        reserved: this.state.reserved
      }, this.updateBudget(removed, '-'))
    }
  }

  addFavActivity = (index) => {
    this.setState({
      favs: [...this.state.favs, activities[index]]
    })
  }

  removeFavActivity = (index) => {
    const foundIndex = this.state.favs.findIndex((reserve)=>{
      return reserve.title === activities[index].title;
    });

    if (foundIndex > -1){
      this.state.favs.splice(foundIndex, 1);
      this.setState({
        favs: this.state.favs
      })
    }
  }

  updateBudget = (activity, op) => {
    let add = activity.retail_price.value;
    if(op === '-')
      add=add * -1;

    this.setState ({
      budget: this.state.budget + add,
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <TopBar budget={this.state.budget} reserved={this.state.reserved} favs={this.state.favs}/>
          <div className='d-flex flex-row justify-content-center bd-highlight mb-3 mt-3 flex-wrap'> 
            <Switch>             
              <Route exact path="/activities/:id" render={(props) => <ClassDetail {...props} act={this.state.activities}/>}/>
              <Route path="/" 
                     render={(props) => <List {...props} 
                                              act={this.state.activities} 
                                              actions={{add: this.addActivity, 
                                                        remove: this.removeActivity,
                                                        addFav: this.addFavActivity,
                                                        removeFav: this.removeFavActivity}}/>}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
