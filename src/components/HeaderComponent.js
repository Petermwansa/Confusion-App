import React, {Component} from "react";
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse, Jumbotron} from 'reactstrap';
import {NavLink} from 'react-router-dom';



class Header extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isNavOpen: false
        };

        //we bind the method below
        this.toggleNav = this.toggleNav.bind(this);
    }

    //in this method, we are changing the value of the boolean isNavOpen to the opposite whenever the button is clicked
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render () {
    
        return(
            // the ReactFragment enables us to group elements and return them
            <React.Fragment>
             <Navbar dark expand="md">
                <div className="container">
                <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand xlassname="mr-auto" href="/">
                        <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa, fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa, fa-info fa-lg"></span> About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa, fa-list fa-lg"></span> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa, fa-address-card fa-lg"></span> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <div className="mt-0 p-5 jumbotron text-white rounded">
                <div className="container" >
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Header;