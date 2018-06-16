import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import GameArea from '../GameArea/GameArea';
import Footer from '../Footer/Footer';
import cards from '../../cards.json';


class MemoryContainer extends Component {
    state = {
        cards,
        score = 0
    }

    render(){
        return (
            <Navbar score={this.state.score}></Navbar>
            <GameArea />
            <Footer />
        );
    }
}