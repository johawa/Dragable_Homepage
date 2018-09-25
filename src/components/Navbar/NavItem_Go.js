import React from 'react';

const NavItem = (props) => {
    return (
        <div className="Dropdown">
            <button className='Dropdown-Btn'>Go</button>
            <div className='Dropdown-Content'>
                <a href="#">App 1</a>
                <a href="#">App 2</a>
                <a href="#">App 3</a>
            </div>
        </div>
    )
}

export default NavItem;