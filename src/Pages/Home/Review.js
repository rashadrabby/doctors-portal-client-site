import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:mx-w-lg bg-white text-black">
            <div className="card-body">
                <p className='pb-12'>{review.review}</p>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-cyan-500 ring-offset-white mr-7">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div className=''>
                        <h2 className="card-title ">{review.name}</h2>
                        <h4>{review.location}</h4>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;