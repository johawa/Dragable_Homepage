import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

import { Consumer } from '../../context';
import './animation.css';

import Item from '../../components/DragAndDrop/Item';
import Board from '../../components/DragAndDrop/DropTarget';
import DesktopIcon from './DesktopIcon';

import MyWorkSvg from '../../asstest/portfolio.svg';
import SpotifySvg from '../../asstest/spotify.svg';
import PaintSvg from '../../asstest/watercolor.svg';

import '../../css/AppFrame.css';

const AppIcons = [
    { id: 0, top: 40, left: 40, name: 'My Work', highlighted: false, SVG: MyWorkSvg },
    { id: 1, top: 190, left: 40, name: 'Paint.exe', highlighted: false, SVG: PaintSvg },
    { id: 2, top: 340, left: 40, name: 'Spotify.exe', highlighted: false, SVG: SpotifySvg },
]


class Desktop extends Component {
    state = {
        items: [
            { id: 0, name: '1', top: 207, left: 100, width: 400, height: 300, scale: 1, minimized: false, visible: false, color: 'aqua' },
            { id: 1, name: '2', top: 200, left: 700, width: 400, height: 300, scale: 1, minimized: false, visible: false, color: 'yellow' },
            { id: 2, name: '3', top: 400, left: 450, width: 400, height: 300, scale: 1, minimized: false, visible: false, color: 'red' },
        ],
        highlightedIconId: null,
        focusedFrameId: null,
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
        //set State to fucused Frame ID

        const id = item.id
        this.setState({
            focusedFrameId: id
        })
        //Check if Item is Minimized, if so, maximize it again, otherwise do nothing
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

    openApp(item) {
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

    highlightItem(item) {
        this.setState({
            highlightedIconId: item.id
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
                                    focused={this.state.focusedFrameId}
                                    item={item}
                                    minimized={item.minimized}
                                    index={index}
                                    clickAppFrame={this.onClickAppFrame.bind(this, item)}
                                    CloseClick={this.openApp.bind(this, item)}
                                    MinimizeClick={this.minimizeItem.bind(this, item)}
                                    handleDrop={(item) => this.onDrop(item)} />
                            </div>

                        </CSSTransition>
                    )
                })}

                {
                    AppIcons.map((item, index) => {
                        return (<DesktopIcon
                            Click={this.highlightItem.bind(this, item)}
                            DoubleClick={this.openApp.bind(this, item)}
                            highlighted={this.state.highlightedIconId}
                            key={item.id}
                            item={item}
                            index={index}
                        >
                            {item.name}
                        </DesktopIcon>)
                    })

                }
                <Board moveBox={(item, left, top) => this.newLoaction(item, left, top)} />
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(Desktop)