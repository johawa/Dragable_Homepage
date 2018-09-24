import React, { Component } from 'react';

import Button from './button';
import Background from '../../asstest/DoubleLine.png';

class Toolbar extends Component {

    closeAppFrame(){
        console.log('close AppFrame')
    }

    render() {
        return (
            <div className='app-toolbar' style={{ backgroundImage: `url(${Background})` }}>
                
                <ul className='app-controls'>
                    <Button className='close' onClick={this.closeAppFrame.bind(this)}/>
                    <Button className='minimise' />
                    <Button className='maximise' />
                </ul>
                
                <div className='app-title'>THIS IS A TITLE</div>
            </div>
        )
    }
}

export default Toolbar