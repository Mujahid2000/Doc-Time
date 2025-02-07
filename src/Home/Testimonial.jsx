
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Style.css'; // Assuming you have your styles in this CSS file
import { Pagination } from 'swiper/modules';



const Testimonial = () => {
  return (
    <div className='max-w-7xl mx-auto mt-[10.5rem] px-10'>
<button className='text-[1rem] border border-slate-900 px-[1.5rem] py-[0.62rem] rounded-full'>Testimonial</button>
<h2 className='text-[2.25rem] font-semibold mt-[1.62rem] mb-[1.2rem]'>What they say about us</h2>
<div className="program-container ">
      
      <Swiper
        slidesPerView={1} 
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
       
          <div className="bg-[#FFFFF5] max-w-lg p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div>
          <h3 className="text-[1.1875rem] text-black font-semibold">Expertise and Compassion Combined</h3>
          <p className="text-black text-[0.9rem] text-left">I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
        </div>
      </div>
      <div className='flex items-start gap-5'>
        
        <div>
            <img src="https://i.ibb.co/mRkPLGH/724f72eb2c73d3e7560e01a5f0093700.jpg" alt="" className='w-9'/>
        </div>
        <div>
        <p className='text-black text-[0.75rem]'>Sarah D, <span className='text-[#4D4C7B]'>IT Professional </span> </p>
           
            <div className="flex ">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <span key={index} className="text-yellow-500 mx-[0.1rem]">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M0.769492 7.35818L2.8473 8.92503L2.0582 11.4483C1.93068 11.8396 1.92906 12.263 2.05359 12.6554C2.17813 13.0478 2.42214 13.3881 2.74925 13.6256C3.07075 13.8707 3.46037 14.002 3.86003 14C4.25969 13.9979 4.64802 13.8626 4.96713 13.6141L6.99883 12.0702L9.03112 13.6123C9.35204 13.8561 9.73955 13.9884 10.1379 13.9904C10.5363 13.9924 10.9251 13.864 11.2483 13.6235C11.5715 13.383 11.8125 13.0429 11.9367 12.652C12.0609 12.2612 12.0619 11.8397 11.9395 11.4483L11.1504 8.92503L13.2282 7.35818C13.5487 7.11622 13.7869 6.77588 13.9089 6.38576C14.0309 5.99564 14.0303 5.57569 13.9074 5.18591C13.7844 4.79613 13.5452 4.45645 13.2241 4.21538C12.903 3.97431 12.5163 3.8442 12.1192 3.84361H9.56691L8.7924 1.35111C8.67061 0.958774 8.43128 0.616511 8.10892 0.373681C7.78657 0.13085 7.39786 0 6.99883 0C6.59981 0 6.21109 0.13085 5.88874 0.373681C5.56639 0.616511 5.32706 0.958774 5.20526 1.35111L4.43075 3.84361H1.88077C1.48373 3.8442 1.09703 3.97431 0.7759 4.21538C0.454767 4.45645 0.215628 4.79613 0.0926406 5.18591C-0.0303466 5.57569 -0.0308909 5.99564 0.0910853 6.38576C0.213062 6.77588 0.451319 7.11622 0.771826 7.35818H0.769492Z" fill="#FFE03D"/>
</svg>
            </span>
          ))}
      </div>

        </div>
        
      </div>
      
    </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-[#FFFFF5] max-w-lg p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div>
          <h3 className="text-[1.1875rem] text-black font-semibold">Expertise and Compassion Combined</h3>
          <p className="text-black text-[0.9rem] text-left">I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
        </div>
      </div>
      <div className='flex items-start gap-5'>
        
        <div>
            <img src="https://i.ibb.co/8znGfrK/f2cf44bfa3af771f6396363d4ae67aab.jpg" alt="" className='w-9'/>
        </div>
        <div>
        <p className='text-black text-[0.75rem]'>Sarah D, <span className='text-[#4D4C7B]'>IT Professional </span> </p>
           
            <div className="flex ">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <span key={index} className="text-yellow-500 mx-[0.1rem]">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M0.769492 7.35818L2.8473 8.92503L2.0582 11.4483C1.93068 11.8396 1.92906 12.263 2.05359 12.6554C2.17813 13.0478 2.42214 13.3881 2.74925 13.6256C3.07075 13.8707 3.46037 14.002 3.86003 14C4.25969 13.9979 4.64802 13.8626 4.96713 13.6141L6.99883 12.0702L9.03112 13.6123C9.35204 13.8561 9.73955 13.9884 10.1379 13.9904C10.5363 13.9924 10.9251 13.864 11.2483 13.6235C11.5715 13.383 11.8125 13.0429 11.9367 12.652C12.0609 12.2612 12.0619 11.8397 11.9395 11.4483L11.1504 8.92503L13.2282 7.35818C13.5487 7.11622 13.7869 6.77588 13.9089 6.38576C14.0309 5.99564 14.0303 5.57569 13.9074 5.18591C13.7844 4.79613 13.5452 4.45645 13.2241 4.21538C12.903 3.97431 12.5163 3.8442 12.1192 3.84361H9.56691L8.7924 1.35111C8.67061 0.958774 8.43128 0.616511 8.10892 0.373681C7.78657 0.13085 7.39786 0 6.99883 0C6.59981 0 6.21109 0.13085 5.88874 0.373681C5.56639 0.616511 5.32706 0.958774 5.20526 1.35111L4.43075 3.84361H1.88077C1.48373 3.8442 1.09703 3.97431 0.7759 4.21538C0.454767 4.45645 0.215628 4.79613 0.0926406 5.18591C-0.0303466 5.57569 -0.0308909 5.99564 0.0910853 6.38576C0.213062 6.77588 0.451319 7.11622 0.771826 7.35818H0.769492Z" fill="#FFE03D"/>
</svg>
            </span>
          ))}
      </div>

        </div>
        
      </div>
      
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-[#FFFFF5] max-w-lg p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div>
          <h3 className="text-[1.1875rem] text-black font-semibold">Expertise and Compassion Combined</h3>
          <p className="text-black text-[0.9rem] text-left">I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
        </div>
      </div>
      <div className='flex items-start gap-5'>
        
        <div>
            <img src="https://i.ibb.co/7rhbq5J/d08cbe61699dcdccad10d7e4dd0904b0.jpg" alt="" className='w-9'/>
        </div>
        <div>
        <p className='text-black text-[0.75rem]'>Sarah D, <span className='text-[#4D4C7B]'>IT Professional </span> </p>
           
            <div className="flex ">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <span key={index} className="text-yellow-500 mx-[0.1rem]">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M0.769492 7.35818L2.8473 8.92503L2.0582 11.4483C1.93068 11.8396 1.92906 12.263 2.05359 12.6554C2.17813 13.0478 2.42214 13.3881 2.74925 13.6256C3.07075 13.8707 3.46037 14.002 3.86003 14C4.25969 13.9979 4.64802 13.8626 4.96713 13.6141L6.99883 12.0702L9.03112 13.6123C9.35204 13.8561 9.73955 13.9884 10.1379 13.9904C10.5363 13.9924 10.9251 13.864 11.2483 13.6235C11.5715 13.383 11.8125 13.0429 11.9367 12.652C12.0609 12.2612 12.0619 11.8397 11.9395 11.4483L11.1504 8.92503L13.2282 7.35818C13.5487 7.11622 13.7869 6.77588 13.9089 6.38576C14.0309 5.99564 14.0303 5.57569 13.9074 5.18591C13.7844 4.79613 13.5452 4.45645 13.2241 4.21538C12.903 3.97431 12.5163 3.8442 12.1192 3.84361H9.56691L8.7924 1.35111C8.67061 0.958774 8.43128 0.616511 8.10892 0.373681C7.78657 0.13085 7.39786 0 6.99883 0C6.59981 0 6.21109 0.13085 5.88874 0.373681C5.56639 0.616511 5.32706 0.958774 5.20526 1.35111L4.43075 3.84361H1.88077C1.48373 3.8442 1.09703 3.97431 0.7759 4.21538C0.454767 4.45645 0.215628 4.79613 0.0926406 5.18591C-0.0303466 5.57569 -0.0308909 5.99564 0.0910853 6.38576C0.213062 6.77588 0.451319 7.11622 0.771826 7.35818H0.769492Z" fill="#FFE03D"/>
</svg>
            </span>
          ))}
      </div>

        </div>
        
      </div>
      
    </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="bg-[#FFFFF5] max-w-lg p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div>
          <h3 className="text-[1.1875rem] text-black font-semibold">Expertise and Compassion Combined</h3>
          <p className="text-black text-[0.9rem] text-left">I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
        </div>
      </div>
      <div className='flex items-start gap-5'>
        
        <div>
            <img src="https://i.ibb.co/mRkPLGH/724f72eb2c73d3e7560e01a5f0093700.jpg" alt="" className='w-9'/>
        </div>
        <div>
        <p className='text-black text-[0.75rem]'>Sarah D, <span className='text-[#4D4C7B]'>IT Professional </span> </p>
           
            <div className="flex ">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <span key={index} className="text-yellow-500 mx-[0.1rem]">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M0.769492 7.35818L2.8473 8.92503L2.0582 11.4483C1.93068 11.8396 1.92906 12.263 2.05359 12.6554C2.17813 13.0478 2.42214 13.3881 2.74925 13.6256C3.07075 13.8707 3.46037 14.002 3.86003 14C4.25969 13.9979 4.64802 13.8626 4.96713 13.6141L6.99883 12.0702L9.03112 13.6123C9.35204 13.8561 9.73955 13.9884 10.1379 13.9904C10.5363 13.9924 10.9251 13.864 11.2483 13.6235C11.5715 13.383 11.8125 13.0429 11.9367 12.652C12.0609 12.2612 12.0619 11.8397 11.9395 11.4483L11.1504 8.92503L13.2282 7.35818C13.5487 7.11622 13.7869 6.77588 13.9089 6.38576C14.0309 5.99564 14.0303 5.57569 13.9074 5.18591C13.7844 4.79613 13.5452 4.45645 13.2241 4.21538C12.903 3.97431 12.5163 3.8442 12.1192 3.84361H9.56691L8.7924 1.35111C8.67061 0.958774 8.43128 0.616511 8.10892 0.373681C7.78657 0.13085 7.39786 0 6.99883 0C6.59981 0 6.21109 0.13085 5.88874 0.373681C5.56639 0.616511 5.32706 0.958774 5.20526 1.35111L4.43075 3.84361H1.88077C1.48373 3.8442 1.09703 3.97431 0.7759 4.21538C0.454767 4.45645 0.215628 4.79613 0.0926406 5.18591C-0.0303466 5.57569 -0.0308909 5.99564 0.0910853 6.38576C0.213062 6.77588 0.451319 7.11622 0.771826 7.35818H0.769492Z" fill="#FFE03D"/>
</svg>
            </span>
          ))}
      </div>

        </div>
        
      </div>
      
    </div>
        </SwiperSlide>
      
       
        {/* Add more slides as needed */}
      </Swiper>
    </div>
    </div>
  );
};

export default Testimonial;
