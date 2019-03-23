import React from 'react';
import withConsumer from './hoc';

const Icons = (props) => {   
    return(
      <>
        <i onClick={props.onShow} className="fas fa-suitcase"></i>
        <p className="my-notification">{props.context.inCart}</p>                           
      </>
    )
  }


export default withConsumer(Icons);