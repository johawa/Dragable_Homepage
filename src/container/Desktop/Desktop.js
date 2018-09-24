import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import update from 'immutability-helper';

import './animation.css';

import Item from '../../components/DragAndDrop/Item';
import Board from '../../components/DragAndDrop/DropTarget';

import '../../css/AppFrame.css';

const icons = [
    { id: 0, name: '1', top: 40, left: 40 },
    { id: 1, name: '2', top: 100, left: 40 },
]

class Desktop extends Component {
    state = {
        items: [
            { id: 0, name: '1', top: 200, left: 100, visible: false, color:'aqua' },
            { id: 1, name: '2', top: 200, left: 700, visible: false, color:'yellow' },
        ],
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
        const id = item.id

        this.setState((prevState, state) => {
            let currentItem = prevState.items.find(item =>
                item.id === id)
            currentItem.visible = !currentItem.visible
            return {
                ...state,
                currentItem
            }
        })
    }


    render() {

        return (
            <div className="Wrapper">
                {this.state.items.map((item, index) => {
                    return (
                        <CSSTransition
                            classNames='fade'
                            timeout={{
                                enter: 700,
                                exit: 700,
                            }}
                            key={item.id}
                            unmountOnExit
                            mountOnEnter
                            in={item.visible}
                            >
                          {/*   {item.visible ? */}
                            <div>
                                <Item
                                    item={item}
                                    index={index}
                                    handleDrop={(item) => this.onDrop(item)} />
                            </div>
                           {/*  :
                            <div></div> } */}
                        </CSSTransition>
                    )
                })}


                {
                    icons.map((item, index) => {
                        const { top, left } = item;
                        return <div onClick={this.IconClickHandler.bind(this, item)} key={item.id} item={item} index={index} style={{ width: '50px', height: '50px', backgroundColor: 'red', position: 'absolute', top, left, zIndex: '800' }} />
                    })
                }
                <Board moveBox={(item, left, top) => this.newLoaction(item, left, top)} />
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(Desktop)