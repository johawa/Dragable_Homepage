import React, { Component } from 'react';
import Clock from 'react-live-clock';

import NavItem from './NavItem';
import NavItem_View from './NavItem_View';
import NavItem_Go from './NavItem_Go';
import NavItem_Start from './NavItem_Start';


import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='nav-Left'>
                    <NavItem_Start />
                    <NavItem name='File' />
                    <NavItem_Go />
                    <NavItem_View />
                    <NavItem name='Help' />
                </div>
                <div className='nav-Right'>
                    <Clock className='clock' />
                </div>
            </React.Fragment>
        )
    }
}

export default Navbar;