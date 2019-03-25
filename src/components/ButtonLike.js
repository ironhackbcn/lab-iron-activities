import React, { Component } from 'react';

class ButtonLike extends Component {
   state = {
      liked: false,
      count: 0
   }

   handleClick(e){
      if(e.target.id === 'like'){
         this.setState({
            count: 1,
            liked: !this.state.liked
         })  
      }
   }

   render(){
      const label = this.state.liked ? 'Liked' : 'Like'
      return(
         <button id="like" onClick={this.handleClick.bind(this)}>{label}</button>
      )

   }
}


export default ButtonLike;