import React from 'react';
import PropTypes from 'prop-types'; 
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog,handlebooks,handlereadingtime}) => {
    
    return (
        <div className='mb-8'>
            <img className='w-full' src={blog.cover} />
            <div className='flex justify-between pt-4'>
                <div className='flex'>
                    <img className='w-10 h-10 md:w-12 md:h-12 rounded-full' src={blog.author_img}/>
                    <div className='ml-2 text-sm md:text-lg md:ml-6 justify-center'>
                        <h3 className='font-bold'>{blog.author}</h3>
                        <p>{blog.post_date}</p>
                    </div>   
                </div>
                <div className='flex justify-center items-center space-x-1 md:space-x-2'>
                    <span>{blog.reading_time} read</span>
                    <p className='text-xl md:text-3xl' onClick={()=>handlebooks(blog)}><CiBookmark /></p>
                </div>
            </div>
            <p className='text-2xl md:text-4xl md:mb-2'>{blog.title}</p>
            {
                blog.hashtags.map(hash=><span className='mr-1 md:mr-4' key={hash}>{hash}</span>)
            }
            <button className='block text-blue-700 underline space-y-2' onClick={()=>handlereadingtime(blog.reading_time,blog.id)}>mark as read</button>
        </div>
    );
};
{
    Blog.propTypes={
        blog:PropTypes.object.isRequired
    }
}

export default Blog;