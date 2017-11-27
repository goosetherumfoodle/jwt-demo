import React, {Component} from 'react';
import {
  Button,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';

class Announcements extends Component {
  
  componentDidMount() {
      localStorage.setItem("announcement-read", true);
    };

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
                Contest Announcements
              </CardHeader>
              <CardBody>
                <p>Here is where the latest contest announcements will go</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="12">
            <Card>
              <CardHeader>
                Important GS National Insurance News
              </CardHeader>
              <CardBody>
                <h3>MediConnect Emerges as Consumer-Facing Brand for GS National Insurance</h3>
<h5>Posted on August 23, 2017 by GSNIadmin</h5>
<p>Pittsburgh, PA – August 22, 2016 – GS National Insurance is pleased to announce that it has rebranded its consumer-facing division to become MediConnect. MediConnect acts as a healthcare concierge to match consumers with individualized health insurance plans.</p>
<p>With the rapidly-increasing baby-boomer population and growing need for health insurance, MediConnect provides consumers with the means to manage their healthcare planning. The new brand and menu of services include a dedicated Client Services Department to facilitate communication, a focus on consumer healthcare education and access to detail-oriented insurance advisors.</p>
<p>As part of the organization’s brand strategy, MediConnect has developed a unique focus. While GS National Insurance markets to and consults with insurance agents, MediConnect is 100% consumer-focused, delivering options and products straight to the people who need them most.</p>
<p>Of the new consumer-facing brand, MediConnect President, Brian Breisinger said, “After witnessing a deficiency in the health insurance market for years, we are pleased to launch a fully-independent advisory firm for the region. Now, customers will be provided an unbiased approach to assist in fulfilling their health insurance needs. MediConnect’s experienced representatives are contracted with all the major carriers in its servicing area to offer independent advice.”</p>
<p>As part of its branding efforts, MediConnect will launch a new website in the coming months.</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Announcements;
