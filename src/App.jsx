
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmark/Bookmark'
import Header from './Components/Header/Header'

function App() {
 

  return (
    <>
     <Header></Header>
      <div className='md:flex max-w-screen-xl mx-auto my-4'>
      <Blogs></Blogs>
      <Bookmark></Bookmark>
      </div>
    </>
  )
}

export default App
