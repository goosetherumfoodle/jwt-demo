import React, {Component} from 'react'
import {Badge, CardColumns, Card, CardHeader, CardBody, Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Table, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import classnames from 'classnames';

const TierTable = (props)=> {

    return (
<div>
      <Table bordered responsive size="sm">
        <thead>
        <tr className="bg-dark tierTable">
          <th>Tier</th>
          <th>Goal</th>
          <th>RevShare</th>
          <th>Potential Earnings</th>
        </tr>
        </thead>
        <tbody>
          {props.contestData.tiers.map(props.renderTierRow)}
        </tbody>
      </Table>
</div>
    );
  }


export default TierTable;
