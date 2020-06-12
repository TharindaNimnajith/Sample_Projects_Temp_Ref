import React, { Component } from 'react';
import './ParallaxCaraousal.css'




class ParallaxCarousal extends Component {


    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            backgrounds: [

            ]
        }
    }

    nextBackground = () => {
        let newCurrent = this.state.current + 1
        this.setState({
            current: newCurrent % this.state.backgrounds.length
        })
        this.forceUpdate();

    }

    importAll = (r) => {
        return r.keys().map(r);
    }

    componentDidMount() {


        this.setState({
            backgrounds: this.importAll(require.context('../../../images/slideshow', false, /\.(png|jpe?g|svg)$/))
        })

        setInterval(this.nextBackground, 3000);

    }


    render() {        
        return (

            <div
                style={{ backgroundImage: `url('${this.state.backgrounds[this.state.current]}')` }}
                id="firstPage" className="ha-bg-parallax main_banner " data-type="background" data-speed={10}>
                <div className="ha-parallax-body">
                    <div id="carousel-example-generic" className="carousel slide vertical text-right" data-ride="carousel">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
                            <li data-target="#carousel-example-generic" data-slide-to={1} />
                            <li data-target="#carousel-example-generic" data-slide-to={2} />
                        </ol>
                        {/* Wrapper for slides */}
                        <div className="container">
                            <div className="carousel-inner " role="listbox">
                                <div className="item active">
                                    <h3 >REAL FIGHTING</h3>
                                    <h1 >KARATE</h1>
                                </div>
                                <div className="item">
                                   
                                </div>
                                <div className="item">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ParallaxCarousal;