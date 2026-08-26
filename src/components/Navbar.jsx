import { IoHomeSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { RiArchive2Fill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none'>
      <div className=' flex items-center justify-around w-75 h-12 bg-black/80 backdrop-blur-md text-white border hover:border-blue-400 border-white/10 rounded-full transition-all duration-300 shadow shadow-gray-300'>
        <a
          href='#high-light'
          className=' hover:text-blue-400 transition-all duration-300'>
          <FaBookmark />
        </a>
        <a
          href='#about-us'
          className=' hover:text-blue-400 transition-all duration-300'>
          <FaUserAlt />
        </a>
        <a
          href='#home'
          className=' hover:text-blue-400 transition-all duration-300'>
          <IoHomeSharp />
        </a>
        <a
          href='#project'
          className=' hover:text-blue-400 transition-all duration-300'>
          <RiArchive2Fill />
        </a>
        <a
          href='#contact-us'
          className=' hover:text-blue-400 transition-all duration-300'>
          <FaPhone />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
