import React, { Component } from 'react';

import Scoreboardline from './scoreboardline'

class Scoreboard extends Component {

    state = {
        Aces: { score: null, name: 'Aces' },
        Deuces: { score: null, name: 'Deuces' },
        Threes: { score: null, name: 'Threes' },
        Fours: { score: null, name: 'Fours' },
        Fives: { score: null, name: 'Fives' },
        Sixes: { score: null, name: 'Sixes' },

        Subtotal: 0,
        Bonus: null,

        Choice: { score: null, name: 'Choice' },
        FoK: { score: null, name: '4 of a Kind' },
        FullHouse: { score: null, name: 'Full House' },
        SStraight: { score: null, name: 'S.Straight' },
        LStraight: { score: null, name: 'L.Straight' },
        Yacht: { score: null, name: 'Yacht' },

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
                dicesvalues.filter(value => value === 1).map(value => unknownScore = unknownScore + value)
                newState.Aces.score = unknownScore;
                break;
            case 'Deuces':
                dicesvalues.filter(value => value === 2).map(value => unknownScore = unknownScore + value)
                newState.Deuces.score = unknownScore;
                break;
            case 'Threes':
                dicesvalues.filter(value => value === 3).map(value => unknownScore = unknownScore + value)
                newState.Threes.score = unknownScore;
                break;
            case 'Fours':
                dicesvalues.filter(value => value === 4).map(value => unknownScore = unknownScore + value)
                newState.Fours.score = unknownScore;
                break;
            case 'Fives':
                dicesvalues.filter(value => value === 5).map(value => unknownScore = unknownScore + value)
                newState.Fives.score = unknownScore;
                break;
            case 'Sixes':
                dicesvalues.filter(value => value === 6).map(value => unknownScore = unknownScore + value)
                newState.Sixes.score = unknownScore;
                break;
            case 'Choice':
                newState.Choice.score = valuesSum;
                break;
            case '4 of a Kind':
                if (dicesvalues[0] === dicesvalues[3] || dicesvalues[1] === dicesvalues[4]) {
                    unknownScore = valuesSum;
                }
                newState.FoK.score = unknownScore;
                break;
            case 'Full House':
                if ((dicesvalues[0] === dicesvalues[2] && dicesvalues[3] === dicesvalues[4]) || (dicesvalues[0] === dicesvalues[1] && dicesvalues[2] === dicesvalues[4])) {
                    unknownScore = valuesSum;
                }
                newState.FullHouse.score = unknownScore
                break;
            case 'S.Straight':
                if (setDicevalues[0] === setDicevalues[3] - 3 || setDicevalues[1] === setDicevalues[4] - 3) {
                    unknownScore = 15;
                }
                console.log(setDicevalues[0]);
                newState.SStraight.score = unknownScore;
                break;
            case 'L.Straight':
                if (setDicevalues[0] === setDicevalues[4] - 4) {
                    unknownScore = 30;
                }
                newState.LStraight.score = unknownScore;
                break;
            case 'Yacht':
                if (dicesvalues[0] === dicesvalues[4]) {
                    unknownScore = 50;
                }
                newState.Yacht.score = unknownScore
                break;
            default:
                ;
        }

        const Aces = newState.Aces.score;
        const Deuces = newState.Deuces.score
        const Threes = newState.Threes.score
        const Fours = newState.Fours.score
        const Fives = newState.Fives.score
        const Sixes = newState.Sixes.score
        const Choice = newState.Choice.score
        const FoK = newState.FoK.score
        const FullHouse = newState.FullHouse.score
        const SStraight = newState.SStraight.score
        const LStraight = newState.LStraight.score
        const Yacht = newState.Yacht.score

        const subTotal = Aces + Deuces + Threes + Fours + Fives + Sixes;
        const Bonus = (subTotal >= 63 ? 35 : null);
        const Total = subTotal + Bonus + Choice + FoK + FullHouse + SStraight + LStraight + Yacht;

        newState.Subtotal = Aces + Deuces + Threes + Fours + Fives + Sixes;
        newState.Bonus = Bonus;
        newState.Total = Total;

        this.setState(newState);

        this.props.diceRollReset();
    }

    render() {
        const Score = (props) => <span style={{ fontWeight: 'bold', color: 'blue' }}>{props.children}</span>

        const { Aces, Deuces, Threes, Fours, Fives, Sixes, Subtotal, Bonus, Choice, FoK, FullHouse, SStraight, LStraight, Yacht, Total } = this.state;

        return (
            <div>
                Scoreboard
                <table border="1" cellPadding="5px">
                    <tbody>
                        <tr style={{ fontWeight: "bold", backgroundColor: "lightgray" }}><td>Categories</td><td>Score</td><td></td></tr>
                        <Scoreboardline subject={Aces} scoreSwitch={this.scoreSwitch} />
                        <Scoreboardline subject={Deuces} scoreSwitch={this.scoreSwitch} />
                        <Scoreboardline subject={Threes} scoreSwitch={this.scoreSwitch} />
                        <Scoreboardline subject={Fours} scoreSwitch={this.scoreSwitch} />
                        <Scoreboardline subject={Fives} scoreSwitch={this.scoreSwitch} />
                        <Scoreboardline subject={Sixes} scoreSwitch={this.scoreSwitch} />
                        <tr style={{ backgroundColor: "lightgray" }}><td><b>Subtotal</b></td><td><Score>{Subtotal}</Score></td><td> </td></tr>
                        <tr style={{ backgroundColor: "lightgray" }}><td><b>Bonus</b></td><td><Score>{Bonus}</Score></td><td></td></tr>
                        <Scoreboardline subject={Choice} scoreSwitch={this.scoreSwitch} />
                        <Scoreboardline subject={FoK} scoreSwitch={this.scoreSwitch} />
                        <Scoreboardline subject={FullHouse} scoreSwitch={this.scoreSwitch} />
                        <Scoreboardline subject={SStraight} scoreSwitch={this.scoreSwitch} />
                        <Scoreboardline subject={LStraight} scoreSwitch={this.scoreSwitch} />
                        <Scoreboardline subject={Yacht} scoreSwitch={this.scoreSwitch} />
                        <tr style={{ backgroundColor: "lightgray" }}><td><b>Total</b></td><td><Score>{Total}</Score></td><td></td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Scoreboard;