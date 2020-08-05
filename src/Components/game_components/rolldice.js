import React, { Component } from 'react';

class Rolldice extends Component {

    state = {
        dices: [
            { id: 0, value: 0, choice: false },
            { id: 1, value: 0, choice: false },
            { id: 2, value: 0, choice: false },
            { id: 3, value: 0, choice: false },
            { id: 4, value: 0, choice: false }
        ],
        trialNumber: 0
    }


    rollDice = () => {
        const newState = this.state;

        newState.dices.map(die =>
            (die.choice === false
                ? die.value = Math.floor(Math.random() * 6 + 1)
                : die)
        );

        newState.trialNumber = newState.trialNumber + 1;

        this.setState(newState);
    }

    chooseDie = (e) => {

        const callBackId = parseInt(e.target.id);

        const newDicesState = this.state.dices;

        newDicesState.filter(die => die.id === callBackId).map(die =>
            (die.value === 0
                ? alert('roll dice first')
                : die.choice = !die.choice)
        );

        this.setState({ dices: newDicesState });

    }


    diceStateReset = () => {

        this.setState({
            dices: [
                { id: 0, value: 0, choice: false },
                { id: 1, value: 0, choice: false },
                { id: 2, value: 0, choice: false },
                { id: 3, value: 0, choice: false },
                { id: 4, value: 0, choice: false }
            ],
            trialNumber: 0
        });

    }

    test = (e) => {
        return (
            this.state.dices.filter(die => die.choice === e).map(die => <button onClick={this.chooseDie} key={die.id} id={die.id}>{die.value}</button>)
        );
    }

    render() {
        const N = this.state.trialNumber
        const diceRoll = (N < 3 ? <button onClick={this.rollDice}>roll dice!!</button>
            : <button disabled='disabled'>roll dice!!</button>)

        return (
            <div>
                <div>Chosen<div>{this.test(true)}</div></div>
                <div>Reroll<div>{this.test(false)}</div></div>
                {diceRoll} <button onClick={this.diceStateReset}>Reset</button>
            </div>
        );
    }

}

export default Rolldice;
