import React, { Component } from 'react';

import { Consumer } from '../../context';

class NavItem extends Component {

    openApp_1(dispatch, testItem) {
        const updatedItems = [...testItem];
        let ItemToUpdate = updatedItems.find(item => {
            return (item.id === 0)
        })
        ItemToUpdate.open = true
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
                        const { dispatch, testItem } = value;
                        return (
                            <div className="Dropdown">
                                <button className='Dropdown-Btn'>Go</button>
                                <div className='Dropdown-Content'>
                                    <a href="#" onClick={this.openApp_1.bind(this, dispatch, testItem)}>App 1</a>
                                    <a href="#">App 2</a>
                                    <a href="#">App 3</a>
                                </div>
                            </div>
                        )
                    }
                }
            </Consumer>
        )
    }
}

export default NavItem;