import React, {Component} from 'react';
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    NavDropdown
} from 'reactstrap';

class HeaderDropdown extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    dropAccnt() {
        return (
            <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav caret={this.state.caretVisible}>
                    <img src={'img/janeAgent.png'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                    <span className="d-md-down-none">Jane Agent</span>    
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
                    <DropdownItem href='/#/editprofile'><i className="fa fa-user"></i> Edit Profile</DropdownItem>
                    <DropdownItem><i className="fa fa-lock"></i> Logout</DropdownItem>
                </DropdownMenu>
            </NavDropdown>
        );
    }

    render() {
        const {...attributes} = this.props;
        return (
            this.dropAccnt()
        );
    }
}

export default HeaderDropdown;
