import React from 'react';
import AvailableList from "./AvailableList";
import ReservedList from "./ReservedList";
import "./BusStyles.css";

class DrawGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tdObjects: []
        }
    }

    componentWillMount() {
        let rawObject = [];
        let allRaws = [];
        this.props.seat.forEach((seat, key) => {

            rawObject.push(seat);

            if ((key + 1) % 4 === 0 && key !== 0) {


                allRaws.push(rawObject);
                rawObject = [];

            }
        });
        this.setState({tdObjects: allRaws});

    }


    render() {


        return (

                <div className="table-responsive" >

                    <table className="grid">
                        <tbody >
                        {this.state.tdObjects.map((raw) =>
                            <tr key={raw}>
                                <td  className={this.props.reserved.indexOf(raw[0]) > -1 ? 'reserved' : 'available'}
                                    key={raw[0]} onClick={e => this.onClickSeat(raw[0])}>{raw[0]}</td>
                                <td  className={this.props.reserved.indexOf(raw[1]) > -1 ? 'reserved' : 'available'}
                                    key={raw[1]} onClick={e => this.onClickSeat(raw[1])}>{raw[1]}</td>
                                <td style={{border:'none'}} key={raw[3] + 1000} />
                                <td  className={this.props.reserved.indexOf(raw[2]) > -1 ? 'reserved' : 'available'}
                                    key={raw[2]} onClick={e => this.onClickSeat(raw[2])}>{raw[2]}</td>
                                <td  className={this.props.reserved.indexOf(raw[3]) > -1 ? 'reserved' : 'available'}
                                    key={raw[3]} onClick={e => this.onClickSeat(raw[3])}>{raw[3]}</td>
                            </tr>)
                        }

                        </tbody>
                    </table>

                    <AvailableList available={this.props.available}/>
                    <ReservedList reserved={this.props.reserved}/>
                </div>

        )
    }

    onClickSeat = (seat) => {
        this.props.onClickData(seat);
    }
}


export default DrawGrid;
