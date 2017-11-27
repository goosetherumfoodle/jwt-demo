import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon, Modal} from 'reactstrap';
import {postAuthToken} from '../../utils/api';
import {setToken} from '../../utils/authToken';
import {setRole} from '../../utils/role';

class Login extends Component {
    constructor() {
        super();
        this.state = {email: '', password: ''};
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLoginClick(history) {
        return () => {
          postAuthToken(this.state.email, this.state.password)
                .then((response) => {
                  console.log(`create jwt response: ${JSON.stringify(response)}`)
                    setToken(response.data.jwt);
                    setRole(response.data.userRole);
                    history.push('/');
                }).err((err) => console.warn(err));
        };
    }

    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <CardGroup className="mb-0">
                                <Card className="p-4">
                                    <CardBody>
                                        <Modal />
                                        <h1>Login</h1>
                                        <p className="text-muted">Sign In to your account</p>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                                            <Input type="text"
                                                   placeholder="email@example.com"
                                                   value={this.state.email}
                                                   onChange={(e) => this.setState({email: e.target.value})}/>
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                                            <Input type="password"
                                                   placeholder="**************"
                                                   value={this.state.password}
                                                   onChange={(e) => this.setState({password: e.target.value})} />
                                        </InputGroup>
                                        <Row>
                                            <Col xs="6">
                                                <Button color="primary" onClick={this.handleLoginClick(this.props.history)} className="px-4">Login</Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                                    <CardBody className="text-center">
                                        <div>
                                            <h2>JWT token auth demo</h2>
                                            <p>Click Login to set JWT token<br></br></p>
                                            <p>creds for normal account:<br/>email: &quot;user@example.com&quot;<br/>pass: &quot;userpass&quot;</p>
                                            <p>creds for admin account:<br/>email: &quot;admin@example.com&quot;<br/>pass: &quot;adminpass&quot;</p>
                                            <p>(when switching between account types you&apos;ll need to the page to see changes)</p>
                                        </div>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Login;
