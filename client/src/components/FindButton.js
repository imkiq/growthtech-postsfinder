import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const FindButton = () => (
    <div>
        <Link
            to="/users"
            className="find-button"
            style={{ textDecoration: 'none' }}
        >
            Find it
            <SearchIcon style={{ fontSize: 24 }}/>
        </Link>
    </div>
);

export default FindButton;