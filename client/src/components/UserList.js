import React, { useState, useEffect } from 'react';
import api from '../config/api';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';
import EmailIcon from '@material-ui/icons/Email';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get('users').then((res) => {
            setUsers(res.data)
        });
    }, []);
    
    return (
        <div>

            {
                users.map(item =>
                    <div>
                        <div className="user-card">
                            <div className="user-card__avatar">
                                <Link to={`/users/${item.id}/posts`}>
                                    <img src="https://via.placeholder.com/100/9B5DE5"/>
                                </Link>
                            </div>

                            <div className="user-card__data">
                                <div className="user-card__data_list">
                                    <Link to={`/users/${item.id}/posts`} className="user-card__data--name">{item.name}</Link>
                                    <span className="user-card__data_icon">
                                        <PersonIcon style={{ fontSize: 12 }}/>
                                    </span>
                                </div>

                                <div className="user-card__data_list">
                                    <p className="user-card__data--company">{item.company.name}</p>
                                    <span className="user-card__data_icon">
                                        <BusinessIcon style={{ fontSize: 12 }}/>
                                    </span>
                                </div>

                                <div className="user-card__data_list">
                                    <a href={`mailto:${item.email}`} className="user-card__data--email">{item.email}</a>
                                    <span className="user-card__data_icon">
                                        <EmailIcon style={{ fontSize: 12 }}/>
                                    </span>
                                </div>
                                
                                <div className="user-card__data_post">
                                    <Link to={`/users/${item.id}/posts`} className="user-card__data--posts-count">View Posts</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default UserList;