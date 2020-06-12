import React from 'react';
import {Table} from 'reactstrap';
import './css/studenthomecss.css'
import StudentGrading from "../lakshitha/StudentGrading";

class StudentSubmissionList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            page: '',
            file:null
        }
    }

    handleDownload = (filename) => {
        this.props.handleDownload(filename)
    };

    renderDefaultPage=()=>{
        this.setState({
            page: '',
        })
    }

    renderPage = (page,file) => {
        if (page === 'ASSIGNMENT_GRADING') {
            this.setState({
                page: 'ASSIGNMENT_GRADING',
                file:file,

            })

        }
    };

    formatDate(date) {
        let monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        let day = date.getDate();
        let monthIndex = date.getMonth();
        let year = date.getFullYear();
        //let hours=date.getHours();
        //let minutes=date.getMinutes();

        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }

    render() {
        const PageContent = () => {

            switch (this.state.page) {
                case 'ASSIGNMENT_GRADING':
                    return <StudentGrading renderDefaultPage={this.renderDefaultPage}
                            file={this.state.file}
                    />;
                default:
                    return <div className="container">
                        <div className={"card"}>
                            <div className="card-header" align="center">
                                <b>Ungraded file Submissions made by students</b>
                            </div>
                            <div className="card-body">
                                <Table hover>
                                    <thead>
                                    <tr style={{align: "center"}}>
                                        <th>File</th>
                                        <th>Submitted By</th>
                                        <th>Submitted Date</th>
                                        <th>Assignment Name</th>
                                        <th>Module Name</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.props.fileList.map((file, index) => {
                                            const filename = file.file.split('\\').pop();
                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <button type="button" className="btn btn-link"
                                                                onClick={(e) => this.handleDownload(filename)}
                                                        >{filename}</button>
                                                    </td>
                                                    <td>
                                                        {file.submittedBy}
                                                    </td>
                                                    <td>
                                                        {this.formatDate(new Date(file.submittedDate))}
                                                    </td>
                                                    <td>
                                                        {file.assignmentName}
                                                    </td>
                                                    <td>
                                                        {file.moduleName}
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-success"
                                                                onClick={(e) => this.renderPage('ASSIGNMENT_GRADING', file)}>Grade
                                                            Submission
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-danger"
                                                                onClick={(e) => this.props.handleDelete(this.props.fileList, file)}>Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                    </tbody>
                                </Table>
                                <button className="btn btn-primary" onClick={(e) => this.props.renderDefaultPage()}>Back
                                </button>
                            </div>
                        </div>
                    </div>

            }
        };
        return (
            <div>
                {PageContent()}
            </div>
        );
    }


}

export default StudentSubmissionList;
