import React, {Component, createContext} from 'react';
import Navbar from '../components/Navbar';
import ActivitiesCard from '../components/ActivitiesCard';
import axios from 'axios';

export const MyContext = createContext();

class Activities extends Component {  

  state = {
    activities: [],
    cart: [],
    inCart: 0,
    favorites: [],
    total: 0
  }

  async componentDidMount() {    
    try {      
      const result = await axios.get('https://api.musement.com/api/v3/venues/164/activities?limit=18&offset=1')
      this.setState({
        activities: result.data
      })                 
    } catch (error) {
      console.log(error)
    }        
  }

  handleAdd =(index) => {
    const activityAdedd = this.state.activities[index]
    if (this.state.cart.indexOf(activityAdedd) === -1)
    this.setState({
      cart: [...this.state.cart, activityAdedd],
      inCart: this.state.inCart + 1,
      total: this.state.total + activityAdedd.original_retail_price.value
    })
  }    
  
  handleFav =(index) => {     
    const favAdedd = this.state.activities[index];        
    this.state.favorites.indexOf(favAdedd) === -1 ?    
    this.setState({
      favorites: [...this.state.favorites, favAdedd],      
    }) :     
    this.setState({    
      favorites: this.state.favorites.filter((fav) => {
        return fav !== favAdedd
      })
    })       
  }

  handleDelete =(index) => {
    const cartCopy = [...this.state.cart];
    const deletedAct = cartCopy[index]
    cartCopy.splice(index, 1)
    this.setState({
      cart: cartCopy,
      inCart: this.state.inCart - 1,
      total: this.state.total.toFixed(2) - deletedAct.original_retail_price.value.toFixed(2)
    })
  }
      
  render =() => {        
    if(!this.state.activities.length) {
      return null
    }
    return(
      <MyContext.Provider value={{
        activities: this.state.activities,
        cart: this.state.cart,
        inCart: this.state.inCart        
        }}>
        <Navbar onDelete={this.handleDelete} fav={this.state.favorites} total={this.state.total}/>             
        <section className ="container">
          <ActivitiesCard onAdd={this.handleAdd} onFav={this.handleFav}/>            
        </section>
      </MyContext.Provider>      
    )
  }
}


export default Activities;
