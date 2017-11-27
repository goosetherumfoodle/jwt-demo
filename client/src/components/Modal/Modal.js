import React, {Component} from "react";
import {Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBlock} from "reactstrap";


class Modals extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      large: false,
      small: false,
      primary: false,
      success: false,
      warning: false,
      danger: false,
      info: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleLarge = this.toggleLarge.bind(this);
    this.toggleSmall = this.toggleSmall.bind(this);
    this.togglePrimary = this.togglePrimary.bind(this);
    this.toggleSuccess = this.toggleSuccess.bind(this);
    this.toggleWarning = this.toggleWarning.bind(this);
    this.toggleDanger = this.toggleDanger.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleLarge() {
    this.setState({
      large: !this.state.large
    });
  }

  toggleSmall() {
    this.setState({
      small: !this.state.small
    });
  }

  togglePrimary() {
    this.setState({
      primary: !this.state.primary
    });
  }

  toggleSuccess() {
    this.setState({
      success: !this.state.success
    });
  }

  toggleWarning() {
    this.setState({
      warning: !this.state.warning
    });
  }

  toggleDanger() {
    this.setState({
      danger: !this.state.danger
    });
  }

  toggleInfo() {
    this.setState({
      info: !this.state.info
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Bootstrap Modals
              </CardHeader>
              <CardBlock className="card-body">
                <Button onClick={this.toggle}>Launch demo modal</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>

              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Modals;
