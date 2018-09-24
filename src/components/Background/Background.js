import React, { Component } from 'react';

import { Consumer } from '../../context';
import './Background.css';


class Background extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { background, counter } = value;
                    //counter = 0 by default
                    return (
                        <div className="Background" style={{ background: background[counter] }}>
                            {this.props.children}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Background;