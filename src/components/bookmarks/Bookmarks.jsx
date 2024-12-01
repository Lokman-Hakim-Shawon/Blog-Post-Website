import React from 'react';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({books,readtime}) => {
    return (
        <div className='bg-gray-300 ml-4 md:w-1/3'>
            <h3 className='text-2xl text-center py-4'>Total Reading Time : {readtime}</h3>
            {
                books.map(mark=><Bookmark mark={mark} key={mark.id}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;