import React, { Component } from 'react';
import background_1 from './asstest/background_1.jpg';
import background_2 from './asstest/background_2.jpg';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return {
                ...state,
                counter: state.counter + action.payload,
            };
        case 'OPEN_APP':
            return {
                ...state,
                items: action.payload,
            };
        case 'CHANGE_FRAME_POSITION':
            return {
                ...state,
                items: action.payload,
            };
        case 'TOGGLE_FRAME_SIZE':
            return {
                ...state,
                items: action.payload,
            };
        case 'TOGGLE_FRAME_SIZE_2':
            return {
                ...state,
                items: action.payload,
            };
        case 'FOCUS_FRAME':
            return {
                ...state,
                focusedFrameId: action.payload,
            };
        
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        background: ['linear-gradient(to right, #0099f7, #f11712)', '#008081', `url(${background_2})`, 'yellow',],
        counter: 0, 
        lastOpenID: 0,      
        items: [
            { id: 0, name: 'My Work', top: 207, left: 100, width: 400, height: 300, scale: 1, minimized: false, visible: false, color: 'aqua' },
            { id: 1, name: 'Paint.exe', top: 200, left: 700, width: 400, height: 300, scale: 1, minimized: false, visible: false, color: 'yellow' },
            { id: 2, name: 'Spotify.exe', top: 400, left: 450, width: 400, height: 300, scale: 1, minimized: false, visible: false, color: 'red' },
        ],        
        focusedFrameId: null,
        dispatch: action => this.setState(state => reducer(state, action))
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;