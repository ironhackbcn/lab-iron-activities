import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './ActionButton';
import FavButton from './FavButton';
import {Consumer} from '../store/Store';

export default class ClassCard extends Component {
  state = {
    added: false,
    fav: false,
  }

  toggleAdded = (key) => {
    this.setState({
      [key]: this.state[key] ? false : true,
    })
  }

  
  render() {
    const { added, fav } = this.state;
    const { title, description, retail_price, cover_image_url } = this.props.activity;
    return (
      <div className="card m-1" style={{width: '30%'}}>
        <div>
          <div className="position-absolute" style={{right:'5px'}}>
            <Consumer>
              { (context) =>
                <FavButton index={this.props.id} 
                          action={context.dispatch}
                          selected={fav? 'fas' : 'far'}
                          updateClass={this.toggleAdded}/>
              }
            </Consumer>
          </div>
          <img src={cover_image_url} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <Link to={'/activities/'+this.props.id}>
            <h5 className="card-title text-center">{title}</h5>
          </Link>
          <p className="card-text text-center">{description}</p>
          <p className="card-text text-center">{retail_price.formatted_value}</p>
          <Consumer>
            { (context) => 
              <Button index={this.props.id} 
                      title={added? 'IN CART' : 'ADD TO CART'} 
                      action={context.dispatch} 
                      updateClass={this.toggleAdded}/>
            }
          </Consumer>
        </div>
      </div>
    )
  }
}
