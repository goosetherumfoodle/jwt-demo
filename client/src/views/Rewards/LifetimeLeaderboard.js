import React, {Component} from "react";
import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBlock,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

const LifetimeLeaderboard = (props) => {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardBlock className="card-body">
            <Table responsive hover striped bordered>
              <thead>
              <tr>
                <th>Rank</th>
                <th>NPN</th>
                <th>Policies</th>
              </tr>
              </thead>
              <tbody>
                {props.lifetimeLeaderboard.map(props.renderLeaderboardRow)}
              </tbody>
            </Table>
          </CardBlock>
        </Card>
      </div>
    );
}
export default LifetimeLeaderboard;
