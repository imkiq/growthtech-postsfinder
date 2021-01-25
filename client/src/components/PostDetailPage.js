import React from 'react';
import TextLogo from './TextLogo';
import NavMenu from './NavMenu';
import PostDetail from './PostDetail';
import Footer from './Footer';

const PostDetailPage = () => (
    <div className="container">
        <TextLogo/>
        <NavMenu/>
        <PostDetail/>
        <Footer/>
    </div>
);

export default PostDetailPage;