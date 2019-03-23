import React, { Component } from 'react';
import axios from 'axios';
import Provider from './Provider';
import Card from './Card';
import Navbar from './Navbar';
import Cart from './Cart';
import Pages from './Pages';
import '../App.css';


class Activities extends Component {

  state = {
    activities: [],
    currentPage: [],
    numberPage: 1,
    status: "isLoading",
  }

  showPage1 = () => {
    const currentPage = this.state.activities.filter((e, index) => {
      if (index < 6) {
        return e;
      }
    })
    this.setState({
      currentPage,
      numberPage: 1
    })

    return
  }

  showPage2 = () => {
    const currentPage = this.state.activities.filter((e, index) => {
      if (index >= 6 && index < 12) {
        return e;
      }
    })
    this.setState({
      currentPage,
      numberPage: 2
    })

    return
  }

  showPage3 = () => {
    const currentPage = this.state.activities.filter((e, index) => {
      if (index >= 12 && index < 18) {
        return e;
      }
    })
    this.setState({
      currentPage,
      numberPage: 3
    })

    return
  }

  componentDidMount() {
    axios.get(`https://api.musement.com/api/v3/venues/164/activities?limit=18&offset=1`)
      .then(result => {
        const currentPage = result.data.filter((e, index) => {
          if (index < 6) {
            return e;
          }
        })
        this.setState({
          activities: result.data,
          currentPage,
          status: 'isLoaded'
        });
      })
      .catch(error => {
        this.setState({
          status: 'hasError'
        });
        console.log(error);
      })
  }

  renderList() {

    return this.state.currentPage.map((e, index) => {
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
          <Navbar />
          <Cart />
          {this.renderList()}
        </Provider>
        <Pages
          numberPage={this.state.numberPage}
          showPage1={this.showPage1}
          showPage2={this.showPage2}
          showPage3={this.showPage3}
        />
      </div>
    );
  }
}
export default Activities;