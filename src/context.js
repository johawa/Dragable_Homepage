import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return {
                ...state,
                counter: state.counter + action.payload,
            };
        case 'NEW_POSITION':
            return {
                ...state,
                items: action.payload,
            };
        case 'TOGGLE_VIEW_APPFRAME':
            return {
                ...state,
              items: action.payload,
            };
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        background: ['url(http://wallpapercave.com/wp/NNo5yub.jpg)', 'green', 'blue', 'yellow'],
        counter: 0,
        items: [
            { id: 0, name: '1', top: 200, left: 100, visible: true, color: 'aqua' },
            { id: 1, name: '2', top: 200, left: 700, visible: false, color: 'yellow' },
            { id: 2, name: '3', top: 400, left: 450, visible: false, color: 'red' },
        ],

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