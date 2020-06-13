import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import {Item} from "./views/Item/Item";
import BrandCategory from "./views/Item/BrandCategory";
import ItemColor from "./views/Item/ItemColor";
import {NewArrivals} from "./views/Item/NewArrivals";
import UserDetails from "./views/UserManagement/UserManage";
import UserAnalysis from "./views/Dashboard/UserAnalysis";
import SupplierDetails from "./views/Stock/SupplierDetails";
import StockDetails from "./views/Stock/StockDetails";

import Logout from "./views/LogOut/Logout";
import AdminManage from "./views/UserManagement/AdminAdd";
import OrderTable from "./views/Order/OrderTable";
import SupplierTable from "./views/Stock/SupplierTable";
import ItemTable from "./views/Stock/StocksTableBody";
import {Discount} from "./views/Item/Discount";


class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component={UserAnalysis}/>
                <Route exact path='/dashboard' component={UserAnalysis}/>
                <Route path='/404' component={NotFoundPage}/>
                <Route exact path='/item' component={Item}/>
                <Route exact path='/item/brandcategory' component={BrandCategory}/>
                <Route exact path='/item/itemcolor' component={ItemColor}/>
                <Route exact path='/item/newarraivalitems' component={NewArrivals}/>
                <Route exact path='/usermanage' component={UserDetails}/>
                <Route exact path='/supplier' component={SupplierDetails}/>
                <Route exact path='/stock' component={StockDetails}/>
                <Route exact path='/order' component={OrderTable}/>
                <Route exact path='/logout' component={Logout}/>
                <Route exact path='/usermanage/adminManage' component={AdminManage}/>
                <Route exact path='/supplier/supplieranalysis' component={SupplierTable}/>
                <Route exact path='/supplier/suppliermanage' component={SupplierDetails}/>
                <Route exact path='/stock/stockmanage' component={StockDetails}/>
                <Route exact path='/stock/stockanalysis' component={ItemTable}/>
                <Route exact path='/item/discount' component={Discount}/>
            </Switch>
        );
    }
}

export default Routes;
