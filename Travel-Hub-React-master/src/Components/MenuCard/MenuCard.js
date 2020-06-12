import React, {Component} from 'react';
import './MenuCard.css'


class MenuCard extends Component {

    render() {

        const {width, image, text} = this.props.properties
        return (


                <div className="w3-card-4" style={{width: width}}>
                    <img className="menuCardContainer" src={image} alt="Alps" style={{width: '100%'}}/>
                    <div className="w3-container w3-center">
                        <h3 style={{color: 'coral'}}>{text}</h3>
                    </div>
                </div>


        )

    }
}


export default MenuCard;