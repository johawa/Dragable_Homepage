import React, { Component } from 'react';
import {
    DropTarget,
    DragDropContext,
    ConnectDropTarget,
    DropTargetMonitor,
    XYCoord,
} from 'react-dnd';

const itemSource = {
    drop(props, monitor, component) {

        const item = monitor.getItem()
        const delta = monitor.getDifferenceFromInitialOffset()
		const left = Math.round(item.left + delta.x)
		const top = Math.round(item.top + delta.y)
        
        return props.moveBox(item, left, top) 
    },
}


function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        item: monitor.getItem(),
        hovered: monitor.isOver(),
    }
}


class Board extends Component {
    render() {
        const { connectDropTarget, item, hovered } = this.props;

        return connectDropTarget(
            <div className="Board" style={{ backgroundColor: hovered ? 'grey' : 'transparent' }}>
                
            </div>
        )
    }
}

export default DropTarget('item', itemSource, collect)(Board);