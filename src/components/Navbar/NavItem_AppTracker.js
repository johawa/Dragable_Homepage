import React, { Component } from 'react';

import { Consumer } from '../../context';

class NavItem_AppTracker extends Component {


    render() {
        let title = '/C/Johannes-Walenta.html'

        return (
            <Consumer>
                {value => {
                    const { dispatch, items, focusedFrameId, lastOpenID } = value;
                    {
                        //Check if there is an App opened but none Fucused
                        const itemOpen = items.filter(item => item.visible === true)

                        //console.log(itemOpen)
                        //Check wich of the opened Apps is Selected
                        const itemSelected = itemOpen.filter(item => item.id === focusedFrameId)

                        //Check if none is selected but more then 0 opened
                        if (itemSelected.length === 0 && itemOpen.length > 0) {
                            console.log(lastOpenID, items)
                            title = items[lastOpenID].name
                        }
                        //Choose wich of the opened Apps are selected
                        if (itemSelected.length > 0 && itemOpen.length > 0) {
                            title = itemSelected[0].name
                        }
                        //none selected and none open
                        if (itemSelected.length === 0 && itemOpen.length === 0) {
                            title = '/C/Johannes-Walenta.html'
                        }

                    }


                    return (
                        <div className="Dropdown">
                            <button className='Dropdown-Btn App_desc'>{title}</button>
                            <div className='Dropdown-Content'>
                                <a href="#">Quit</a>
                            </div>
                        </div>
                    );
                }
                }
            </Consumer>
        )
    }
}

export default NavItem_AppTracker;

