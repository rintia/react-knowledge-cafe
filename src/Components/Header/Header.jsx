 import Image from '../../../images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between mx-auto max-w-screen-xl items-center py-8 border-b-2'>
             <h1 className='text-5xl'>Knowledge Cafe</h1>
             <img src={Image} alt="" />
        </div>
    );
};

export default Header;