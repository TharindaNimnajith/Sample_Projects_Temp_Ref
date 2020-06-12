import React from 'react';
import MaterialTable from 'material-table';

class HistoryTable extends React.Component {


    componentWillMount() {
        this.setState({
            columns : this.props.columns,
            data : this.props.data
        })
    }

    componentDidMount() {
        this.setState({
            columns : this.props.columns,
            data : this.props.data
        })


    }

    render() {
    return(
        <MaterialTable
            title="Travel History"
            columns={this.state.columns}
            data={this.state.data}
            // editable={{
            //     onRowAdd: newData =>
            //         new Promise(resolve => {
            //             setTimeout(() => {
            //                 resolve();
            //                 const data = [...state.data];
            //                 data.push(newData);
            //                 setState({ ...state, data });
            //             }, 600);
            //         }),
            //     onRowUpdate: (newData, oldData) =>
            //         new Promise(resolve => {
            //             setTimeout(() => {
            //                 resolve();
            //                 const data = [...state.data];
            //                 data[data.indexOf(oldData)] = newData;
            //                 setState({ ...state, data });
            //             }, 600);
            //         }),
            //     onRowDelete: oldData =>
            //         new Promise(resolve => {
            //             setTimeout(() => {
            //                 resolve();
            //                 const data = [...state.data];
            //                 data.splice(data.indexOf(oldData), 1);
            //                 setState({ ...state, data });
            //             }, 600);
            //         }),
            // }}
        />
    );

    }

}

export default HistoryTable;
