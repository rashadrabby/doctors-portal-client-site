import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import PrimaryButton from '../Shared/PrimaryButton';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div style={{ background: `url(${bg})` }} className="hero min-h-screen bg-hero-pattern px-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-md rounded-lg shadow-2xl" alt='' />
                <div className='text-left'>
                    <h1 className="text-5xl font-bold float">Your New Smile Starts Here</h1>
                    <p className="py-6 pr-12">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link to='/signup'><PrimaryButton>Get Started</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;