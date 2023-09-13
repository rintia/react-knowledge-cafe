
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleBookmark, handleReadingTime}) => {
   const {title,  cover_photo, author, date, hashtags, reading_time, author_img} = blog;
    return (
        
        <div className='my-20'>
            <img src={cover_photo} alt={`cover image of ${title}`} />
            <div className='flex justify-between my-2'>
                <div className='flex gap-2 items-center'>
                <div className="w-24">
                    <img src={author_img} className='rounded-full' />
                </div>
                <div className='block'>
                    <h1 className='text-2xl'>{author}</h1>
                    <h1 className='text-lg text-gray-500'>{date}</h1>
                </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <h1 className='text-sm text-gray-800'>{reading_time}<span> min read time</span></h1>
                    <button 
                    onClick={() => handleBookmark(blog)}
                    className='text-red-500'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-5xl'>{title}</h1>
            <p>
                {
                    hashtags.map((hash,idx)=> <span key={idx}>#<a href="">{hash}</a></span>)
                }
            </p>
            <div className='mt-4'>
                <h1 
                onClick={()=> handleReadingTime(reading_time)}
                className=' font-semibold text-purple-800 underline hover:cursor-pointer'>Mark As Read</h1>
            </div>
                

        </div>
    );
};

export default Blog;

Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}