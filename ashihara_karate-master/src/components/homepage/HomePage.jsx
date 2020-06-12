import React, { Component } from 'react';
import ParallaxContainer from './ParallaxContainer/ParallaxContainer';
import Introduction from './content/Introduction';
import History from './content/History';

import GroupImage from '../../images/group.JPG';
import nanchak from '../../images/Other/abc.jpg';
import ParallaxCarousal from './carousal/ParallaxCarousal';
import ContactUs from '../contactUs/ContactUs';
import SriLankanHistory from './content/SriLankanHistory';
import TopNews from '../topNews/TopNews';

class HomePage extends Component {
    render() {
        return (
            <div>
                <ParallaxContainer img={GroupImage} showInner={true} />
                <ParallaxCarousal />
                <div className="container">
                    <TopNews />
                    <Introduction />
                    <History />
                    <SriLankanHistory />

                </div>
                <ParallaxContainer img={nanchak} showInner={false} />
                <div style={{ margin: '20px' }}></div>

               

                <div className="container">
                    <div className="card-deck">
                        <div className="card">
                            <iframe height="250"
                                src="https://www.youtube.com/embed/Zr0lx6YCVKw?controls=0">
                            </iframe>
                        </div>
                        <div className="card">
                            <iframe height="250"
                                src="https://www.youtube.com/embed/KF9kvTfYmao?controls=0">
                            </iframe>
                        </div>
                        <div className="card">
                            <iframe height="250"
                                src="https://www.youtube.com/embed/8MPWB3tHPEQ?controls=0">
                            </iframe>
                        </div>
                    </div>
                </div>


                <div style={{ margin: '20px' }}></div>
                <br /><br />
                <ContactUs />



            </div>
        );
    }
}

export default HomePage;