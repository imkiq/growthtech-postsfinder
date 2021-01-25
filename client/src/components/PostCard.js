import React, { useState, useEffect } from 'react';
import api from '../config/api';
import { Link, useParams } from 'react-router-dom';

const PostCard = () => {
    const [posts, setPosts] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        api.get(`users/${id}/posts`).then((res) => {
            setPosts(res.data)
        });
    }, []); 

    return (
        <div>

            {
                posts.map((item) => {
                    return (
                        <div className="post-card">
                            <Link
                                to={`/posts/${item.id}`}
                                className="post-title"
                                style={{ textDecoration: 'none' }}
                            >
                                {item.title}
                            </Link>
                        </div>
                    );
                })
            }          

        </div>
    );
};

export default PostCard;