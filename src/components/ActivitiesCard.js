import React from 'react';
import withConsumer from './hoc';

const ActivitiesCard =(props) => {  
  return(      
    props.context.activities.map((act, index) => {
      return (
        <div key={`id-${index}`} className="food-card">  
          <img src={act.cover_image_url} alt={act.title}></img>
          <h2 id="h2">{act.title}</h2>
          <p id="p">{act.description}</p>
          <p id="p" className="price">{act.original_retail_price.formatted_value}</p>
          <div>
            <button className="button is-rounded is-info" onClick={()=>props.onAdd(index)}>Add to Cart</button>
            <i className="far fa-star"  onClick={() => props.onFav(index)}></i>
          </div>
        </div>
      )
    })
  )
}                      

export default withConsumer(ActivitiesCard);