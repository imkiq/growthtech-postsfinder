import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div className="container">
        <div className="not-found">
            <div className="not-found_header">
                <p className="not-found_title">404</p>
                <p className="not-found_subtitle">Sorry, this page couldn't be found :(</p>       
            </div>

            <Link
                to="/"
                className="not-found_go-back"
            >
                Go back home
            </Link>
        </div>
    </div>
);

export default NotFoundPage;