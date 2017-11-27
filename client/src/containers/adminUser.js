import React, {Component} from 'react';
import Header from '../components/Header/Header';
import {getUser} from '../utils/api';

const userRole = 'admin';

class adminUserContainer extends Component {
    constructor() {
        super();
        this.state = {email: ''};
    }

    componentDidMount() {
        getUser().then((response) => {
            this.setState({email: response.data.user.email});
        }).catch((err) => console.warn(err));
    }

    render() {
        return (
            <div className = "app">
                <Header userRole={userRole}/>
                <p>user email is {this.state.email}</p>
            </div>
        );
    }
}

export {adminUserContainer};
