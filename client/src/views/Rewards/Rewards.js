import React, {Component} from 'react';
import {Bar, Doughnut, Line, Pie, Polar, Radar} from 'react-chartjs-2';
import {CardColumns, Card, CardHeader, CardBody, Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import LifetimeLeaderboard from './LifetimeLeaderboard';
import LifetimeStatTable from './LifetimeStatTable';

const line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Earned Revenue',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(23,40,92,0.4)',
      borderColor: 'rgba(23,40,92,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(23,40,92,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(23,40,92,1)',
      pointHoverBorderColor: 'rgba(23,40,92,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [165, 259, 380, 281, 456, 355, 440]
    }
  ]
};

const bar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Policies',
      backgroundColor: 'rgba(23,40,92,0.5)',
      borderColor: 'rgba(23,40,92,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(23,40,92,0.4)',
      hoverBorderColor: 'rgba(23,40,92,1)',
      data: [16, 26, 35, 29, 41, 33, 40]
    }
  ]
};

class Rewards extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Container>
          <Row>
            <Col xs="6">
                    <Nav tabs>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: this.props.dashboardActiveTab === '1' })}
                          onClick={() =>  this.props.dashboardToggle('1') }>
                          Statistics
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: this.props.dashboardActiveTab === '2' })}
                          onClick={() =>  this.props.dashboardToggle('2') }>
                          Leaderboard
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent activeTab={this.props.dashboardActiveTab}>
                      <TabPane tabId="1">
                      <LifetimeStatTable userData={this.props.userData}/>
                      </TabPane>
                      <TabPane tabId="2">

                        <LifetimeLeaderboard lifetimeLeaderboard={this.props.lifetimeLeaderboard} renderLeaderboardRow={this.props.renderLeaderboardRow}/>

                      </TabPane>
                    </TabContent>
                  </Col>
            <Col xs="6">
                <Card>
                  <CardHeader>
                    Earned Rewards by Month
                  </CardHeader>
                  <CardBody>
                    <div className="chart-wrapper">
                      <Line data={line}
                            options={{
                          maintainAspectRatio: false
                        }}
                      />
                    </div>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
                    Policies by Month
                  </CardHeader>
                  <CardBody>
                    <div className="chart-wrapper">
                      <Bar data={bar}
                           options={{
                        maintainAspectRatio: false
                      }}
                      />
                    </div>
                  </CardBody>
                </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Rewards;
