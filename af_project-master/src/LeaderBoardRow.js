
import React, { Component } from 'react';
import logo from './logo.svg';
import './LeaderBoard.Sass';

class LeaderBoardRow extends Component {
    constructor() {
        super();

    }

    render() {
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((numbers) =>
            <li>{numbers}</li>
        );
        return (
            <div>
            <table>

                <tr><td>{listItems}</td></tr>


            </table>
            </div>
        )
    }

}

export default LeaderBoardRow;
