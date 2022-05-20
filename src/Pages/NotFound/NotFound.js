import React from 'react';
import './NotFound.css'
import image from './404-error.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='notfound'>
            <div className='error-img'>
                <img src={image} alt="404" />
            </div>
            <div className='text'>
                <h3>It's just an Error</h3>
                <p>What are you looking for may have been misplaced</p>
                <p>Please go to correct link address<br/> or <Link className='home-link' to="/">"Click Here"</Link> </p>
            </div>
        </div>
    );
};

export default NotFound;