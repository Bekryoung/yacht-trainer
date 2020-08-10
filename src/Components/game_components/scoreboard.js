import React, { Component } from 'react';

import Scoreboardline from './scoreboardline'

class Scoreboard extends Component {

    state = {
        scores: [
            { score: null, name: 'Aces', Category: 'upper' },
            { score: null, name: 'Deuces', Category: 'upper' },
            { score: null, name: 'Threes', Category: 'upper' },
            { score: null, name: 'Fours', Category: 'upper' },
            { score: null, name: 'Fives', Category: 'upper' },
            { score: null, name: 'Sixes', Category: 'upper' },
            { score: null, name: 'Choice', Category: 'downer' },
            { score: null, name: '4 of a Kind', Category: 'downer' },
            { score: null, name: 'Full House', Category: 'downer' },
            { score: null, name: 'S.Straight', Category: 'downer' },
            { score: null, name: 'L.Straight', Category: 'downer' },
            { score: null, name: 'Yacht', Category: 'downer' },
        ],

        Subtotal: 0,
        Bonus: null,

        Total: 0
    }

    scoreSwitch = (e) => {
        if (this.props.dicetrials === 0) {
            alert('roll dice first')
        } else {
            this.scoreSwitchRun(e)
        }
    }

    scoreSwitchRun = (e) => {
        const { dicesvalues } = this.props;
        const setDicevalues = Array.from(new Set(dicesvalues));

        let unknownScore = 0;
        let valuesSum = 0;
        dicesvalues.map(value => valuesSum = valuesSum + value);

        const newState = this.state;

        switch (e) {
            case 'Aces':
                dicesvalues.filter(value => value === 1).map(value => unknownScore = unknownScore + value);
                newState.scores.filter(line => line.name === e)[0].score = unknownScore;
                break;
            case 'Deuces':
                dicesvalues.filter(value => value === 2).map(value => unknownScore = unknownScore + value)
                newState.scores.filter(line => line.name === e)[0].score = unknownScore;
                break;
            case 'Threes':
                dicesvalues.filter(value => value === 3).map(value => unknownScore = unknownScore + value)
                newState.scores.filter(line => line.name === e)[0].score = unknownScore;
                break;
            case 'Fours':
                dicesvalues.filter(value => value === 4).map(value => unknownScore = unknownScore + value)
                newState.scores.filter(line => line.name === e)[0].score = unknownScore;
                break;
            case 'Fives':
                dicesvalues.filter(value => value === 5).map(value => unknownScore = unknownScore + value)
                newState.scores.filter(line => line.name === e)[0].score = unknownScore;
                break;
            case 'Sixes':
                dicesvalues.filter(value => value === 6).map(value => unknownScore = unknownScore + value)
                newState.scores.filter(line => line.name === e)[0].score = unknownScore;
                break;
            case 'Choice':
                unknownScore = valuesSum;
                newState.scores.filter(line => line.name === e)[0].score = unknownScore;
                break;
            case '4 of a Kind':
                if (dicesvalues[0] === dicesvalues[3] || dicesvalues[1] === dicesvalues[4]) {
                    unknownScore = valuesSum;
                }
                newState.scores.filter(line => line.name === e)[0].score = unknownScore;
                break;
            case 'Full House':
                if ((dicesvalues[0] === dicesvalues[2] && dicesvalues[3] === dicesvalues[4]) || (dicesvalues[0] === dicesvalues[1] && dicesvalues[2] === dicesvalues[4])) {
                    unknownScore = valuesSum;
                }
                newState.scores.filter(line => line.name === e)[0].score = unknownScore;
                break;
            case 'S.Straight':
                if (setDicevalues[0] === setDicevalues[3] - 3 || setDicevalues[1] === setDicevalues[4] - 3) {
                    unknownScore = 15;
                }
                newState.scores.filter(line => line.name === e)[0].score = unknownScore;
                break;
            case 'L.Straight':
                if (setDicevalues[0] === setDicevalues[4] - 4) {
                    unknownScore = 30;
                }
                newState.scores.filter(line => line.name === e)[0].score = unknownScore;
                break;
            case 'Yacht':
                if (dicesvalues[0] === dicesvalues[4]) {
                    unknownScore = 50;
                }
                newState.scores.filter(line => line.name === e)[0].score = unknownScore;
                break;
            default:
                ;
        }

        let Subtotal = null;

        newState.scores.filter(line => line.Category === 'upper').map(line => Subtotal = Subtotal + line.score)

        const Bonus = (Subtotal >= 63 ? 35 : null)

        let Total = null;

        newState.scores.map(line => Total = Total + line.score)

        newState.Subtotal = Subtotal
        newState.Bonus = Bonus;
        newState.Total = Total;

        this.setState(newState);

        this.props.diceRollReset();
    };

    render() {
        const Score = (props) => <span style={{ fontWeight: 'bold', color: 'blue' }}>{props.children}</span>

        const { Subtotal, Bonus, Total } = this.state;

        const scoreDisplay = (e) => {
            return (
                this.state.scores.filter(line => line.Category === e).map(line => <Scoreboardline subject={line} game={this.props} scoreSwitch={this.scoreSwitch} key={line.name} />)
            );
        }

        return (
            <div>
                Scoreboard
                <table border="1" cellPadding="5px">
                    <tbody>
                        <tr style={{ fontWeight: "bold", backgroundColor: "lightgray" }}><td>Categories</td><td>Score</td><td></td></tr>
                        {scoreDisplay('upper')}
                        <tr style={{ backgroundColor: "lightgray" }}><td><b>Subtotal</b></td><td><Score>{Subtotal}</Score></td><td> </td></tr>
                        <tr style={{ backgroundColor: "lightgray" }}><td><b>Bonus</b></td><td><Score>{Bonus}</Score></td><td></td></tr>
                        {scoreDisplay('downer')}
                        <tr style={{ backgroundColor: "lightgray" }}><td><b>Total</b></td><td><Score>{Total}</Score></td><td></td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Scoreboard;