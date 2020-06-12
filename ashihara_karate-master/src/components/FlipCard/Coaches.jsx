import React, { Component } from 'react';
import './skillSectionStyles.css'

import FlipCardComp from './FlipCardComp'

class coaches extends Component {


    importAll = (r) => {
        return r.keys().map(r);
    }

    render() {


        const images = this.importAll(require.context('../../../images/coaches', false, /\.(png|jpe?g|svg)$/));

        return (

            <div>


                <div className="container ">

                    <div className="row row-flex">


                        {
                            images.map((ob, key) => {
                                return (


                                    <div style={{ marginTop: '10px' }} key={key} className="col-md-4 col-sm-6 col-xs-12">
                                        <div className="content ">
                                            <FlipCardComp
                                                image={ob}
                                                details="Et id labore labore voluptate adipisicing eu duis aliquip sint ex. Cupidatat dolore esse nostrud consequat culpa incididunt sit consequat exercitation ea. Amet incididunt anim eiusmod aliqua nisi tempor. Consectetur ut enim sint consequat esse eiusmod qui qui minim. Anim ut cillum officia ad ea enim consequat consequat officia ut duis eu ea." />
                                        </div>
                                    </div>



                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );

    }
}

export default coaches;