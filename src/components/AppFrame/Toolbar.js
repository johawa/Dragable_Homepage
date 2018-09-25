import React, { Component } from 'react';

import Background from '../../asstest/DoubleLine.png';

class Toolbar extends Component {

    closeAppFrame() {
        console.log('close AppFrame')
    }

    render() {
        return (
            <div className='app-toolbar' style={{ backgroundImage: `url(${Background})` }}>

                <ul className='app-controls'>
                    <li className='close' onClick={this.props.CloseClick} />
                    <li className='minimise' onClick={this.props.MinimizeClick} />
                    <li className='maximise' />
                </ul>

                <div className='app-title'>{this.props.title}</div>
            </div>
        )
    }
}

export default Toolbar