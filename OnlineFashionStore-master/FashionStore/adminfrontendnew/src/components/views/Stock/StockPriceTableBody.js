import React, {Component} from "react";
import './StyleSP/Stock.css'
import {MDBAlert, MDBTableBody} from "mdbreact";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default class StockPriceTableBody extends Component {

    render() {
        const {stockPriceList, noItem,deleteStockPrice} = this.props;

        return (
            <MDBTableBody>
                {
                    noItem ?
                        <tr >
                            <td colSpan="6">
                                <MDBAlert color="danger" className="TextCenter">
                                    No Stock Prices In List
                                </MDBAlert>
                            </td>
                        </tr>
                        :
                        stockPriceList.map(stockP => {
                            return (
                                <tr key={stockP.stockPriceId}>
                                    <td>{stockP.itemColorId.itemColorsId}</td>
                                    <td>{stockP.buyingPrice}</td>
                                    <td>{stockP.sellingPrice}</td>
                                    <td>{stockP.quantity}</td>
                                    <td>{stockP.discount}</td>
                                    <td>{stockP.totalPrice}</td>
                                    <td>
                                        <HighlightOffIcon onClick={()=>deleteStockPrice(stockP.stockPriceId)} className="deleteIconColor" fontSize="large" />
                                    </td>
                                </tr>
                            )
                        })
                }
            </MDBTableBody>
        );
    }
}
