import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import agent from './_agent';
import classNames from 'classnames';


function ContactBRM(props) {
    return (
      <li className="nav-item">
        <a className="nav-link" onClick={() => props.toggle()}><i className="icon-question"/>Contact BRM</a>
        <Modal isOpen={props.contactModal} toggle={props.toggle} >
          <ModalHeader toggle={props.toggle}>Contact</ModalHeader>
          <ModalBody>
            <p><strong>email</strong><a href="mailto:admin@gsnational.com"> admin@gsnational.com</a></p>
            <p><strong>phone</strong> 855-330-3566</p>
            <p><strong>BRM </strong>{agent.items[0].brmname}</p>
            <p><strong>BRM Phone </strong>{agent.items[0].brmphone}</p>
            <p><strong>BRM Email </strong><a href={`mailto:${agent.items[0].brmemail}`}> {agent.items[0].brmemail}</a></p>
          </ModalBody>
        </Modal>
      </li>
    )
  }
export default ContactBRM;
