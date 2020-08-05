import React, { Component } from 'react';

import Scoreboard from './game_components/scoreboard';
import Rolldice from './game_components/rolldice';

class Game extends Component {

    state = {

    }

    render() {
        const basic_div = {
            border: '3px solid black',
            margin: '3px'
        }

        const game_div = {
            border: '1px solid green',
            margin: '3px'
        }
        return (
            <div style={basic_div}>game board
                <div style={game_div}><Scoreboard /></div>
                <div style={game_div}><Rolldice /></div>
                <div style={game_div}></div>
            </div>
        );
    }

}

export default Game;