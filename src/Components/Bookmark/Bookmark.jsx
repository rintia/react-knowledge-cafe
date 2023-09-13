import PropTypes from 'prop-types';
const Bookmark = ({bm}) => {
    const{title} = bm;
    return (
        <div className="bg-white my-2 text-center rounded-lg shadow-md p-2">
            <h1>{title}</h1>
        </div>
    );
};

Bookmark.propTypes ={
    bm: PropTypes.object
}

export default Bookmark;