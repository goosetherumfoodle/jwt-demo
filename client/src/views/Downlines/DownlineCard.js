import React, {Component} from 'react';
import {CardColumns, Card, CardHeader, CardBody, Container, Row,
        Col, TabContent, TabPane, Nav, NavItem, NavLink, Progress} from 'reactstrap';
import DlProgress from './DlProgress';

const DownlineCard = (props) => {
  return (

      <Card>
        <CardHeader>
          {props.info.name} -  Total Earnings:{props.info.totalEarnings}
        </CardHeader>
        <CardBody>
          {
              props.info.topAgents.map((item,index) => {
                return <DlProgress info={item} key={index}/>
              })
          }
        </CardBody>
      </Card>
  );
}
export default DownlineCard;
