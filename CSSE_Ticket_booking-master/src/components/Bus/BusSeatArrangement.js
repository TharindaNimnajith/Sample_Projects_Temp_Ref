import React from 'react';
import DrawGrid from "./DrawGrid";
import './BusStyles.css';


class BusSeatArrangement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seat: [
                '1','2','3',
                '4','5','6',
                '7','8','9','10','11','12','13','14','15','16'
            ],
            seatAvailable: [
                '1','2','3',
                '4','6',
                '7','8','9','10','11','12','13','14','15','16'
            ],
            seatReserved: ['5']
        }
    }

    onClickData(seat) {
        if(this.state.seatReserved.indexOf(seat) > -1 ) {
            this.setState({
                seatAvailable: this.state.seatAvailable.concat(seat),
                seatReserved: this.state.seatReserved.filter(res => res !== seat)
            })
        } else {
            this.setState({
                seatReserved: this.state.seatReserved.concat(seat),
                seatAvailable: this.state.seatAvailable.filter(res => res !== seat)
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Seat Reservation System</h1>
                <DrawGrid
                    seat = { this.state.seat }
                    available = { this.state.seatAvailable }
                    reserved = { this.state.seatReserved }
                    onClickData = { this.onClickData.bind(this) }
                />
            </div>
        )
    }
}
export default BusSeatArrangement;
