import React, { Component } from 'react';
import {Consumer} from './store/Store';
import TopBar from './component/TopBar';
import List from './component/List';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <div className='d-flex flex-row justify-content-center bd-highlight mb-3 mt-3 flex-wrap'> 
          <Consumer>
            {context => 
              <List context={context} />
            }
          </Consumer>
        </div>
      </div>
    );
  }
}

export default App;
