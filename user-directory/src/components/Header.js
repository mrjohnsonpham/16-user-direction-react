import React from 'react';
import './header.css';
import users from "../users.png"

function Header() {
    return (
        <div className="container">
            <img id="users" src={users} alt="users"/>
            <h1 className="header">User Directory</h1>
        </div>
    )
}

export default Header;
