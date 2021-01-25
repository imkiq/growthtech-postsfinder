import React from 'react';
import TextLogo from './TextLogo';
import NavMenu from './NavMenu';
import PostList from './PostList';
import Footer from './Footer';


const PostsPage = () => (
    <div className="container">
        <TextLogo/>
        <NavMenu/>
        <PostList/>
        <Footer/>
    </div>
);

export default PostsPage;