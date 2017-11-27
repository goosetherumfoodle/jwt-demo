import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import {isAdmin} from './utils/role';
import {isSignedIn} from './utils/authToken';

import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import '../scss/style.scss';
import '../scss/core/_dropdown-menu-right.scss';

import {adminUserContainer} from './containers/adminUser.js';
import {normalUserContainer} from './containers/normalUser.js';
import Login from './views/Login/';

function rollifiedFull() {
    if (isAdmin()) {
        return adminUserContainer;
    }
    return normalUserContainer;
}

function componentOrRedirect(Component, props) {
    if (isSignedIn()) {
        return <Component {...props}/>;
    }
    return <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
    }}/>;
}

function PrivateRoute({ component: Component, ...rest }) {
    return <Route {...rest} render={(props) => componentOrRedirect(Component, props)} />;
}

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/login" name="Login Page" component={Login}/>
            <PrivateRoute path="/" component={rollifiedFull()}/>
        </Switch>
    </HashRouter>
    , document.getElementById('root')
);
