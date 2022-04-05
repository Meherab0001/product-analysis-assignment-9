import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviwes = () => {
    const [reviews,setReviews]=useReviews()
    return (
        <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
           {
               reviews.map( review => <Review
                review={review}
               ></Review>
              
                    
               
               )
           }

        </div>
    );
};

export default Reviwes;