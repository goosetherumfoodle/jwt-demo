import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/AgentSidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import Dashboard from '../../views/Dashboard/';
import Announcements from '../../views/Announcements/';
import Welcome from '../../views/Welcome';
import EditProfile from '../../views/EditProfile/';
import Production from '../../views/Production/';
import Rewards from '../../views/Rewards/';
import Login from '../../views/Login/';
import Register from '../../views/Register/';
import LoggedInUser from '../../LoggedInUser';
import {getAgent, appLoad} from '../../utils/api.js';
import {setWith} from 'lodash';
import moment from 'moment';
import ReactDataGrid from 'react-data-grid';
const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons');
import AppData from '../../utils/appDataInitShape';
import initialState from '../../initialState';
import {renderTierRow, renderLeaderboardRow} from '../../rowRender';


export default class AgentFull extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;

        this.dashboardToggle = this.dashboardToggle.bind(this);
        this.contactModalToggle = this.contactModalToggle.bind(this);
        this.getRows = this.getRows.bind(this);
        this.rowsCount = this.rowsCount.bind(this);
        this.rowGetter = this.rowGetter.bind(this);
        this.onHandleGridSort = this.onHandleGridSort.bind(this);
        this.createRows = this.createRows.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.onClearFilters = this.onClearFilters.bind(this);
        this.dateFilterHandleChange = this.dateFilterHandleChange.bind(this);
        this.setSelectedMonth = this.setSelectedMonth.bind(this);
    }

    componentDidMount() {
      appLoad().then((response) => {
        this.setState({appData: response.data});
      });

      getAgent().then((results) => {
          this.setState({agent: [...results.data.agent]});
          const originalRows = this.createRows();
          this.setState({originalRows: originalRows});
          this.setState({rows: originalRows.slice(0)});
      }).catch((err) => console.log(`http error: ${err}`));
    }

    dashboardToggle(tab) {
        if (this.state.dashboardActiveTab !== tab) {
            this.setState({
                dashboardActiveTab: tab
            });
        }
    }

    contactModalToggle(){
        this.setState({
            contactModal: !this.state.contactModal
        });
    }
    //production table
    convertDate(dataDate) {
        return moment(dataDate, 'YYYY/MM/DD').format('MM-DD-YY');
    }

    getYear(dataDate) {
        return moment(dataDate, 'YYYY/MM/DD').format('YYYY');
    }

    getActiveStatus(dataDate) {
        const dateComingIn = moment(dataDate, 'YYYY/MM/DD');
        const newYear = dateComingIn.add(1, 'years');
        const isStatusActive = moment().isBefore(newYear);
        return isStatusActive ? 'Active' : 'Inactive';
    }

    createRows() {
        const rows = this.state.agent.map((a, index) =>
            ({
                key: index,
                HICN: a.HICN,
                memberName: a.Name,
                carrier: "Medicare",
                product: a.Product,
                effectiveDate: this.convertDate(a.effectiveDate),
                planYear: this.getYear(a.effectiveDate),
                status: this.getActiveStatus(a.effectiveDate)
            }));
        return rows;
    }

    getRows() {
        return Selectors.getRows(this.state);
      };

    rowGetter(index){
        let rows = this.getRows();
        return rows[index];
    }

    rowsCount(){
        return Selectors.getRows(this.state).length;
      };

    onHandleGridSort(productionSortColumn, productionSortDirection) {
        const comparer = (a, b) => {
            if (productionSortDirection === 'ASC') {
                return a[productionSortColumn] > b[productionSortColumn] ? 1 : -1;
            } else if (productionSortDirection === 'DESC') {
                return a[productionSortColumn] < b[productionSortColumn] ? 1 : -1;
            }
        };
        const rows = productionSortDirection === 'NONE' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);
        this.setState({ productionSortColumn, productionSortDirection});
    };

    handleFilterChange(filter) {
        let newFilters = Object.assign({}, this.state.filters);
        if (filter.filterTerm) {
          newFilters[filter.column.key] = filter;
        }
        else {
          delete newFilters[filter.column.key];
        }
        this.setState({ filters: newFilters });
      };

      onClearFilters() {
        this.setState({ filters: {} });
      };

    getMonthClicked(setInState) {
        return (
            function(e) {
                const element = this.chart.getElementAtEvent(e);
                const month = element[0]._model.label;
                const monthNumber = moment(month, 'MMMM').format('MM');
                setInState(monthNumber);
            }
        )
    }

    setSelectedMonth(monthNumber) {
        this.setState({monthToFilter: monthNumber});
        this.setState({fireRedirect: true});
        this.dateFilterHandleChange();
    }

    dateFilterHandleChange() {
        this.setState({filters: {effectiveDate: {filterTerm: this.state.monthToFilter}}});
      }

    render() {
        const { from } = this.props.location.state || '/';
        const { fireRedirect } = this.state;
        return (
            <div className = "app">
                <Header />
                <div className = "app-body">
                <Sidebar {...this.props} toggle={this.contactModalToggle}
                contactModal={this.state.contactModal}
                userData={this.state.appData.user}  />
                    <main className = "main">
                        <Breadcrumb/>
                        <Container fluid>
                            <Switch>
                                <Route path = "/dashboard"
                                       name="Dashboard"
                                       render = {(props) => <Dashboard
                                       LoggedInUser = {this.state.LoggedInUser}
                                       percentProgress = {this.state.percentProgress}
                                       dashboardActiveTab = {this.state.dashboardActiveTab}
                                       dashboardToggle = {this.dashboardToggle}
                                       userData = {this.state.appData.user}
                                       contestData = {this.state.appData.contest}
                                       renderTierRow = {renderTierRow}
                                       renderLeaderboardRow = {renderLeaderboardRow}
                                       getMonthClicked = {this.getMonthClicked(this.setSelectedMonth)}
                                       bar = {this.state.bar} {...props}/>}/>
                                <Route path = "/announcements" name = "Announcements" component={Announcements}/>
                                <Route path = "/welcome" name = "Welcome" component={Welcome}/>
                                <Route path = "/editprofile" name = "EditProfile" component={EditProfile}/>
                                <Route path = "/production"
                                       name = "Production"
                                       render = {(props) => <Production
                                       rowsCount = {this.rowsCount}
                                       rowGetter={this.rowGetter}
                                       onHandleGridSort={this.onHandleGridSort}
                                       handleFilterChange = {this.handleFilterChange}
                                       onClearFilters = {this.onClearFilters}
                                       rows = {this.state.rows}
                                       productionSortColumn = {this.state.productionSortColumn}
                                       productionSortDirection = {this.state.productionSortDirection}
                                       agent = {this.state.agent}
                                       filters = {this.state.filters} {...props}/>}/>
                                <Route path = "/rewards"
                                       name = "Rewards" render = {(props) => <Rewards
                                       LoggedInUser = {this.state.LoggedInUser}
                                       percentProgress = {this.state.percentProgress}
                                       dashboardActiveTab = {this.state.dashboardActiveTab}
                                       dashboardToggle = {this.dashboardToggle}
                                       userData={this.state.appData.user}
                                       contestData={this.state.appData.contest}
                                       renderTierRow = {renderTierRow}
                                       renderLeaderboardRow = {renderLeaderboardRow}
                                       lifetimeLeaderboard = {this.state.appData.lifetimeLeaderboard} {...props} />}/>
                                <Route path = "/login" name = "Login" component = {Login}/>
                                <Route path = "/register" name = "Login" component = {Register}/>
                                <Redirect to="/welcome" />
                            </Switch>
                        </Container>
                    </main>
                    <Aside />
                </div>
                <Footer />
                {fireRedirect && ( <Redirect to={from || `/production?effectiveDate=${this.state.monthToFilter}`} />)}
            </div>
        );
    }
}
