import React, { Component } from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import NavbarCart from "./NavbarCart";
import NavbarFavs from "./NavbarFavs";

class Navbar extends Component {

    state = {
        isOpen: false // burger menu wont be open
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <>
                <nav>
                        <MDBNavbar className="fixed-top" color="blue-gradient" dark expand="md">
                            <MDBContainer>
                                <MDBNavbarBrand>
                                    <strong className="white-text">Vatican Tours</strong>
                                </MDBNavbarBrand>

                                <MDBNavbarToggler onClick={this.toggleCollapse} />

                                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

                                    <MDBNavbarNav right>

                                        <MDBNavItem>
                                            <NavbarCart/>
                                        </MDBNavItem>

                                        <MDBNavItem>
                                            <NavbarFavs/>                                        
                                        </MDBNavItem>

                                    </MDBNavbarNav>
                                </MDBCollapse>
                            </MDBContainer>
                        </MDBNavbar>
                </nav >
                <div style={{ height: "56px" }}></div>
            </>
        );
    }
}

export default Navbar;
