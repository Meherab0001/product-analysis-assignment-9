import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Menubar = () => {
    return (
        <div className='sticky top-0 justify-center px-12 py-4 flex gap-4 text-xl bg-'>
            <CustomLink to='/home'>HOME</CustomLink>
            <CustomLink  to="/reviews">REVIEWS</CustomLink>
            <CustomLink to='/dashboard'>DASBOARD</CustomLink>
            <CustomLink to="/blogs">BLOGS</CustomLink>
            <CustomLink to="/about">ABOUT </CustomLink>
        </div>
    );
};

export default Menubar;