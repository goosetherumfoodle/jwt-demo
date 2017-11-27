import React, {Component} from 'react';
import {CardColumns, Card, CardHeader, CardBody, Container, Row,
        Col, TabContent, TabPane, Nav, NavItem, NavLink, Progress} from 'reactstrap';
import DownlineCard from './DownlineCard';

const DownlineDash = (props) => {
    return (
    <div>
      {
          props.downlines.map((item,index) => {
            return <DownlineCard info={item} key={index}/>
          })
      }
    </div>

  );

}

export default DownlineDash;
