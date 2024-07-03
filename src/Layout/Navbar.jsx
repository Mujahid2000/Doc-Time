import  { useState } from 'react';
import image from '../assets/logo_dark.png'
import { FiMenu, FiX } from 'react-icons/fi';
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white ">
      <div className="container mx-auto px-4 md:px-10 py-4 flex justify-between md:justify-around items-center">
        <div className="flex items-center">
          <img src={image} alt="" className='w-[7.8rem] h-[2rem]'/>
        </div>
        <div className="hidden md:flex space-x-[2rem]">
          <p  className="text-blue-900 cursor-pointer text-base hover:text-yellow-500">Home</p>
          <p  className="text-blue-900 cursor-pointer text-base hover:text-yellow-500">Services</p>
          <p  className="text-blue-900 cursor-pointer text-base hover:text-yellow-500">Blog</p>
          <p  className="text-blue-900 cursor-pointer text-base hover:text-yellow-500">About us</p>
        </div>
        <div className="hidden md:block">
          <button  className="text-blue-900 w-[10.875rem] h-[3rem] border flex flex-row-reverse justify-center items-center border-blue-900 px-4 py-2 rounded-[0.75rem] hover:bg-blue-900 hover:text-white">
          <GoArrowUpRight />
          Appointment
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-blue-900 focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute bg-white w-full top-14 z-50">
          <p  className="block text-blue-900 hover:text-yellow-500 py-2 px-4">Home</p>
          <p  className="block text-blue-900 hover:text-yellow-500 py-2 px-4">Services</p>
          <p  className="block text-blue-900 hover:text-yellow-500 py-2 px-4">Blog</p>
          <p  className="block text-blue-900 hover:text-yellow-500 py-2 px-4">About us</p>
          <p  className="block text-blue-900 flex items-center gap-2 border border-blue-900 px-4 py-2 rounded m-4 hover:bg-blue-900 hover:text-white">
          <GoArrowUpRight />
          Appointment
          </p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
