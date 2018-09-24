import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

import './Layout.css';
import Desktop from '../../container/Desktop/Desktop';
import Background from '../../components/Background/Background';
import Navbar from '../../components/Navbar/Navbar';


class Layout extends Component {
    render() {

        return (

            <Background>
                <div className="Container">
                    <nav className="Navbar">
                        <Navbar />
                    </nav>
                    <main className="Main">
                        <Desktop />
                    </main>
                </div>
            </Background>

        )
    }
}

export default DragDropContext(HTML5Backend)(Layout);
