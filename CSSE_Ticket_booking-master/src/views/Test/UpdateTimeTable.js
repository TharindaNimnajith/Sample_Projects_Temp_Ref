import React from 'react';
import MaterialTable from "material-table";
import Select from 'react-select';
import axios from "axios";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

class UpdateTimeTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            day: 'Sunday',
            from: 'homagama',
            travelObj: null,
            isLoading: false,
            leaveTime: '',
            arrivalTime: '',
            formFrom: '',
            formTo: '',
            busNumber: '',
            price: '',
            routeID: ''
        }
    }

    componentDidMount() {
        this.getTimeTable();
    }

    componentWillMount() {
        this.getTimeTable();
    }

    getTimeTable = () => {

        axios({
            method: 'get',
            url: 'http://localhost:8081/api/v1/timeSlots/getByFromAndDay/' + this.state.from + '/' + this.state.day,


        }).then(res => {
            this.setState({
                travelObj: res.data
            })
            console.log(res);

        }).catch(err => {


        })
    };

    onSubmitHandler = e => {
        e.preventDefault();

        this.setState({
            isLoading: true
        });


        axios({
            method: 'post',
            url: 'http://localhost:8081/api/v1/timeSlots/save',
            data:
                {
                    "from": this.state.formFrom,
                    "day": this.state.day,
                    "leaveTime": this.state.leaveTime,
                    "arrivalTime": this.state.arrivalTime,
                    "routeId": this.state.routeId,
                    "to": this.state.formTo,
                    "travelId": "123",
                    "busRegNumber": this.state.busNumber,
                    "price": this.state.price,
                }

        }).then(res => {

            console.log(res);
            localStorage.setItem('csse_we_32', res.data.token);
            window.location.replace("/admin/updateTimeTable");
        }).catch(err => {
            alert('Invalid username or password')
        }).finally(x => {

            window.location.replace('/user')

        });
    };

    onFromChange = (selectedValue) => {
        this.setState({
            from: selectedValue.label
        });

        this.getTimeTable();
    };
    onDayChange = (selectedValue) => {
        this.setState({
            day: selectedValue.label
        });

        this.getTimeTable();
    };

    onChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    testClick = (val) => {
        window.location.replace('http://localhost:3000/bookingDetails/' + val)
    };

    render() {

        let historyTableColumns = [
            {title: 'Day', field: 'day'},
            {title: 'Leave Time', field: 'leaveTime'},
            {title: 'Arrival Time', field: 'arrivalTime'},
            {title: 'From', field: 'from'},
            {title: 'To', field: 'to'},
            {title: 'Bus Number', field: 'busRegNumber'},
            {title: 'Price', field: 'price', type: 'numeric'},
            {
                title: 'Buttons',
                field: 'btn',
                render: rowData => <input type="button" value={'Book Now'} onClick={() => this.testClick(rowData.id)}/>
            }
        ];
        let historyTableData = [
            {date: '2019-09-31', time: '11.00 AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price: 'Rs.452.30'},

        ];

        const scaryAnimals = [
            {label: "homagama", value: 1},
            {label: "maharagama", value: 2},
        ];

        const datesOfWeek = [
            {label: "Sunday", value: "Sunday"},
            {label: "Monday", value: "Monday"},
            {label: "Tuesday", value: "Tuesday"},
            {label: "Wednesday", value: "Wednesday"},
            {label: "Friday", value: "Friday"},
            {label: "Saturday", value: "Saturday"},
        ];
        const selectStyles = {
            width: '50%',

        };

        return (
            <div>
                {this.state.isLoading && <LoadingScreen/>}
                <table style={{width: '50%', zIndex: '100'}} cellPadding="50px">
                    <tbody>
                    <tr>
                        <td style={{width: '40%'}}><Select onChange={this.onFromChange} options={scaryAnimals}
                                                           styles={selectStyles} placeholder={"Select From location"}/>
                        </td>
                        <td style={{width: '10%'}}/>
                        <td style={{width: '40%'}}><Select onChange={this.onDayChange} options={datesOfWeek}
                                                           styles={selectStyles} placeholder={"Select Date"}/></td>
                    </tr>
                    </tbody>
                </table>

                <br/>
                <MaterialTable
                    title="Travel Time table"
                    columns={historyTableColumns}
                    data={this.state.travelObj == null ? historyTableData : this.state.travelObj}
                    options={{
                        headerStyle: {
                            backgroundColor: '#01579b',
                            color: '#FFF',
                            fontSize: '120%',
                            zIndex: 0
                        },
                        rowStyle: {
                            color: '#FFF',
                            fontSize: '50px'
                        },
                        columnStyle: {
                            fontSize: '50px'
                        }
                    }}
                />

                <form onSubmit={this.onSubmitHandler}>
                    <h2>Add New Entry</h2>
                    <hr/>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"/><i className="fa fa-check"/></span>
                            <input
                                type="text"
                                className="form-control"
                                name="day"
                                placeholder="Day"
                                required="required"
                                onChange={this.onChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"/><i className="fa fa-check"/></span>
                            <input
                                type="text"
                                className="form-control"
                                name="arrivalTime"
                                placeholder="ArrivalTime"
                                required="required"
                                onChange={this.onChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"/><i className="fa fa-check"/></span>
                            <input
                                type="text"
                                className="form-control"
                                name="leaveTime"
                                placeholder="leaveTime"
                                required="required"
                                onChange={this.onChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"/><i className="fa fa-check"/></span>
                            <input
                                type="text"
                                className="form-control"
                                name="formFrom"
                                placeholder="From"
                                required="required"
                                onChange={this.onChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"/><i className="fa fa-check"/></span>
                            <input
                                type="text"
                                className="form-control"
                                name="formTo"
                                placeholder="To"
                                required="required"
                                onChange={this.onChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"/><i className="fa fa-check"/></span>
                            <input
                                type="text"
                                className="form-control"
                                name="busNumber"
                                placeholder="Bus Number"
                                required="required"
                                onChange={this.onChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"/><i className="fa fa-check"/></span>
                            <input
                                type="text"
                                className="form-control"
                                name="price"
                                placeholder="Price"
                                required="required"
                                onChange={this.onChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"/><i className="fa fa-check"/></span>
                            <input
                                type="text"
                                className="form-control"
                                name="routeID"
                                placeholder="Route Id"
                                required="required"
                                onChange={this.onChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-lg">
                            Add Entry
                        </button>
                    </div>
                </form>

            </div>
        )
    }

}

export default UpdateTimeTable;