import React, { Component } from 'react';

class ButtonCart extends Component {
   
   state = {
      liked: false
    };
   
   handleClick() {
     this.setState({
       liked: !this.state.liked
     });
   }
   
   render() {
     const label = this.state.liked ? 'In Cart' : 'Add To Cart'
     return (
       <div className="customContainer">
         <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>{label}</button>
       </div>
     );
   }
}

export default ButtonCart