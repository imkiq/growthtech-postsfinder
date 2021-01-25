import React from 'react';
import { Link } from 'react-router-dom';

const TextLogo = () => (
    <div className="text-logo">
        <Link
            to="/"
            style={{ textDecoration: 'none' }}
        >
            <h1>Growth<span>Tech</span></h1>
            <h2>PostsFinder</h2>
        </Link>
    </div>
);

export default TextLogo;