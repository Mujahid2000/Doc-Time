import { GoArrowUpRight } from "react-icons/go";

const AboutUs = () => {
    return ( 
        <div className="max-w-7xl mx-auto py-10 px-11">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              <div>
                    <button className="px-4 py-2 text-[#020043] bg-slate-50 border border-[#020043] rounded-full mb-4">
                        Who we are
                    </button>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#020043] mb-4 leading-tight">
                        We Help To Get <br /> Solutions
                    </h2>
                    <p className="text-[#020043] mb-6 leading-7 max-w-[29rem]">
                        We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                    </p>
                    <button className="inline-block flex mt-3 lg:mt-24 flex-row-reverse items-center gap-2 px-6 py-3 bg-yellow-400 text-[#020043] font-semibold rounded-lg shadow-md hover:bg-yellow-500">
                        <GoArrowUpRight /> Learn more 
                    </button>
                </div> 


                <div >
                    <img
                        src="https://i.ibb.co/ThjYp4Q/Rectangle-24.png"
                        alt="Healthcare professionals"
                        className="w-full relative h-full  rounded-lg"
                    />
                    <div className="lg:absolute lg:-mt-40 mt-5  lg:-ml-24 shadow-lg bg-[#343268] max-w-[23.7rem]  h-[13rem] rounded-2xl p-10 text-white ">
                        <h3 className="text-lg lg:text-[1.6rem] font-semibold mb-2">
                            Our mission is simple
                        </h3>
                        <p className="text-base lg:text-[1rem] leading-7">
                            To provide high-quality healthcare services that are accessible, personalized, and patient-centered.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
