import React, {Component} from 'react';
import Header from '../components/Header/Header';
import {getUser} from '../utils/api';
import {Row, Card, CardBody} from 'reactstrap';

const userRole = 'admin';

class adminUserContainer extends Component {
    constructor() {
        super();
        this.state = {email: '...'};
    }

    componentDidMount() {
        getUser().then((response) => {
            this.setState({email: response.data.email});
        }).catch((err) => console.warn(err));
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

export {adminUserContainer};
