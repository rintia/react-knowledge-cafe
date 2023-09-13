
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmark/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  
  const[bookmark, setBookmark] = useState([]);
  const [readingTime, setReadingTime] =useState(0);
   const handleBookmark = blog =>{
    const newBookmarks = [...bookmark, blog];
    setBookmark(newBookmarks);
   }

   const handleReadingTime = time => {
    setReadingTime(readingTime + time)
   }

  return (
    <>
     <Header></Header>
      <div className='md:flex max-w-screen-xl mx-auto my-4 gap-4'>
      <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blogs>
      <Bookmarks bookmark={bookmark} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
