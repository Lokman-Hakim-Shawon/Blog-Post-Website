import React, { useEffect, useState } from 'react';
import Blog from '../blog/Blog';

const Blogs = ({handlebooks,handlereadingtime}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    })
    return (
        <div className='md:w-2/3'>
            
            {
                blogs.map(blog=><Blog handlebooks={handlebooks} handlereadingtime={handlereadingtime}  key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;