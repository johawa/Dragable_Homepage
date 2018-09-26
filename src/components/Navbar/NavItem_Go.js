import React, { Component } from 'react';

import { Consumer } from '../../context';

class NavItem_Go extends Component {

    openApp(dispatch, items, value, id) {
        value.lastOpenID = id
        const updatedItems = [...items];
        let ItemToUpdate = updatedItems.find(item => {
            return (item.id === id)
        })

        ItemToUpdate.visible = true
        dispatch({
            type: 'OPEN_APP',
            payload: updatedItems,
        });

    }

    render() {
        return (
            <Consumer>
                {
                    value => {
                        const { dispatch, items } = value;
                        return (
                            <div className="Dropdown">
                                <button className='Dropdown-Btn'>Go</button>
                                <div className='Dropdown-Content'>
                                    <a href="#" onClick={this.openApp.bind(this, dispatch, items, value, 0)}>My Work</a>
                                    <a href="#" onClick={this.openApp.bind(this, dispatch, items, value, 1)}>Paint</a>
                                    <a href="#" onClick={this.openApp.bind(this, dispatch, items, value, 2)}>Spotify</a>
                                </div>
                            </div>
                        )
                    }
                }
            </Consumer>
        )
    }
}

export default NavItem_Go;