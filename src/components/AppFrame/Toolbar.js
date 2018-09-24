import React, { Component } from 'react';

import Button from './button';
import Background from '../../asstest/DoubleLine.png';

class Toolbar extends Component {
    render() {
        return (
            <div className='app-toolbar' style={{ backgroundImage: `url(${Background})` }}>
                
                <ul className='app-controls'>
                    <Button className='close' />
                    <Button className='minimise' />
                    <Button className='maximise' />
                </ul>
                
                <div className='app-title'>THIS IS A TITLE</div>
            </div>
        )
    }
}

export default Toolbar