import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

import { Consumer } from '../../context';
import './animation.css';

import Item from '../../components/DragAndDrop/Item';
import Board from '../../components/DragAndDrop/DropTarget';

import '../../css/AppFrame.css';

const icons = [
    { id: 0, name: '1', top: 40, left: 40 },
    { id: 1, name: '2', top: 100, left: 40 },
    { id: 2, name: '3', top: 160, left: 40 },
]

class Desktop extends Component {
    state = {
        items: [
            { id: 0, name: '1', top: 207, left: 100, width: 400, height: 300, scale: 1, minimized: false, visible: false, color: 'aqua' },
            { id: 1, name: '2', top: 200, left: 700, width: 400, height: 300, scale: 1, minimized: false, visible: false, color: 'yellow' },
            { id: 2, name: '3', top: 400, left: 450, width: 400, height: 300, scale: 1, minimized: false, visible: false, color: 'red' },
        ],

    }

    onDrop = (item) => {
        null
    }

    newLoaction = (item, left, top) => {
        //Update top and left in the state to drag an drop the item,
        // also check if minimized, if so and dragged up again scal big again
        const id = item.id
        let currentItem = this.state.items.find(item =>
            item.id === id);
        if (currentItem.minimized) {
            currentItem.scale = 1
            currentItem.minimized = false
        }
        //Really have to work on it 

        const items = [...this.state.items];
        items[item.id].top = top;
        items[item.id].left = left;


        this.setState({ items: items })
    }

    onClickAppFrame(item) {
        //Check if Item is Minimized, if so, maximize it again, otherwise do nothing
        const id = item.id
        let currentItem = this.state.items.find(item =>
            item.id === id)
        if (currentItem.minimized) {

            this.setState((prevState, state) => {
                let currentItem = prevState.items.find(item =>
                    item.id === id)

                currentItem.minimized = false;
                currentItem.scale = 1;
                currentItem.top = 250;
                return {
                    ...state,
                    currentItem
                }
            })
        }
        else {          
            return
        }
    }

    minimizeItem(item) {
        //Minimize Button Logic
        const id = item.id

        this.setState((prevState, state) => {
            let currentItem = prevState.items.find(item =>
                item.id === id);

            const wrapper = document.getElementById(`DesktopWrapper`)
            const windowHeight = wrapper.getBoundingClientRect().height;
            const newPosition = windowHeight - (currentItem.height * 0.65);

            if (!currentItem.minimized) {
                currentItem.minimized = !currentItem.minimized;
                currentItem.scale = 0.5;
                currentItem.top = newPosition;
            } else {
                currentItem.minimized = !currentItem.minimized;
                currentItem.scale = 1;
                currentItem.top = 200;
            }

            return {
                ...state,
                currentItem
            }
        })
    }

    IconClickHandler(item) {
        //Open App of Close it 
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
            <div className="Wrapper" id="DesktopWrapper">
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

                            <div>
                                <Item
                                    item={item}
                                    minimized={item.minimized}
                                    index={index}
                                    clickAppFrame={this.onClickAppFrame.bind(this, item)}
                                    CloseClick={this.IconClickHandler.bind(this, item)}
                                    MinimizeClick={this.minimizeItem.bind(this, item)}
                                    handleDrop={(item) => this.onDrop(item)} />
                            </div>

                        </CSSTransition>
                    )
                })}


                {
                    icons.map((item, index) => {
                        const { top, left } = item;
                        return (<div
                            onClick={this.IconClickHandler.bind(this, item)}
                            key={item.id}
                            item={item}
                            index={index}
                            style={{ width: '50px', height: '50px', backgroundColor: 'red', position: 'absolute', top, left, zIndex: '800' }}
                        >
                            {item.name}
                        </div>)
                    })
                }
                <Board moveBox={(item, left, top) => this.newLoaction(item, left, top)} />
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(Desktop)