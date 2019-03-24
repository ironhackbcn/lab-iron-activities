import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";
import { cartContext } from "../../../App";

class TourButton extends Component {

    render() {
        const { tour } = this.props;

        return (
            <>
                <cartContext.Consumer>
                    {(context => {
                        const isBoughtFilter = context.cart.filter(iterationTour => iterationTour.uuid === tour.uuid);
                        const isBought = isBoughtFilter.length > 0;

                        if (isBought) {
                            return <MDBBtn outline color={"primary"} onClick={() => context.remTour(tour.uuid)}>Remove</MDBBtn>
                        }
                        return <MDBBtn color={"primary"} onClick={() => context.addTour(tour.uuid)}>Cart add</MDBBtn>
                    })}
                </cartContext.Consumer>
            </>
        );
    }

}

export default TourButton;