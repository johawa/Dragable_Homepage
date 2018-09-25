import React from 'react';

const NavItem_Start = (props) => {



    return (
        <div className="Dropdown">
            <button className='Dropdown-Btn'
                style={{
                    background: 'linear-gradient(to right, #0099f7, #f11712)',
                    backgroundSize: '150% 150%',
                    backgroundPosition: 'center',
                    paddingRight: '45px',
                    paddingLeft: '40px'
                }}>
                Johannes Walenta
     </button>
            <div className='Dropdown-Content'>
                <a href="#">App 1</a>
                <a href="#">App 2</a>
                <a href="#">App 3</a>
            </div>
        </div>
    )
}

export default NavItem_Start;