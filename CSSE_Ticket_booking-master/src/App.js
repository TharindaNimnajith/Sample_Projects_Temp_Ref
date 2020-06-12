import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Admin from "./layouts/Admin";
import SignUp from "./views/Login/SignUp";
import Login from "./views/Login/Login";
import TableComponent from "./components/Table/TableComponent";
import BookingDetails from "./components/Booking/BookingDetails";
// import {PrivateRouteAdmin, PrivateRouteInspector, PrivateRoutePassenger} from "./variables/PrivateRoutes";
import {PrivateRoutePassenger} from "./variables/PrivateRoutes";
import SeatList from "../src/components/Bus/SeatList";

class App extends React.Component {

    render() {

        return(<div>
            <BrowserRouter>
                <Switch>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/tables" component={TableComponent}/>
                    <Route path="/seatList" component={SeatList}/>
              
                    <Route path="/bookingDetails/:id/:date" component={BookingDetails}/>
                    <Redirect from="/" to="/admin/dashboard"/>

                    {/*<PrivateRouteAdmin path="/admin" component={Admin}/>*/}
                    {/*<PrivateRoutePassenger path="/admin" component={Admin}/>*/}
                    {/*<PrivateRouteInspector path="/admin" component={Admin}/>*/}

                </Switch>
            </BrowserRouter>

        </div>
        );

    }

}

export default App;
