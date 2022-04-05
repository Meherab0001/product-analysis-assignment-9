import React from 'react';

const Blogs = () => {
    return (
        <div className='flex grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
            <div className='item center '>
                <h3 className='text-3xl hover:text-orange-400
           '>
                    What is the Context API?
                </h3>
                <p><span className='text-xl'>Answer:</span>The context API is a React structure that solving prop-delling from all level of react application.It  allows you to share information to any component, by storing it in a central place and allowing access to any component.Context api provide  effectively produce global variables that can be passed around.</p>
            </div>
            <div className='item center '>
                <h3 className='text-3xl hover:text-orange-400
        '>
                    What is the Semantic Tag?
                </h3>
                <p><span className='text-xl'>Answer:</span>
                    Semantic tag is s HTML5 tag.It tag provide information about the contents of those tags that goes beyond just how they look on a page. Using semantic markup, you help the browser understand the meaning of the content instead of just displaying.
                </p>
            </div>
        </div>
    );
};

export default Blogs;