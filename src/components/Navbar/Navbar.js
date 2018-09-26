import React, { Component } from 'react';
import Clock from 'react-live-clock';

import NavItem_Help from './NavItem_Help';
import NavItem_View from './NavItem_View';
import NavItem_Go from './NavItem_Go';
import NavItem_Start from './NavItem_Start';
import NavItem_AppTracker from './NavItem_AppTracker';
import NavItem_File from './NavItem_File';


import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='nav-Left'>
                    <NavItem_Start />
                    <NavItem_AppTracker />
                    <NavItem_File />
                    <NavItem_Go />
                    <NavItem_View />
                    <NavItem_Help />
                </div>
                <div className='nav-Right'>
                    <Clock className='clock' />
                </div>
            </React.Fragment>
        )
    }
}

export default Navbar;