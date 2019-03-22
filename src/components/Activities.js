import React, { Component } from 'react';
import axios from 'axios';
import Provider, { withContext } from './Provider';
import Card from './Card';
import Navbar from './Navbar';

class Activities extends Component {

  state = {
    activities: [],
    status: "isLoading",
  }

  componentDidMount() {
    axios.get(`https://api.musement.com/api/v3/venues/164/activities?limit=18&offset=1`)
      .then(result => {
        this.setState({
          activities: result.data,
          status: 'isLoaded'
        });
        console.log(this.state.activities);
      })
      .catch(error => {
        this.setState({
          status: 'hasError'
        });
        console.log(error);
      })
  }

  renderList(){
    return this.state.activities.map((e, index)=>{
      return <Card 
        key={index}
        title={e.title}
        image={e.cover_image_url}
        description={e.description}
        price={e.original_retail_price.value}
      />
    });
  }

  render() {
    return (
      <div>
        List activities
        <Provider>
          <Navbar/>
          {this.renderList()}
        </Provider>
      </div>
    );
  }
}
export default Activities;