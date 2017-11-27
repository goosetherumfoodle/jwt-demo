import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import {CardColumns, Card, CardHeader, CardBody, Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import Leaderboard from './Leaderboard';
import StatTable from './StatTable';
import TierTable from './TierTable';
import ProgressBar from './ProgressBar';
import CJSON from 'circular-json';
import moment from 'moment';

class Dashboard extends Component {

  render() {
    return (
      <div >
        <Container >
          <Row >
            <Col xs="6" >
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
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.props.dashboardActiveTab === '3' })}
                      onClick={() =>  this.props.dashboardToggle('3')}>
                      Contest Rules
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.props.dashboardActiveTab}>
                  <TabPane tabId="1">
                  <StatTable userData={this.props.userData} />
                  </TabPane>
                      <TabPane tabId="3">
                        <b>Dates:</b> January 1, 2017 to December 31, 2017<br></br>
                        <b>Rules:</b> ~Administrators Will Set Contest Rules Here~
                      </TabPane>
                      <TabPane tabId="2">
                        <Leaderboard contestData={this.props.contestData} renderLeaderboardRow={this.props.renderLeaderboardRow}/>
                      </TabPane>
                    </TabContent>
                  </Col>
                  </Row>
                  <Row>
            <Col xs="6">
                <Card>
                  <CardHeader>
                    Performance Tiers
                  </CardHeader>
                  <CardBody>
                    <TierTable contestData={this.props.contestData} renderTierRow={this.props.renderTierRow}/>
                    <ProgressBar userData={this.props.userData}/>
                  </CardBody>
                </Card>
                </Col>
                <Col>
                <Card>
                  <CardHeader>
                    Policies by Month
                  </CardHeader>
                  <CardBody>
                    <div className="chart-wrapper">
                      <Bar
                            data={this.props.bar}
                           options={{
                        maintainAspectRatio: false,
                        onClick: this.props.getMonthClicked
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

export default Dashboard;
