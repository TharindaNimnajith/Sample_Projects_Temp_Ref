import React, {Component} from 'react';
import '../MenuCard/MenuCard.css';
import image3 from "../../Images/paperPlane.png";
import ImageWithText from './ImageWithText';


class ImageWithTextBar extends Component {


    render() {

        const mCard1 = {
            width: '400px',
            image: image3,
            title: "Air Ticketing",
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
        }

        const mCard2 = {
            width: '400px',
            image: image3,
            title: "Cruises",
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
        }
        const mCard3 = {
            width: '400px',
            image: image3,
            title: "Accommodation",
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
        }
        const tableStyles = {
            width: '80%',

        }

        return (
            <div align="center">
                <br/><br/><br/><br/>
                <table border="0" style={tableStyles} cellPadding="20px" align="center">
                    <tbody>
                    <tr>
                        <td><ImageWithText properties={mCard1}/></td>
                        <td><ImageWithText properties={mCard2}/></td>
                        <td><ImageWithText properties={mCard3}/></td>

                    </tr>
                    </tbody>
                </table>
                <br/><br/><br/><br/>


            </div>
        );
    }
}


export default ImageWithTextBar;