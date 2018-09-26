import React, { Component } from 'react';

import { Consumer } from '../../context';

class NavItem_File extends Component {

    closeAllApps(dispatch, items, value) {

        const updatedItems = [...items];
        updatedItems.forEach(item => item.visible = false)
        dispatch({
            type: 'CLOSE_ALL_APPS',
            payload: updatedItems,
        });
        value.lastOpenID = null
    }

    render() {
        return (
            <Consumer>
                {
                    value => {
                        const { dispatch, items } = value;
                        return (
                            <div className="Dropdown">
                                <button className='Dropdown-Btn'>File</button>
                                <div className='Dropdown-Content'>
                                    <a href="#" onClick={this.closeAllApps.bind(this, dispatch, items, value)}>Close All Apps</a>
                                </div>
                            </div>
                        )
                    }
                }
            </Consumer>
        )
    }
}

export default NavItem_File;