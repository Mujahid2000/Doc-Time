
import backgroundImage from '../assets/Rectangle 32.png'; 
import { GoArrowUpRight } from 'react-icons/go';
const Appointment = () => {
    return (
        <div className="relative  max-w-7xl px-11 mx-auto">
      <div
        className="relative w-full px-10 h-[20rem] lg:h-[30rem] bg-cover bg-center rounded-3xl"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute px-12 rounded-3xl bg-gradient-to-r from-[#020043] to-[#0200434D] inset-0  bg-opacity-60 " >

        </div>
        <div className="relative lg:px-12 flex flex-col items-start justify-center h-full  text-white space-y-4">
          <h1 className="text-[1.56rem] md:text-[1.8rem] lg:text-[2.25rem] font-bold  max-h-[11rem]">Get Your <br /> First Appointment <br />at 50% Off!</h1>
          <div className="flex space-x-4">
            <button className="flex text-xs md:text-sm  items-start lg:items-center px-2 lg:px-4 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-[0.75rem] hover:bg-yellow-600">
              Appointment  <GoArrowUpRight className="md:ml-2 lg:w-[1rem]"/> 
            </button>
            <button className="flex text-xs md:text-sm items-start lg:items-center px-2 lg:px-4 py-2 bg-transparent border-2 border-white text-white font-semibold rounded-[0.75rem] hover:bg-white hover:text-gray-900">
              Learn More  <GoArrowUpRight className="md:ml-2 lg:w-[1rem]"/>  
            </button>
          </div>
        </div>
        <div className="absolute top-[1rem] lg:top-[3.75rem] right-[1rem] lg:right-[3.75rem]  text-white font-bold text-xl">
            <img src="https://i.ibb.co/hdCdZVb/logo-light.png" alt="" />
        </div>
      </div>
    </div>
    );
};

export default Appointment;