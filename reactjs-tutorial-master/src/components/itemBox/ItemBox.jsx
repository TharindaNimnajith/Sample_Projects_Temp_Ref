import React, { Component } from 'react';
import './ItemBoxStyles.css'
import ItemImage from './ItemImage';



class ItemBox extends Component {
    render() {
        return (
            <div className="box" align="center">
                <h2>{this.props.title}</h2>
                <ItemImage image={this.props.image} />
                <h3 style={{ color: 'red', fontStyle: 'bold' }}>{`Rs.${this.props.price}`} </h3>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}

export default ItemBox;