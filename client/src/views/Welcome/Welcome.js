import React, {Component} from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
} from 'reactstrap';

class Welcome extends Component {

  render() {
    return (
      <div className="animated fadeIn">
       <Row>
            <Col xs="12" sm="12" md="12" className="page-buttons">
            <Button color="primary" className="button-style" href="#/dashboard">My Current Contest Dashboard</Button>
            <Button color="primary" className="button-style" href="#/rewards">My Lifetime Rewards</Button>
             </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="12">
            <Card>
              <CardHeader>
                Welcome to My GS
              </CardHeader>
              <CardBody>
                <p>Thank you for being partners with GS National Insurance. We would like to take a moment to
                introduce everyone to My GS! This is where the description of the app and of the contests will go.
                 Please watch the video below.</p>
                <iframe
                  src="https://www.youtube.com/embed/ynIgqCaGQJc"
                  allowFullScreen></iframe>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Welcome;
