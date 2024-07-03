import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };


      const accordionData = [
        {
          question: 'What Are Your Office Hours?',
          answer: 'Our Office Hours Vary By Location, But Typically We Are Open Monday Through Friday From 8:00 AM To 5:00 PM. Some Locations May Offer Extended Hours Or Weekend Appointments. Please Contact Your Nearest Clinic For Specific Hours.',
        },
        {
          question: 'How Can I Schedule An Appointment?',
          answer: 'You can schedule an appointment by calling our office or using our online scheduling system.',
        },
        {
          question: 'Do You Accept Insurance?',
          answer: 'Yes, we accept most major insurance plans. Please contact our office for specific details.',
        },
        {
          question: 'What Should I Bring To My Appointment?',
          answer: 'Please bring your insurance card, a photo ID, and any relevant medical records.',
        },
        {
          question: 'Do You Offer Telemedicine Appointments?',
          answer: 'Yes, we offer telemedicine appointments. Please contact our office to schedule one.',
        },
      ];
    return (
        <div className='max-w-7xl mx-auto px-9 mt-[12rem]'>
            <button className='text-[1rem] text-[#020043] border mx-2 border-slate-900 mb-[1rem] px-[1.5rem] py-[0.62rem] rounded-full'>Faq</button>
            <h2 className='text-[2.25rem] mx-2 text-[#020043] font-semibold leading-9 mt-[1rem] mb-[1.8rem]'>Frequntly Asked Question</h2>

            {accordionData.map((item, index) => (
        <div key={index} className=" p-2 rounded-lg my-1 ">
          <button
            className="w-full flex px-[2.85rem] bg-[#FFFFF5] justify-between items-center py-4 text-left focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-semibold">{item.question}</span>
            <span>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
          {activeIndex === index && (
            <div className="py-2 px-[2.85rem] border-b rounded-lg bg-white text-gray-700">
              {item.answer}
            </div>
          )}
        </div>
      ))}
        </div>
    );
};

export default Faq;