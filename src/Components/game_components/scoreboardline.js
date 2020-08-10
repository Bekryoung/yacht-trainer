import React, { Component } from 'react';

class Scoreboardline extends Component {

    scoreSwitch = (e) => {
        e = this.props.subject.name;

        this.props.scoreSwitch(e);
    }

    scoreDisplay = (e, e2) => {
        if (e === null && this.props.game.dicetrials > 0) {
            return (<span style={{ color: 'gray', opacity: '0.5' }}>{this.scoreDisplayRun(e2)}</span>);
        } else {
            return (e);
        }
    }

    scoreDisplayRun = (e2) => {
        const { dicesvalues } = this.props.game;
        const setDicevalues = Array.from(new Set(dicesvalues));

        let unknownScore = 0;
        let valuesSum = 0;
        dicesvalues.map(value => valuesSum = valuesSum + value);

        switch (e2) {
            case 'Aces':
                dicesvalues.filter(value => value === 1).map(value => unknownScore = unknownScore + value)
                break;
            case 'Deuces':
                dicesvalues.filter(value => value === 2).map(value => unknownScore = unknownScore + value)
                break;
            case 'Threes':
                dicesvalues.filter(value => value === 3).map(value => unknownScore = unknownScore + value)
                break;
            case 'Fours':
                dicesvalues.filter(value => value === 4).map(value => unknownScore = unknownScore + value)
                break;
            case 'Fives':
                dicesvalues.filter(value => value === 5).map(value => unknownScore = unknownScore + value)
                break;
            case 'Sixes':
                dicesvalues.filter(value => value === 6).map(value => unknownScore = unknownScore + value)
                break;
            case 'Choice':
                unknownScore = valuesSum;
                break;
            case '4 of a Kind':
                if (dicesvalues[0] === dicesvalues[3] || dicesvalues[1] === dicesvalues[4]) {
                    unknownScore = valuesSum;
                }
                break;
            case 'Full House':
                if ((dicesvalues[0] === dicesvalues[2] && dicesvalues[3] === dicesvalues[4]) || (dicesvalues[0] === dicesvalues[1] && dicesvalues[2] === dicesvalues[4])) {
                    unknownScore = valuesSum;
                }
                break;
            case 'S.Straight':
                if (setDicevalues[0] === setDicevalues[3] - 3 || setDicevalues[1] === setDicevalues[4] - 3) {
                    unknownScore = 15;
                }
                break;
            case 'L.Straight':
                if (setDicevalues[0] === setDicevalues[4] - 4) {
                    unknownScore = 30;
                }
                break;
            case 'Yacht':
                if (dicesvalues[0] === dicesvalues[4]) {
                    unknownScore = 50;
                }
                break;
            default:
                ;
        }

        return (unknownScore);
    }

    scoreButton = (e) => {
        if (e === null) {
            return (<button onClick={this.scoreSwitch}>score</button>)
        } else {
            return (<button disabled="disabled">done</button>)
        }
    }

    render() {
        const { name, score } = this.props.subject;

        return (
            <tr><td>{name}</td><td>{this.scoreDisplay(score, name)}</td><td>{this.scoreButton(score)}</td></tr>
        );
    }

}

export default Scoreboardline;