import React, {Component} from 'react'
import {Badge, CardColumns, Card, CardHeader, CardBody, Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Table, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import classnames from 'classnames';

function StatTable(props) {
  // this first loads the initial constructor values, then gets loaded again as empty
  console.log(`props in statTable: ${JSON.stringify(props)}`);
    return (
<div>
  <Table bordered striped responsive size="lg">
    <tbody>
    <tr>
      <td>Name</td>
      <td>{props.userData.name}</td>
    </tr>
    <tr>
      <td>Policies Sold</td>
      <td>{props.userData.policies.currentContestPolicies}</td>
    </tr>
    <tr>
      <td>Current Tier</td>
      <td>{props.userData.contestTier}</td>
    </tr>
    <tr>
      <td>Rank</td>
      <td>{props.userData.leaderBoardRank}</td>
    </tr>
    <tr>
      <td>Agent Earnings</td>
      <td>{props.userData.policies.currentContestRev}</td>
    </tr>
    </tbody>
  </Table>
</div>
    );
}
export default StatTable;
