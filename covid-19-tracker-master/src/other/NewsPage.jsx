import React, { Component } from 'react';
import TwitterContainer from './TwitterContainer'
import {
    Paper
} from '@material-ui/core';
// import './NewsStyles.css';

class NewsPage extends Component {

    constructor(props) {
        super(props);

    }



    render() {



        return (
            <div>







                <div className=" news-container small-box bg-light" style={{ padding: '20px' }}>
                    <Paper style={{ marginTop: 20 }} />
                    <h4 className="text-md-center" > Local News </h4>
                    <Paper style={{ marginTop: 20 }} />
                    <Paper style={{ marginTop: 20 }} />
                    <div className="row">
                        <div className="col-xs-12 ">
                            <nav>
                                <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Health Promotion Bureau</a>
                                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Azzam Ameen</a>
                                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Open MIC 24X7</a>

                                </div>
                            </nav>
                            <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <TwitterContainer source="HPBSriLanka" />
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <TwitterContainer source="AzzamAmeen" />
                                </div>
                                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <TwitterContainer source="openmic24x7" />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}

export default NewsPage;