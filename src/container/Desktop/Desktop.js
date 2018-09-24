import React, { Component } from 'react';
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';

import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

import './animation.css';

import Item from '../../components/DragAndDrop/Item';
import Board from '../../components/DragAndDrop/DropTarget';

import '../../css/AppFrame.css';

const icons = [
    { id: 0, name: '1', top: 40, left: 40 },
    { id: 1, name: '2', top: 100, left: 40 },
]

const ItemsToPush = [
    { id: 0, name: '1', top: 100, left: 100, },
    { id: 1, name: '2', top: 100, left: 700 },
]

class Desktop extends Component {
    state = {
        items: [
            { id: 0, name: '1', top: 100, left: 100, },
            { id: 1, name: '2', top: 100, left: 700 },
            /*  { id: 2, name: '3', top: 100, left: 10 },
     { id: 3, name: '4', top: 140, left: 10 },  */
        ],

        open: false,
    }

    onDrop = (item) => {
        null
    }

    newLoaction = (item, left, top) => {
        //Really have to work on it 
        const id = item.id
        const items = [...this.state.items];
        items[item.id].top = top;
        items[item.id].left = left;
        console.log(items)

        this.setState({ items: items })
    }

    IconClickHandler(item) {
        console.log(this.state.items)
        const id = item.id
        this.setState(prevState => ({ open: !prevState.open }))
        /*  this.setState(state => {
             console.log(state.items)
             state.items.push(ItemsToPush[id])
         }) */

        /*  this.setState(state => ({
             items: state.items.filter(
                 item => item.id !== id
             ),
         })); */

        this.setState(state => ({
            items: [
                ...state.items,
                { id: 2, name: '3', top: 500, left: 700 },
            ],
        }));

    }


    render() {

        return (
            <div className="Wrapper">
                <TransitionGroup component={null} >
                    {this.state.items.map((item, index) => {
                        return (

                            <CSSTransition
                                classNames='fade'
                                timeout={{
                                    enter: 500,
                                    exit: 500,
                                }}
                                key={item.id}
                                unmountOnExit
                                mountOnEnter                               
                            >
                                <div>
                                    <Item
                                        item={item}
                                        index={index}
                                        handleDrop={(item) => this.onDrop(item)} />
                                </div>
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>

                {icons.map((item, index) => {
                    const { top, left } = item;
                    return <div onClick={this.IconClickHandler.bind(this, item)} key={item.id} item={item} index={index} style={{ width: '50px', height: '50px', backgroundColor: 'red', position: 'absolute', top, left, zIndex: '800' }} />
                })}
                <Board moveBox={(item, left, top) => this.newLoaction(item, left, top)} />
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(Desktop)