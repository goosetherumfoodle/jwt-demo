import React, {Component} from 'react'
import {Badge, CardColumns, Card, CardHeader, CardBody, Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Table, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import classnames from 'classnames';

const LifetimeStatTable = (props) => {
  return (
<div>
      <Table bordered responsive size="lg">
        <tbody>
        <tr>
          <td>Name</td>
          <td>{props.userData.name}</td>
        </tr>
        <tr>
          <td>Policies Sold</td>
          <td>{props.userData.policies.policiesSoldLifetime}</td>
        </tr>
        <tr>
          <td>Rank</td>
          <td>300</td>
        </tr>
        <tr>
            <td>Agent Earnings</td>
            <td>${props.userData.policies.earnedRevLifetime}</td>
        </tr>
        </tbody>
      </Table>
</div>
    );

}

export default LifetimeStatTable;