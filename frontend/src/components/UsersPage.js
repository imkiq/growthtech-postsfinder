import React from 'react';
import TextLogo from './TextLogo';
import NavMenu from './NavMenu';
import UserList from './UserList';
import Footer from './Footer';

const UsersPage = () => (
    <div className="container">
        <TextLogo/>
        <NavMenu/>
        <UserList/>
        <Footer/>
    </div>
);

export default UsersPage;