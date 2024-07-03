

const Footer = () => {
    return (
        <div className=''>
          
<div className="flex items-end w-full  mt-9 bg-white">

    <div className="w-full mx-auto  text-white bg-[#020043] body-font">
        <div className="max-w-7xl mx-auto place-items-center  flex flex-col flex-wrap px-9 py-24  md:items-center lg:items-center justify-center md:flex-row md:flex-no-wrap">
            <div className="pl-2 w-64 mx-auto text-center md:mx-auto md:text-left">
                <div className="flex items-center justify-center font-medium text-white  md:justify-between">
                   <img src="https://i.ibb.co/hdCdZVb/logo-light.png" alt="" />
                </div>
                <p className="mt-7 text-sm text-white">123 Main Street Anytown, USA Postal Code: 12345</p>
                <p className="mt-7 text-sm text-white">Support: support@oyolloo.com
                (Available : 10:00am to 07:00pm)</p>             
            </div>

            <div className="flex flex-wrap flex-grow justify-center mt-10 -mb-10 text-center md:pl-28 md:mt-0 md:text-left">
                <div className="w-full px-10 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">Home</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-5">
                            <a className="text-white cursor-pointer hover:text-white">About us                            </a>
                        </li>
                        <li className="mt-5">
                            <a className="text-white cursor-pointer hover:text-white">Success Page
                            </a>
                        </li>
                        <li className="mt-5">
                            <a className="text-white cursor-pointer hover:text-white">Terms and condition</a>
                        </li>
                    </nav>
                </div>
                <div className="w-full px-10 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">Service</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-5">
                            <a className="text-white cursor-pointer hover:text-white">Scheduling</a>
                        </li>
                        <li className="mt-5">
                            <a className="text-white cursor-pointer hover:text-white">Contact Us</a>
                        </li>
                        <li className="mt-5">
                            <a className="text-white cursor-pointer hover:text-white">Patient Portal</a>
                        </li>
                    </nav>
                </div>
                <div className="w-full px-10 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">Follow Us
                    </h2>
                    <nav className="mb-10  gap-5  list-none">
                        <li className="mt-3 flex justify-center md:justify-start gap-7">
                        <img src="https://i.ibb.co/tZLQSWJ/facebook.png" alt="" />
                        <img src="https://i.ibb.co/0h3XYH3/instagram.png" alt="" />
                        <img src="https://i.ibb.co/BCwH678/linkdin.png" alt="" />
                        <img src="https://i.ibb.co/Vgfs4c5/youtube.png" alt="" />
                        </li>
                        <li className="mt-9">
                        
                        </li>
                        <li className="mt-3">
                        @docplus 2024
                        </li>
                       
                    </nav>
                </div>
               
            </div>
        </div>
        
    </div>

</div>
        </div>
    );
};

export default Footer;