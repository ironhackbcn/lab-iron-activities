import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";
import { favsContext } from "../../../App";

class FavButton extends Component {

    render() {
        const { tour } = this.props;

        return (
            <>
                <favsContext.Consumer>
                    {(context => {
                        const isFavFilter = context.favs.filter(iterationTour => iterationTour.uuid === tour.uuid);
                        const isFav = isFavFilter.length > 0;

                        if (isFav) {
                            return <MDBBtn outline color={"warning"} onClick={() => context.remFav(tour.uuid)}>Remove</MDBBtn>
                        }
                        return <MDBBtn color={"warning"} onClick={() => context.addFav(tour.uuid)}>Favs add</MDBBtn>
                    })}
                </favsContext.Consumer>
            </>
        );
    }

}

export default FavButton;