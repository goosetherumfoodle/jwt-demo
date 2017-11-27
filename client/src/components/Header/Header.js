import React from 'react';
import {Link} from 'react-router-dom';

import {signOut} from '../../utils/authToken';

const handleSignOut = signOut;

function Header(props) {
    return (
        <header className="app-header navbar">
            <p>UI for {props.userRole}</p>
            <Link onClick={handleSignOut} to="/">Sign Out</Link>
        </header>
    );
}

export default Header;
