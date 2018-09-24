import React from 'react';

const NavItem = (props) => {
    return (
        <div className="Dropdown">
            <button className='Dropdown-Btn'>{props.name}</button>
            <div className='Dropdown-Content'>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    )
}

export default NavItem;