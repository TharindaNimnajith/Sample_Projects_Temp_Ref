import React, { Component } from 'react';
import './socialMediaStyles.css'
import FaceBook from './FaceBook';

class SocialMedia extends Component {




  
    render() {


        if (this.props.match.params.type === 'fb') {
            return (
                <div className="wrapper">

                    <div className="main">
                        <FaceBook />
                    </div>
                </div>

            );
        }

        return(
            <div></div>
        )
    }
}

export default SocialMedia;