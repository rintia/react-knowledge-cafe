import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const[blogs, setBlogs] = useState([]);
    useEffect(() =>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    console.log(blogs)
    return (
        <div>
            
        </div>
    );
};

export default Blogs;