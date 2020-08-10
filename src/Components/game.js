import React, { Component } from 'react';

import Scoreboard from './game_components/scoreboard';
import Rolldice from './game_components/rolldice';

class Game extends Component {

    state = {

        dices: [
            { id: 0, value: 0, choice: false },
            { id: 1, value: 0, choice: false },
            { id: 2, value: 0, choice: false },
            { id: 3, value: 0, choice: false },
            { id: 4, value: 0, choice: false }
        ],

        dicesvalues: [],
        dicetrials: 0
    }

    diceRollUpdate = () => {
        const newState = this.state;

        newState.dices.map(die =>
            (die.choice === false
                ? die.value = Math.floor(Math.random() * 6 + 1)
                : die)
        );

        newState.dicesvalues = [];
        newState.dices.map(die => newState.dicesvalues.push(die.value));
        newState.dicesvalues = newState.dicesvalues.sort((a, b) => a - b)

        newState.dicetrials = newState.dicetrials + 1;

        this.setState(newState);
    }

    chooseDie = (e) => {
        const newDicesState = this.state.dices;

        newDicesState.filter(die => die.id === e).map(die =>
            (this.state.dicetrials === 0
                ? alert('roll dice first')
                : die.choice = !die.choice)
        );

        this.setState({ dices: newDicesState });
    }

    diceRollReset = (e) => {
        const newState = this.state;

        newState.dices = [
            { id: 0, value: 0, choice: false },
            { id: 1, value: 0, choice: false },
            { id: 2, value: 0, choice: false },
            { id: 3, value: 0, choice: false },
            { id: 4, value: 0, choice: false }
        ]
        newState.dicesvalues = [];
        newState.dicetrials = 0;

        this.setState(newState);
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

        const { dices, dicetrials, dicesvalues } = this.state
        return (
            <div style={basic_div}>game board
                <div style={game_div}>
                    <Scoreboard
                        dicetrials={dicetrials}
                        dicesvalues={dicesvalues}
                        diceRollReset={this.diceRollReset} />
                </div>
                <div style={game_div}>
                    <Rolldice
                        dices={dices}
                        dicetrials={dicetrials}
                        diceRollUpdate={this.diceRollUpdate}
                        chooseDie={this.chooseDie}
                        diceRollReset={this.diceRollReset} />
                </div>
                <div style={game_div}></div>
            </div>
        );
    }

}

export default Game;