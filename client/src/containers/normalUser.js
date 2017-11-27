import React, {Component} from 'react';
import Header from '../components/Header/Header';
import {getUser} from '../utils/api';

const userRole = 'normal';

class normalUserContainer extends Component {
    constructor() {
        super();
        this.state = {email: ''};
    }

    componentDidMount() {
        getUser().then((response) => {
          console.log(`get users response: ${JSON.stringify(response)}`);
            this.setState({email: response.data.email});
        }).then((err) => console.warn(err));
    }

    render() {
        return (
            <div className = "app">
                <Header userRole={userRole} />
                <div className='app-body'>user email is {this.state.email}</div>
            </div>
        );
    }
}

export {normalUserContainer};
