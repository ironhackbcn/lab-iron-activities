import React, { Component } from 'react';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import TourButton from "./CartButtons/TourButton";
import FavButton from "./FavsButtons/FavButton";
import { Link } from "react-router-dom";

class Card extends Component {

    render() {
        const { tour } = this.props;

        return (
            <article>
                <MDBCol>
                    <MDBCard className="mt-4 mb-4" style={{ width: "21rem" }}>
                        {/* <MDBCard style={{ width: "40%" }}> */}
                        <MDBCardImage className="img-fluid" src={tour.cover_image_url} waves />
                        <MDBCardBody className="p-3">

                            {/* <BrowserRouter> */}
                            <MDBCardTitle>
                                <Link to={`/tours/${tour.uuid}`}>{tour.title}</Link>
                            </MDBCardTitle>
                            {/* </BrowserRouter> */}

                            <MDBCardText>{tour.description}</MDBCardText>
                            <MDBCardText>{tour.retail_price.value}€</MDBCardText>
                            <div className="d-flex">

                                <TourButton tour={tour}/>
                                <FavButton tour={tour}/>

                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </article >
        );
    }
}

export default Card;