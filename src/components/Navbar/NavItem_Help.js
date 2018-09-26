import React from 'react';

const NavItem_Help = (props) => {
    return (
        <div className="Dropdown">
            <button className='Dropdown-Btn'>Help</button>
            <div className='Dropdown-Content'>
                <a href="#">Send a Message</a>                
            </div>
        </div>
    )
}

export default NavItem_Help;