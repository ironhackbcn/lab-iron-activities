import React, { Component } from 'react';
import { MDBContainer } from "mdbreact"

import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Main from "./views/Main";
import TourDetails from "./views/TourDetails";

import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";

export const cartContext = React.createContext("test");
export const favsContext = React.createContext("test");
export const mainContext = React.createContext("test");
export const detailsContext = React.createContext();

class App extends Component {

	state = {
		tourList: [],
		cart: [],
		favs: [],
		cartTotal: 0,
		page: 1
	}

	componentDidMount = async () => {
		const itemsPerPage = 18;
		const offset = this.state.page;

		const tourList = await axios(`https://api.musement.com/api/v3/venues/164/activities?limit=${itemsPerPage}&offset=${offset}`);
		this.setState({
			tourList: tourList.data
		});
	}

	listTours = () => {
		return this.state.tourList.map(tour => <Card key={tour.uuid} tour={tour} />);
	}

	addTour = (id) => {
		// get tour that matches id
		const boughtTour = this.state.tourList.filter(tour => tour.uuid === id);

		//update state with new tour and add price to total
		this.setState({
			cart: [...this.state.cart, boughtTour[0]],
			cartTotal: this.state.cartTotal + boughtTour[0].retail_price.value
		});
		// setTimeout(() => console.log(this.state), 1000);
	}

	remTour = (id) => {
		//get removed tour for get price
		const removed = this.state.cart.filter(tour => tour.uuid === id);

		//get car list without tour.id, it is the new list.
		const cart = this.state.cart.filter(tour => tour.uuid !== id);

		this.setState({
			cart,
			cartTotal: this.state.cartTotal - removed[0].retail_price.value
		});
		// setTimeout(() => console.log(this.state), 1000);
	}

	addFav = (id) => {
		const tourToAdd = this.state.tourList.filter(tour => tour.uuid === id);

		this.setState({
			favs: [...this.state.favs, tourToAdd[0]]
		});
		// setTimeout(() => console.log(this.state), 1000);

	}

	remFav = (id) => {
		//get list without fav (because we remove :P)
		const favs = this.state.favs.filter(fav => id !== fav.uuid);

		this.setState({
			favs
		});
		// setTimeout(() => console.log(this.state), 1000);
	}

	render() {

		return (
			<cartContext.Provider value={{ cart: this.state.cart, cartTotal: this.state.cartTotal, addTour: this.addTour, remTour: this.remTour }}>
				<favsContext.Provider value={{ favs: this.state.favs, addFav: this.addFav, remFav: this.remFav }}>
					<BrowserRouter>

						<MDBContainer>

							<Navbar />
							<>
								<mainContext.Provider value={{ listTours: this.listTours }}>
									<Route path="/" exact component={Main} />
								</mainContext.Provider>
								<detailsContext.Provider value={{ tourList: this.state.tourList }}>
									<Route path="/tours/:uuid" component={TourDetails} />
								</detailsContext.Provider>
							</>

						</MDBContainer>

					</BrowserRouter>
				</favsContext.Provider>
			</cartContext.Provider>
		);
	}

}

export default App;
