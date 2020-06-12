
import React, { Component } from 'react';
import logo from './logo.svg';
import './LeaderBoard.css';
import 'bootstrap/dist/css/bootstrap.css';

class LeaderBoard extends Component {
    constructor() {
        super();

    }
    render() {
        const numbers = [{id:"1",name:"gihan",points:"100"},{id:"2",name:"sanjaya",points:"50"},{id:"3",name:"nishitha",points:"50"},{id:"3",name:"lakshitha",points:"50"}];
        const listItems = numbers.map((numbers) =>
           <tr> <td>{numbers.id}</td><td>{numbers.name}</td><td>{numbers.points}</td></tr>

               );
        return (
            <div style={style.base}>
                <p><b>Top Traveller</b></p>
                <table class="table table-dark">
                    <tr><th>Rank</th><th>Name</th><th>Points</th></tr>
                    {listItems}
                </table>
            </div>
        )
    }

}
var style = {
    base:{

        height:"50%",
        width: "10%",


    },

};
export default LeaderBoard;
