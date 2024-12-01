import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
 const [bookmarks,setBookmarks]=useState([])
 const [readTime,setReadTime]=useState(0)
 const handlebookmarks= blog=>{
  const newbookmarks=[...bookmarks,blog]
  setBookmarks(newbookmarks)
 }
 const handlereadingtime=(read,id)=>{
  setReadTime(readTime+read)
  const remainingbookmarks=bookmarks.filter(bookmark=>bookmark.id!==id)
  setBookmarks(remainingbookmarks)

 }

  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handlebooks={handlebookmarks} handlereadingtime={handlereadingtime}></Blogs>
     <Bookmarks books={bookmarks} readtime={readTime}></Bookmarks>
     </div>
    </>
  )
}

export default App
