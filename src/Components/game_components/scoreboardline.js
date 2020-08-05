import React, { Component } from 'react';

class Scoreboardline extends Component {

    scoreSwitch = (e) => {
        e = this.props.subject.name;
        
        this.props.scoreSwitch(e);
    }

    render() {
        const { score } = this.props.subject;
        const { name } = this.props.subject;
        var scoreButton

        if (score === null) {
            scoreButton = <button onClick={this.scoreSwitch}>score</button>
        } else {
            scoreButton = <button disabled="disabled">done</button>
        }

        return (
            <tr><td>{name}</td><td>{score}</td><td>{scoreButton}</td></tr>
        );
    }

}

export default Scoreboardline;