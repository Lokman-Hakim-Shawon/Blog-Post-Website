import React from 'react';
import profile from '../../assets/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center py-4 max-w-7xl mx-auto border-b-2'>
             <h1 className='text-4xl font-bold'>BLOG POST</h1>
             <img src={profile} alt='first image' />
        </div>
    );
};

export default Header; <h1 className='text-4xl bg-red-300'>Knoladge Cafe</h1>