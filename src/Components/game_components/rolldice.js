import React, { Component } from 'react';

class Rolldice extends Component {

    rollDice = () => {
        this.props.diceRollUpdate();
    }

    chooseDie = (e) => {
        const callBackId = parseInt(e.target.id);
        this.props.chooseDie(callBackId);
    }


    diceStateReset = () => {
        if (this.props.dicetrials === 0) {
            alert('roll dice first')
        } else {
            this.props.diceRollReset();
        }
    }

    diceDisplay = (e) => {
        return (
            this.props.dices.filter(die => die.choice === e).map(die => <button onClick={this.chooseDie} key={die.id} id={die.id}>{die.value}</button>)
        );
    }

    render() {
        const N = this.props.dicetrials
        const diceRoll = (N < 3 ? <button onClick={this.rollDice}>roll dice!!</button>
            : <button disabled='disabled'>roll dice!!</button>)

        return (
            <div>
                <div>Chosen<div>{this.diceDisplay(true)}</div></div>
                <div>Reroll<div>{this.diceDisplay(false)}</div></div>
                {diceRoll} <button onClick={this.diceStateReset}>Reset</button>
            </div>
        );
    }

}

export default Rolldice;
