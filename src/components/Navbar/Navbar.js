import React, { Component } from 'react';

import NavItem from './NavItem';
import NavItem_View from './NavItem_View';

import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <NavItem name='Johannes Walenta'/>
                <NavItem name='File'/>
                <NavItem name='Go'/>
                <NavItem_View />
                <NavItem name='Help'/>
            </React.Fragment>
        )
    }
}

export default Navbar;