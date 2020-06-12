import React, { Component } from 'react';
import { FacebookProvider, Page } from 'react-facebook';

class FaceBook extends Component {
    render() {
        return (
            <div style={{ width: '100%' }} align="center">
                <div style={{ margin: 'auto' }} align="center">
                    <div>
                        {/* <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2Fcategory%2FCommunity%2FAshihara-Kai-Kan-Karate-Sri-Lanka-100900071622483/%2F&tabs=timeline&width=&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2253423928099653" height={1000} style={{ width: '100%' }} scrolling="no" frameBorder={0}  allow="encrypted-media" /> */}

                        <FacebookProvider appId="2253423928099653">
                            <Page
                            
                            width="1000"
                            height="1000"
                            href="https://m.facebook.com/Ashihara-Kai-Kan-Karate-Sri-Lanka-100900071622483/" tabs="timeline" />
                        </FacebookProvider>
                    </div>
                </div>
            </div>

        );
    }
}

export default FaceBook;