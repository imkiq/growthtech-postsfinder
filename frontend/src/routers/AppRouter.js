import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Splash from '../components/Splash';
import UsersPage from '../components/UsersPage';
import PostsPage from '../components/PostsPage';
import NotFoundPage from '../components/NotFoundPage';
import PostDetailPage from '../components/PostDetailPage';
import UserPostsPage from '../components/UserPostsPage';
import UserCard from '../components/UserCard';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Splash} exact={true} />

                <Route path="/users" component={UsersPage} exact={true} />
                <Route path="/users/:id/posts" component={UserPostsPage}/>

                <Route path="/posts" component={PostsPage} exact={true} />
                <Route path="/posts/:id" component={PostDetailPage} />

                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
