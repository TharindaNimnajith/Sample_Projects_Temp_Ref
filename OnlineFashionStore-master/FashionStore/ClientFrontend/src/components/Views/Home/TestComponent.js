import React, {Component} from 'react';
import {MDBBtn, MDBCol, MDBContainer, MDBJumbotron, MDBRow} from "mdbreact";

export class TestComponent extends Component{

    render() {
        return (


            <div >
                <br/>
                <br/>
                <br/>
                <br/>
                    <div className="testColor">

                        <div className="row ">
                            <div className="col-sm-1">
                            </div>
                            <div className="col-sm-10 testRowColor">
                                One of three columns
                            </div>
                            <div className="col-sm-1">

                            </div>
                        </div>
                    </div>

            </div>
        );
    }
}
