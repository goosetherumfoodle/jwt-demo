import React, {Component} from 'react';
import Header from '../components/Header/Header';
import {getUser} from '../utils/api';

class normalUserContainer extends Component {
    constructor() {
        super();
        this.state = {email: ''};
    }

    componentDidMount() {
        getUser().then((response) => {
            this.setState({email: response.data.user.email});
        }).then((err) => console.warn(err));
    }

    render() {
        return (
            <div className = "app">
                <Header userType={'normal'}/>
                <p>user email is {this.state.email}</p>
            </div>
        );
    }
}

export {normalUserContainer};
