import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { detailsContext } from "../App";
import TourButton from "../components/Card/CartButtons/TourButton";
import FavButton from "../components/Card/FavsButtons/FavButton";

class TourDetails extends Component {

    render() {

        const { uuid } = this.props.match.params;

        return (

            <detailsContext.Consumer>
                {(context => {
                    let tour = context.tourList.filter(tour => tour.uuid === uuid);
                    tour = tour[0];
                    if (tour) {
                        return (
                            <div className="mt-4">
                                <Link to="/"><MDBIcon icon="angle-left" /> Back</Link>
                                <hr />
                                <MDBContainer>
                                    <MDBContainer>
                                        <h1>{tour.title}</h1>
                                        <MDBRow className="mt-5">

                                            <MDBCol md="5">
                                                <img src={tour.cover_image_url} className="img-fluid" alt="" />
                                            </MDBCol>

                                            <MDBCol md="7" className=" mb-5 d-flex flex-column justify-content-between">
                                                <h3>Description:</h3>
                                                <p>{tour.description}</p>
                                                <br />
                                                <div className="d-flex justify-content-between">
                                                    <p>{tour.retail_price.value}€</p>
                                                    <div>
                                                        <TourButton tour={tour} />
                                                        <FavButton tour={tour} />
                                                    </div>
                                                </div>
                                            </MDBCol>

                                            <MDBContainer className="mt-5">
                                                <h2 className="bq-title">Information:</h2>
                                                <p>{tour.about}</p>
                                            </MDBContainer>

                                            <MDBContainer className="mt-5">
                                                <h2 className="bq-title">Meeting point:</h2>
                                                <p>{tour.meeting_point}</p>
                                            </MDBContainer>
                                        </MDBRow>
                                    </MDBContainer>
                                </MDBContainer>
                            </div>
                        )
                    }
                })}
            </detailsContext.Consumer>
        );
    }

}

export default TourDetails;