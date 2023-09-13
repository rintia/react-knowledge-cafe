import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmark, handleReadingTime}) => {
    const[blogs, setBlogs] = useState([]);
    useEffect(() =>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);
    return (
        <div className="w-2/3">
            <h1 className="text-3xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id}
                     blog={blog}
                     handleBookmark={handleBookmark}
                     handleReadingTime={handleReadingTime}
                     ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}
export default Blogs;