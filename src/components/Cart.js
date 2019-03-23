import React, {Component} from 'react';
import withConsumer from './hoc';

class Cart extends Component {  
  render() {
    return(      
      this.props.context.cart.length ? (
        this.props.context.cart.map((added, index) => {
          return (
            <div key={`id-${index}`} className="dropdown-content">                    
                <div className="dropdown-item">
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src={added.cover_image_url} alt={added.title}/>
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>{added.title}</strong>
                          <br/>
                          {added.original_retail_price.value.toFixed(2)} €
                        </p>
                      </div>
                      <nav className="level is-mobile">
                        <div className="level-left">
                          <a className="level-item" aria-label="reply">
                            <span className="icon is-small">
                            <i onClick={() => this.props.onDelete(index)} className="fas fa-trash-alt"aria-hidden="true"> </i>
                            </span>
                          </a>                            
                        </div>
                      </nav>
                    </div>
                  </article>
                </div>
              </div>            
            )
        })                                        
      ) : null
    )
  }          
}

export default withConsumer(Cart);