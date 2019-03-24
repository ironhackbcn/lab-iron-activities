import React, { Component } from 'react';
import Axios from 'axios';
import ButtonLike from './ButtonLike';
import ButtonCart from './ButtonCart';

class Card extends Component {

   state = {
      activities : [],
      // count: 0
   }

   // handleLikeClick(e){
   //    if(e.target.id === 'like'){
   //       this.setState({
   //          count: 1
   //       })  
   //    }
   // }

   componentDidMount(){
      const itemsPerPage = 8     
      const offset = 0
      
      Axios.get(`https://api.musement.com/api/v3/venues/164/activities?limit=${itemsPerPage}&offset=${offset}`)
      .then(res => {
         console.log(res.data);
         this.setState({
            activities: res.data
         })
      })
      .catch(error => {
         console.log(error);
      });
   }
   
   activitiesList = () => {
      return (
         <div className="card-list">
            {this.state.activities.map(activitie => 
               <div className="card" key={activitie.title}>
                  <div className="card-img">
                     <img src={activitie.cover_image_url} alt={activitie.title}/>
                     <ButtonLike />
                  </div>
                  <div className="card-content">
                     <h2>{activitie.title}</h2>
                     <p>{activitie.description}</p>
                     <h3>{activitie.original_retail_price.formatted_value}</h3>
                     <p>{this.state.count}</p>
                     <ButtonCart />
                  </div>
               </div>
            )}
         </div>
      )     
   }
  
   render () {
      return (
         <div>
            {this.activitiesList()}
         </div>
      )     
   }
   


}

export default Card;