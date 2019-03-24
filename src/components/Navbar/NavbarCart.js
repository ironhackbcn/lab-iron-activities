import React, { Component } from 'react';
import { MDBBadge, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { cartContext } from "../../App";
import { Link } from "react-router-dom";

class NavbarCart extends Component {
    render() {
        return (
            <>
                <MDBDropdown>
                    <MDBDropdownToggle nav>
                        <MDBIcon icon="shopping-cart" />

                        <cartContext.Consumer>
                            {(context) => {
                                if (context.cart.length > 0) return <MDBBadge color="info" className="ml-2">{context.cart.length}</MDBBadge>
                                // context.cart.length > 0 && <MDBBadge color="info" className="ml-2">{context.cart.length}</MDBBadge> CONDITIONAL RENDERING no funciona dentro de la function
                            }}
                        </cartContext.Consumer>

                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default" right>
                        {/* <MDBDropdownItem href="#!">Action</MDBDropdownItem> */}

                        <cartContext.Consumer>
                            {(context) => {
                                    if (context.cart.length === 0) return <p className="p-3">Your cart is empty</p>;
                                    let list = context.cart.map(tour => <MDBDropdownItem key={tour.uuid}><Link to={`/tours/${tour.uuid}`}>{tour.title}</Link></MDBDropdownItem>)
                                    // list.unshift([<MDBDropdownItem key={"default"}>Total: {context.cartTotal.toFixed(2)}€</MDBDropdownItem>, <hr key="hr"/>])
                                    list = [<MDBDropdownItem key={"default"}>Total: {context.cartTotal.toFixed(2)}€</MDBDropdownItem>, <hr key="hr"/>, ...list];
                                    return list;
                                }}
                        </cartContext.Consumer>

                    </MDBDropdownMenu>
                </MDBDropdown>
            </>
        );
    }
}

export default NavbarCart;