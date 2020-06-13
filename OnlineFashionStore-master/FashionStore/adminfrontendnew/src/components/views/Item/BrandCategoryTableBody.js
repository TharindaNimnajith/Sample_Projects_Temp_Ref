import React, {Component} from "react";
import './Style/Item.css'
import {MDBAlert, MDBTableBody} from "mdbreact";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default class BrandCategoryTableBody extends Component {

    render() {
        const {brandCategoryListList, noItem,deleteBrandCategory} = this.props;
        return (
            <MDBTableBody>
                {
                    noItem ?
                        <tr >
                            <td colSpan="2">
                                <MDBAlert color="danger" >
                                    No Items In List
                                </MDBAlert>
                            </td>
                        </tr>
                        :
                        brandCategoryListList.map(item => {
                            return (
                                <tr key={item.brandCategoryId}>
                                    <td>{item.brand.brandName}</td>
                                    <td>{item.category.categoryName}</td>
                                    <td>
                                        <HighlightOffIcon onClick={()=>deleteBrandCategory(item.brandCategoryId)} className="deleteIconColor" fontSize="large" />
                                    </td>
                                </tr>
                            )
                        })
                }
            </MDBTableBody>
        );
    }
}
