import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return {
                ...state,
                counter: state.counter + action.payload,
            };
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        background: ['url(http://wallpapercave.com/wp/NNo5yub.jpg)', 'green', 'blue', 'yellow'],
        counter: 0,
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