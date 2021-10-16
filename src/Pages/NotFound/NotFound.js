import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <div>
                <img src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="" />
            </div>
            <div>
                <Link className='go-back-btn' to='/'>
                <button>Go Back</button>
            </Link>
            </div>
        </div>
    );
};

export default NotFound;