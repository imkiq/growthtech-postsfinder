import React from 'react';
import TextLogo from './TextLogo';
import NavMenu from './NavMenu';
import Footer from './Footer';
import UserCard from './UserCard';
import PostCard from './PostCard';

const UserPostsPage = () => (
    <div className="container">
        <TextLogo/>
        <NavMenu/>
        <UserCard/>
        <PostCard/>
        <Footer/>
    </div>
);

export default UserPostsPage;