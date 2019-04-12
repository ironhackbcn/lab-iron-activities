import React, {Component, createContext} from 'react';
import activities from '../data/data.json';
import reducer from './reducers';

const {Provider, Consumer} = createContext();

class Store extends Component {
  state = {
    activities,
    reserved: [],
    favs: [],
    budget: 0,
    isHidden: true,
    dispatch: (action, index)=>{
      this.setState(reducer(this.state, action, index), this.updateBudget);
    },
  }

  updateBudget = () => {
    const total = this.state.reserved.reduce((sum, act) => {
      return sum + act.retail_price.value;
    },0);
    this.setState ({
      budget: total,
    })
  }

  render(){
    return (
       <Provider value={this.state}>
          {this.props.component}
       </Provider>
    )
 }
}

const WithStore = (Component) => {
  return (props) => {
    return (
      <Consumer>
        {context => <Component {...props} context={context} />}
      </Consumer>
    )
  }
}

export default Store;
export {Consumer, WithStore};