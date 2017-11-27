import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    Nav,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    Badge,
    Button
} from 'reactstrap';
import HeaderDropdown from './HeaderDropdown';
import {signOut} from '../../utils/token';

class Header extends Component {

    sidebarToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-hidden');
    }

    sidebarMinimize(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-minimized');
    }

    mobileSidebarToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-mobile-show');
    }

    asideToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('aside-menu-hidden');
    }

    handleAnnouncements() {
        return localStorage.getItem("announcement-read");
    }

    render() {
        return (
            <header className="app-header navbar">
                <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
                    <span className="navbar-toggler-icon"></span>
                </NavbarToggler>
                <NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>
                    <span className="navbar-toggler-icon"></span>
                </NavbarToggler>
                <Nav className="mr-auto" navbar>
                    <HeaderDropdown/>
                </Nav>
                {this.handleAnnouncements() ? null : <div><Button href="#/announcements" color="primary">Announcements <Badge color="secondary">!</Badge></Button></div>}
                <NavbarBrand href="http://www.gsnational.net" target="_blank">
                    <img src="http://www.gsnational.net/wp-content/uploads/2017/08/GS-National-InsuranceHIGH.jpg" className="img-fluid" alt="GS National Logo" />
                </NavbarBrand>
                <Link onClick={signOut} to="/">Sign Out</Link>
            </header>
        );
    }
}

Header.propTypes = {
  signOut: PropTypes.func,
};

export default Header;
