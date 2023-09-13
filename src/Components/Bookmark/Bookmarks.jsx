import PropTypes from 'prop-types';
import Bookmark from './Bookmark';
const Bookmarks = ({bookmark, readingTime}) => {
    return (
       <div className='w-1/3'>
        <div>
            <h1>Spent time on read: {readingTime} min</h1>
        </div>
         <div className=" bg-gray-200 py-4 px-8 text-center rounded-md">
            <h1 className='text-3xl'>Bookmarked Blogs: {bookmark.length}</h1>
            <div>
                {
                    bookmark.map(bm => <Bookmark key={bm.id} bm={bm}></Bookmark>)
                }
            </div>
        </div>
       </div>
    );
};

Bookmarks.propTypes ={
    bookmark: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;