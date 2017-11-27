import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import {isAgent} from './utils/role';
import {signedIn} from './utils/token';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss';
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss';

// Containers
import AgentFull from './containers/AgentFull/AgentFull.js';
import AgencyFull from './containers/AgencyFull/AgencyFull.js';

//Views
import Login from './views/Login/';

function rollifiedFull() {
    if (isAgent()) {
        return AgentFull;
    }
    return AgencyFull;
}

function componentOrRedirect(Component, props) {
    if (signedIn()) {
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
