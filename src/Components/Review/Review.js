


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const Review = ({review}) => {
    return (
        <div className='grid items-centet bg-blue-300 border-4 border-r-4 p-4 m-4 text-black'>
            <h2 className='text-xl text-green-700'>Name:{review.name}</h2>
            <p className='text-sxl text-red-400'>Email:{review.email}</p>
            <p className='text-white'>Review:{review.review}</p>
            <p className='text-yellow-300'>Rating:{review.rating}
            <FontAwesomeIcon incon={faStarHalfStroke}></FontAwesomeIcon>

            </p>
        </div>
    );
};

export default Review;