import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => (
    <div className="nav-menu">
        <NavLink
            to="/users"
            className="nav-menu-title"
            activeClassName="is-active"
            exact={true}
            style={{ textDecoration: 'none' }}
        >
            Users
        </NavLink>

        <NavLink
            to="/posts"
            className="nav-menu-title"
            activeClassName="is-active"
            exact={true}
            style={{ textDecoration: 'none' }}
        >
            Posts
        </NavLink>
    </div>
);

export default NavMenu;