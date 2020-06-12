import {checkAuthAdmin, checkAuthInspector, checkAuthUser} from "./CheckAuth";
import React from "react";
import {Route, Redirect} from 'react-router-dom'

export const PrivateRoutePassenger = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        checkAuthUser()
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }}
            />
            )}/>
);

export const PrivateRouteAdmin = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        checkAuthAdmin()
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }}
            />
    )}/>
);

export const PrivateRouteInspector = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        checkAuthInspector()
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }}
            />
    )}/>
);
