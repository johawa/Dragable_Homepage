import React, { Component } from 'react';

import { Consumer } from '../../context';

class NavItem_View extends Component {

    goFullscreen() {
        const el = document.documentElement;
        const rfs = el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen;

        rfs.call(el);
    }

    changeBackground(dispatch, counter, background) {
        let num = 1;
        let length = background.length - 1;    
        if (counter >= length) {
            num = -length;
        }
        dispatch({
            type: 'INCREASE_COUNTER',
            payload: num,
        });

    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch, counter, background } = value;
                    return (
                        <div className="Dropdown">
                            <button className='Dropdown-Btn'>View</button>
                            <div className='Dropdown-Content'>
                                <a href="#" onClick={this.goFullscreen.bind(this)}>Enter Fullscreen Mode</a>
                                <a href="#" onClick={this.changeBackground.bind(this, dispatch, counter, background)}>Change Background</a>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default NavItem_View;

