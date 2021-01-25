import React, { useState, useEffect } from 'react';
import api from '../config/api';
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';
import { Link, useParams } from 'react-router-dom';

const PostDetail = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        api.get(`posts/${id}`).then((res) => {
            setPosts(res.data)
        });

        api.get('users').then((res) => {
            setUsers(res.data)
        });
    }, []);
    
    return (
        <div>          
            <div className="post-card">
                <div className="post-detail_title">
                    <Link to={`/posts/${posts.id}`}>{posts.title}</Link>
                </div>

                <div className="post-detail_img">
                    <img src="https://via.placeholder.com/303x188/9B5DE5"/>
                </div>

                <div className="post-detail_body">
                    <p>{posts.body}</p>
                </div>

                {
                    users.map(user=>{
                        if(posts.userId === user.id) {
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
        </div>
    );
};

export default PostDetail;