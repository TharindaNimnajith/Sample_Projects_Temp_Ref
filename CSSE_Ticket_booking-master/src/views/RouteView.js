import React from 'react';
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import {Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import "../Booking/createUserStyles.css"
import axios from "axios";
import BusSeatArrangement from "../Bus/BusSeatArrangement";

class BookingDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            show: false,
            reloaded: false,
            showSeatArrangement : false,
            id:'',
            from : '',
            to : '',
            bus : '',
            day : '',
            arrival : '',
            departure:'',
            price : '',
            route:''

        };
    }

    onReserveSeatActions = () => {
        this.setState({
            showSeatArrangement : true
        })
    }

    componentDidMount() {

        let id = this.props.match.params.id;
        let date = this.props.match.params.date;
        axios({
            method: 'get',
            url: 'http://localhost:8081/api/v1/timeSlots/getById/'+id,

        }).then(res => {

            console.log(res.data);
            this.setState({
                id:res.data.id,
                from : res.data.from,
                to : res.data.to,
                bus : res.data.busRegNumber,
                day : res.data.day,
                arrival : res.data.arrivalTime,
                departure:res.data.leaveTime,
                price : res.data.price,
                route:res.data.routeId
            })


        }).catch(err => {
            console.log('error'.err);
        });

        axios({
            method: 'get',
            url: 'http://localhost:8081/api/v1/travels/get/'+id+'/'+date,

        }).then(res=>{
            console.log(res);
        })
    }

    render() {

        return (
            <div className="div-back" align="center" >
                
            </div>
        );
    }

}

export default BookingDetails;
