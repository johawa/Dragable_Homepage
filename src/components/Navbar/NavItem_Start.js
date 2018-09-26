import React, { Component } from 'react';

class NavItem_Start extends Component {
    state = {
        toggler: false
    }

    closeWindow() {
        console.log('close window')
        window.close();
    }
    render() {

        return (
            <div className="Dropdown"
                onMouseEnter={() => this.setState({ toggler: true })}
                onMouseLeave={() => this.setState({ toggler: false })}

            >
                <button className='Dropdown-Btn'

                    style={{
                        background: this.state.toggler ? '#B68282' : 'linear-gradient(to right, #0099f7, #f11712)',
                        backgroundSize: '150% 150%',
                        backgroundPosition: 'center',
                        paddingRight: '45px',
                        paddingLeft: '40px'
                    }}>
                    Johannes Walenta
     </button>
                <div className='Dropdown-Content' style={{ width: '100%', textAlign: 'start' }}>
                    <a style={{ paddingLeft: '25px' }} href="#"> About Me</a>
                    <hr />
                    <a style={{ paddingLeft: '25px' }} href="https://codepen.io/timebasher/" target="_blank"> CodePen</a>
                    <a style={{ paddingLeft: '25px' }} href='https://github.com/timebasher' target="_blank"> Github</a>
                    <a style={{ paddingLeft: '25px' }} href="#"> Email</a>
                    <hr />
                    <a style={{ paddingLeft: '25px' }} href="#" onClick={this.closeWindow.bind(this)}> Shut Down</a>
                </div>
            </div>
        )
    }
}

export default NavItem_Start;