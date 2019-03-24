import React, { Component } from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBadge } from "mdbreact";
import { favsContext } from "../../App";
import { Link } from "react-router-dom";

class NavbarFavs extends Component {

    render() {
        return (
            <>
                <MDBDropdown>
                    <MDBDropdownToggle nav>
                        {/* <MDBDropdownToggle nav caret> Con el caret sale la flexita del dropdown */}
                        <MDBIcon icon="star" />
                        <favsContext.Consumer>
                            {(context) => {
                                if (context.favs.length > 0) return <MDBBadge color="warning" className="ml-2">{context.favs.length}</MDBBadge>; //no se puede conditional rendering aki
                            }}
                        </favsContext.Consumer>
                    </MDBDropdownToggle>

                    <MDBDropdownMenu className="dropdown-default" right>

                        <favsContext.Consumer>
                        {(context) => {
                                if (context.favs.length === 0) return <p className="p-3">Your favs list is empty</p>;
                                return context.favs.map(fav => <MDBDropdownItem key={fav.uuid}><Link to={`/tours/${fav.uuid}`}>{fav.title}</Link></MDBDropdownItem>);
                                // return <Link key={fav[0].uuid} to={{ pathname: `/tour/${fav.uuid}`, tour: fav[0], actions: context.actions }}><MDBDropdownItem key={fav[0].uuid}href="#!">{fav[0].title}</MDBDropdownItem></Link>
                                }
                            }
                        </favsContext.Consumer>

                    </MDBDropdownMenu>

                </MDBDropdown>
            </>
        );
    }
}

export default NavbarFavs;