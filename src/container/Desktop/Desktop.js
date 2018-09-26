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
        highlightedIconId: null,        
    }

    onDrop = (item) => {
        null
    }

    newLoaction = (item, left, top, items, dispatch) => {
        //Update top and left in the state to drag an drop the item,
        // also check if minimized, if so and dragged up again scal big again
        const id = item.id
        const updatedItems = [...items];
        let ItemToUpdate = updatedItems.find(item => item.id === id);
        if (ItemToUpdate.minimized) {
            ItemToUpdate.scale = 1
            ItemToUpdate.minimized = false
        }

        ItemToUpdate.top = top;
        ItemToUpdate.left = left;
        dispatch({
            type: 'CHANGE_FRAME_POSITION',
            payload: updatedItems,
        });
    }

    onClickAppFrame(item, items, dispatch) {
        //set State to fucused Frame ID

        const id = item.id
        const updatedItems = [...items];
        let ItemToUpdate = updatedItems.find(item => item.id === id);

        dispatch({
            type: 'FOCUS_FRAME',
            payload: id
        })
        //Check if Item is Minimized, if so, maximize it again, otherwise do nothing


        if (ItemToUpdate.minimized) {
            ItemToUpdate.minimized = false;
            ItemToUpdate.scale = 1;
            ItemToUpdate.top = 250;
         
            dispatch({
                type: 'TOGGLE_FRAME_SIZE_2',
                payload: updatedItems,
            });
        }
        else {
            return
        }
    }

    minimizeItem(item, items, dispatch) {
        //Minimize Button Logic
        const id = item.id
        const updatedItems = [...items];
        let ItemToUpdate = updatedItems.find(item => item.id === id);

        const wrapper = document.getElementById(`DesktopWrapper`)
        const windowHeight = wrapper.getBoundingClientRect().height;
        const newPosition = windowHeight - (ItemToUpdate.height * 0.65);

        if (!ItemToUpdate.minimized) {
            ItemToUpdate.minimized = !ItemToUpdate.minimized;
            ItemToUpdate.scale = 0.5;
            ItemToUpdate.top = newPosition;
        } else {
            ItemToUpdate.minimized = !ItemToUpdate.minimized;
            ItemToUpdate.scale = 1;
            ItemToUpdate.top = 200;
        }

        dispatch({
            type: 'TOGGLE_FRAME_SIZE',
            payload: updatedItems,
        });


        /*   this.setState((prevState, state) => {
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
          }) */
    }

    openApp(item, items, dispatch, value) {
        //Open App of Close it        
        const id = item.id 
        value.lastOpenID = id
        const updatedItems = [...items];
        let ItemToUpdate = updatedItems.find(item => {
            return (item.id === id)
        })       
        ItemToUpdate.visible = !ItemToUpdate.visible
        dispatch({
            type: 'OPEN_APP',
            payload: updatedItems,
        });

       
        /* this.setState((prevState, state) => {
            let currentItem = prevState.items.find(item =>
                item.id === id)
            currentItem.visible = !currentItem.visible
            return {
                ...state,
                currentItem
            }
        }) */
    }


    highlightItem(item) {
        this.setState({
            highlightedIconId: item.id
        })
    }


    render() {

        return (
            <Consumer>
                {
                    value => {
                        const { dispatch, items, focusedFrameId } = value;
                        return (
                            <div className="Wrapper" id="DesktopWrapper">
                                {items.map((item, index) => {
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
                                                    focused={focusedFrameId}
                                                    item={item}
                                                    minimized={item.minimized}
                                                    index={index}
                                                    clickAppFrame={this.onClickAppFrame.bind(this, item, items, dispatch)}
                                                    CloseClick={this.openApp.bind(this, item, items, dispatch)}
                                                    MinimizeClick={this.minimizeItem.bind(this, item, items, dispatch)}
                                                    handleDrop={(item) => this.onDrop(item)} />
                                            </div>

                                        </CSSTransition>
                                    )
                                })}




                                {
                                    AppIcons.map((item, index) => {
                                        return (<DesktopIcon
                                            Click={this.highlightItem.bind(this, item)}
                                            DoubleClick={this.openApp.bind(this, item, items, dispatch, value)}
                                            highlighted={this.state.highlightedIconId}
                                            key={item.id}
                                            item={item}
                                            index={index}
                                        >
                                            {item.name}
                                        </DesktopIcon>)
                                    })

                                }
                                <Board moveBox={(item, left, top) => this.newLoaction(item, left, top, items, dispatch)} />
                            </div>

                        )
                    }
                }
            </Consumer>
        )
    }
}

export default DragDropContext(HTML5Backend)(Desktop)