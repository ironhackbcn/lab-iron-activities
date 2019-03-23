import React, {Component} from 'react';
import {MyContext} from '../pages/Activities'

const withComponent = (Comp) => {
  return (
    class WithComponent extends Component {
      render() {
        return(
          <MyContext.Consumer>        
            {
              value =>  
                <Comp {...this.props} context={value}/>              
            }
          </MyContext.Consumer>
        )
      }
    }
  )
}

export default withComponent;