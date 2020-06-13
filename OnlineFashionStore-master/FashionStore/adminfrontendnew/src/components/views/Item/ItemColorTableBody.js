import React, {Component} from "react";
import './Style/Item.css'
import {MDBAlert, MDBBtn, MDBCard, MDBCardImage, MDBCol, MDBTableBody} from "mdbreact";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default class ItemColorTableBody extends Component {

    render() {
        const {itemColorArrayList, noItem ,deleteItemColor} = this.props;
        return (
            <MDBTableBody>
                {
                    noItem ?
                        <tr >
                            <td colSpan="4">
                                <MDBAlert color="danger" >
                                    No Items In List
                                </MDBAlert>
                            </td>
                        </tr>
                        :
                        itemColorArrayList.map(item => {

                            return (
                                <tr key={item.itemColorId}>
                                    <td>{item.itemCode}</td>
                                    <td>{item.itemSize.sizeName}</td>
                                    <td  >
                                        <label style={{backgroundColor: item.colorCode,width :100,height :50}}></label>
                                         </td>
                                    <td>
                                        <MDBCol style={{ maxWidth: "14rem" }}>
                                            <MDBCard>
                                                <MDBCardImage className="img-fluid " src={item.imageUrl}
                                                              waves />
                                            </MDBCard>
                                        </MDBCol>

                                    </td>
                                    <td>
                                        <HighlightOffIcon onClick={()=>deleteItemColor(item.itemColorId)} className="deleteIconColor" fontSize="large" />
                                    </td>
                                </tr>
                            )
                        })

                }
            </MDBTableBody>
        );
    }
}
