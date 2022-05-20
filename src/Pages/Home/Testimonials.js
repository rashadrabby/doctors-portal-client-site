import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content.',
            img: people1,
            location:'california'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content.',
            img: people2,
            location:'california'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content.',
            img: people3,
            location:'california'
        },
    ]

    return (
        <section >
            <div className='flex justify-between py-12'>
                <div className='px-12'>
                    <h3 className='text-xl font-bold text-cyan-500 py-4'>Testimonial</h3>
                    <h3 className='text-3xl'>What Our Patients Says</h3>
                </div>
                <div className='pr-12'>
                    <img className='w-24 lg:w-48' src={quote} alt="quote" />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-12'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>

        </section>
    );
};

export default Testimonials;