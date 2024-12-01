import React from 'react';

const Bookmark = ({mark}) => {
    const {title}=mark
    return (
        <div className='bg-slate-200 m-4 p-4 rounded-xl'>
            <h1 className='text-2xl'>{title}</h1>
        </div>
    );
};

export default Bookmark;