import React from 'react';
import MaterialTable from "material-table";
import Select from 'react-select';
import axios from "axios";
import DatePicker from 'react-date-picker';

class TimeTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            day: 'Sunday',
            from: 'homagama',
            travelObj: null,
            date: new Date(),
            busStand:'',
            zone:'',
            inspectorId:'',
            CheckList:[]
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
            url: 'http://localhost:8081/api/v1/timeSlots/getByFromAndDate/' + this.state.from + '/' + this.state.date,


        }).then(res => {
            this.setState({
                travelObj: res.data
            })
            console.log(res);

        }).catch(err => {


        })
    };

    onFromChange = (selectedValue) => {
        this.setState({
            from: selectedValue.label,
        });

        this.getTimeTable();
    };
    onDayChange = (selectedValue) => {
        this.setState({
            day: selectedValue.label
        });

        this.getTimeTable();
    };


    onChangeDatePicker = date => {
        this.setState({date})
        console.log(date)
        this.getTimeTable()
    }

    testClick = (id,date) => {
        window.location.replace('http://localhost:3000/bookingDetails/' + id+'/'+date)
    };

    render() {

        let historyTableColumns = [
            {title: 'Date', field: 'day'},
            {title: 'Leave Time', field: 'leaveTime'},
            {title: 'Arrival Time', field: 'arrivalTime'},
            {title: 'From', field: 'from'},
            {title: 'To', field: 'to'},
            {title: 'Bus Number', field: 'busRegNumber'},
            {title: 'Price', field: 'price', type: 'numeric'},
            {
                title: 'Buttons',
                field: 'btn',
                render: rowData => <input type="button" value={'Book Now'} onClick={() => this.testClick(rowData.id,this.state.date)}/>
            }
        ];
        let historyTableData = [
            {date: '2019-09-31', time: '11.00 AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price: 'Rs.452.30'},

        ];

        const scaryAnimals = [
            {label: "homagama", value: 1},
            {label: "maharagama", value: 2},
        ];

        const selectStyles = {
            width: '50%',

        };

        return (
            <div>
                <table style={{width: '50%', zIndex: '100'}} cellPadding="50px">
                    <tbody>
                    <tr>
                        <td style={{width: '40%'}}><Select onChange={this.onFromChange} options={scaryAnimals} styles={selectStyles} placeholder={"Select From location"}/>
                        </td>
                        <td style={{width: '10%'}}/>
                        <td style={{width: '40%'}}>
                            <DatePicker
                                onChange={this.onChangeDatePicker}
                                value={this.state.date}
                            /></td>
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


            </div>
        )
    }

}

export default TimeTable;
