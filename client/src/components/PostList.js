import React, { useState, useEffect } from 'react';
import api from '../config/api';
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';
import { Link } from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get('posts').then((res) => {
            setPosts(res.data)
        });

        api.get('users').then((res) => {
            setUsers(res.data)
        });
    }, []);
    
    return (
        <div>          
            {
                posts.map(item=>
                    <div className="post-card">
                        <div className="post-title_container">
                            <Link
                                to={`/posts/${item.id}`}
                                className="post-title"
                                style={{ textDecoration: 'none' }}
                            >
                                {item.title}
                            </Link>
                        </div>
                        {
                            users.map(user=>{
                                if(item.userId === user.id) {
                                    return (
                                        <div>
                                            <div className="user-card__data_list">
                                                <Link to={`/users/${user.id}/posts`} className="user-card__data--name">{user.name}</Link>
                                                <span className="user-card__data_icon">
                                                    <PersonIcon style={{ fontSize: 12 }}/>
                                                </span>
                                            </div>

                                            <div className="user-card__data_list">
                                                <p className="user-card__data--company">{user.company.name}</p>
                                                <span className="user-card__data_icon">
                                                    <BusinessIcon style={{ fontSize: 12 }}/>
                                                </span>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                )
            }
        </div>
    );
};

export default PostList;