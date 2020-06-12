import React, { Component } from 'react';
import AddNews from './manage/addNews/AddNews';
import ViewAllNews from './manage/viewAllNews/ViewAllNews';
import swal from 'sweetalert';

class AdminPanel extends Component {


    constructor(props) {
        super(props);

        if (localStorage.getItem('karate-token') == null) {
            window.location.href = "/admin-login"
        }
    }


    componentDidMount() {

        let token = localStorage.getItem("karate-token");
        this.setState({
            token: token
        })
    }

    render() {
        if (localStorage.getItem('karate-token')) {
            return (
                <div>
                    <AddNews />

                    <div className="container">
                        <ViewAllNews />
                    </div>

                </div>
            )
        } else {
            window.location.href = "/admin-login";
        }



    }
}

export default AdminPanel;