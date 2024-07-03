import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const Service = () => {
    return (
        <div className='bg-[#FFFFF5] max-w-[75rem] mx-auto rounded-xl px-1'>
             <div className='grid grid-cols-1 lg:grid-cols-2 px-7 place-items-center'>
            <div className=' p-4 mt-9 w-full max-w-lg'>
                <button className='bg-[#FBFBFB] px-[1.5rem] py-[0.62rem] rounded-full border border-[#4D4C7B] font-semibold'>Service</button>
                <h2 className='text-[#020043] text-[2.25rem] font-semibold'>Empowering Health, Enriching Lives</h2>
                <p className='text-[1rem] max-w-[25rem]'>We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>
                <button  className="text-[#020043] gap-3 my-[3rem] w-[10.875rem] h-[3rem] border flex flex-row-reverse justify-center items-center  px-4 py-2 rounded-[0.75rem] bg-yellow-400 hover:bg-yellow-500 font-semibold">
          <GoArrowUpRight />
          Appointment
          </button>
            </div>

             <div className="relative  p-4 rounded-lg  w-full max-w-lg">
      <img src="https://i.ibb.co/4jLwvfB/Rectangle-27-2.png" alt="Consultancy your health" className="rounded-2xl w-full object-cover"/>
      
      <div className="absolute bottom-4 m-4 text-sm lg:text-lg max-w-[20.0625rem] h-[9rem] left-4 right-4 bg-[#020043] bg-opacity-75 text-white p-4 rounded-lg flex items-end justify-between">
        <div className='my-auto'>
          <h3 className="text-base lg:text-xl font-semibold">Advanced Technology</h3>
          <p className="text-sm">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
        </div>
        <div className="bg-yellow-400 p-2 rounded-full">
        <GoArrowUpRight className='cursor-pointer text-white' />
        </div>
      </div>

    </div>

    <div className="relative  p-4 rounded-lg  w-full max-w-lg">
      <img src="https://i.ibb.co/wsw8PnD/Rectangle-27-1.png" alt="Consultancy your health" className="rounded-2xl w-full object-cover"/>
      
      <div className="absolute bottom-4 m-4 text-sm lg:text-lg max-w-[20.0625rem] h-[9rem] left-4 right-4 bg-[#020043] bg-opacity-75 text-white p-4 rounded-lg flex items-end justify-between">
        <div className='my-auto'>
          <h3 className="text-base lg:text-xl font-semibold">Online Doctor Meet</h3>
          <p className="text-sm">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
        </div>
        <div className="bg-yellow-400 p-2 rounded-full">
        <GoArrowUpRight className='cursor-pointer text-white' />
        </div>
      </div>

    </div>

    <div className="relative  p-4 rounded-lg  w-full max-w-lg">
      <img src="https://i.ibb.co/hKm20zB/Rectangle-27.png" alt="Consultancy your health" className="rounded-2xl w-full object-cover"/>
      
      <div className="absolute bottom-4 m-4 text-sm lg:text-lg max-w-[20.0625rem] h-[9rem] left-4 right-4 bg-[#020043] bg-opacity-75 text-white p-4 rounded-lg flex items-end justify-between">
        <div className='my-auto'>
          <h3 className="text-base lg:text-xl font-semibold">Consultancy your health</h3>
          <p className="text-sm">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
        </div>
        <div className="bg-yellow-400 p-2 rounded-full">
        <GoArrowUpRight className='cursor-pointer text-white' />
        </div>
      </div>

    </div>
             </div>
        </div>
    );
};

export default Service;