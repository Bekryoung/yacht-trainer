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
        const newState = this.state;

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

        switch (e) {
            case 'Aces':
                newState.Aces.score = Aces + 1;
                break;
            case 'Deuces':
                newState.Deuces.score = 0;
                break;
            case 'Threes':
                newState.Aces.score = newState.Aces.score + 1;
                break;
            case 'Fours':
                newState.Aces.score = newState.Aces.score + 1;
                break;
            case 'Fives':
                newState.Aces.score = newState.Aces.score + 1;
                break;
            case 'Sixes':
                newState.Aces.score = newState.Aces.score + 1;
                break;
            case 'Choice':
                newState.Aces.score = newState.Aces.score + 1;
                break;
            case '4 of a Kind':
                newState.Aces.score = newState.Aces.score + 1;
                break;
            case 'Full House':
                newState.Aces.score = newState.Aces.score + 1;
                break;
            case 'S.Straight':
                newState.Aces.score = newState.Aces.score + 1;
                break;
            case 'L.Straight':
                newState.Aces.score = newState.Aces.score + 1;
                break;
            case 'Yacht':
                newState.Aces.score = newState.Aces.score + 1;
                break;
            default:
                ;
        }

        const subTotal = Aces + Deuces + Threes + Fours + Fives + Sixes;
        const Bonus = (subTotal >= 63? 35: null);
        const Total = subTotal + Bonus + Choice + FoK + FullHouse + SStraight + LStraight +Yacht;

        newState.Subtotal = subTotal;
        newState.Bonus = Bonus;
        newState.Total = Total;

        this.setState(newState);
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