import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import Reviwes from '../Reviews/Reviwes';


const Home = () => {
    const [reviews,setReviews]=useReviews()
    return (
        <>
        <div className='flex grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
           <div>
               <img className='w-25 h-25' src="https://i.ytimg.com/vi/DsTYK3jSnM8/maxresdefault.jpg" alt="" />
           </div>
           <div className='mt-5'>
               <h2 className='text-5xl text-orange-500 font-serif bold '>This Goast BIKE</h2>
               <h2 className='text-5xl text-blue-400 font-serif bold '>Chose your best bike here</h2>
          <p> At GHOST we have been building bikes for over 25 years. It all started with two friends, a small garage and the idea to build the exact bikes that you would like to ride yourself. Each of our bikes has its own character that makes it special. From the good-natured beginner bike to the aggressive enduro bike, there are many nuances.</p>
          <button className='bg-gray-500 mt-5 border p-3 text-white border-r-4'>Live Demo</button>
           </div>
        
        </div>
       
        <div>
        <h2 className="text-3xl items-center">Customer Reviews</h2>
            {
             reviews.slice(0,3).map(review => <Review review={review}></Review>
             
             )
                
            }
          <Link className='bg-cyan-400  p-3' to='/reviews'> See All</Link>
        </div>
        </>
    );
};

export default Home;