import React, {Component} from 'react';
import axios from "axios";
import MaterialTable from "material-table";
import Select from "react-select";
import DatePicker from "react-date-picker";


class Tasks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskObject: null,
            date: new Date(),
            inspectorId: '',
            busStand: '',
            zone: '',
            checkList: []
        }

    }

    componentDidMount() {
        this.getTasks();
    }


    onChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    getTasks = () => {
        axios({
            method: 'get',
            url: 'http://localhost:8081/api/v1/tasks',


        }).then(res => {
            console.log("dsdsd")
            console.log(res)
            this.setState({
                taskObject: res.data
            })
            console.log(res);

        }).catch(err => {


        })
    };
    onFromChange = (selectedValue) => {
        this.setState({
            from: selectedValue.label,
        });

        this.getTasks();
    };

    onChangeDatePicker = date => {
        this.setState({date})
        console.log(date);

        this.getTasks();
    }

    onSubmitHandler = e => {
        e.preventDefault();

        this.setState({
            isLoading: true
        });
        axios({
            method: 'post',
            url: 'http://localhost:8081/api/v1/tasks/save',
            data:
                {
                    "date": this.state.date,
                    "busStand": this.state.busStand,
                    "zone": this.state.zone,
                    "inspectorId": this.state.inspectorId,
                    "checkList": [],
                }
        }).then(res => {

            console.log(res);
            localStorage.setItem('csse_we_32', res.data.token);
            window.location.replace("/admin/addTasks");
        }).catch(err => {
            //alert('Invalid username or password')
        }).finally(x => {

            //window.location.replace('/user')

        });
    };

    render() {

        let historyTableColumns = [
            {title: 'Date', field: 'date'},
            {title: 'Bus Stand', field: 'busStand'},
            {title: 'Zone', field: 'zone'},
            {title: 'Inspector', field: 'inspectorId'},
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
                        <td style={{width: '40%'}}><Select onChange={this.onFromChange} options={scaryAnimals}
                                                           styles={selectStyles} placeholder={"Select From location"}/>
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
                    title="Task Table"
                    columns={historyTableColumns}
                    data={this.state.taskObject == null ? historyTableData : this.state.taskObject}
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
                                name="busStand"
                                placeholder="Bus Stand"
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
                                name="zone"
                                placeholder="Zone"
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
                                name="inspectorId"
                                placeholder="Inspector Id"
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

export default Tasks;