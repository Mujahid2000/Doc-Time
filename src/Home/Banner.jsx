const Banner = () => {
    return (
        <div className="relative mx-auto md:max-w-[72.5rem] md:max-h-[29.375rem] px-3 md:px-5">
            <img
                src="https://i.ibb.co/s93HjN5/Rectangle-5.png"
                alt=""
                className="w-full h-full "
            />
            <div
                className="absolute mx-3 md:mx-5 inset-0 rounded-[3rem]"
                style={{
                    background: 'linear-gradient(179deg, rgba(0, 193, 157, 0.00) -25.42%, rgba(2, 0, 67, 0.47) 107.11%)'
                }}
            >
                
            </div>
        </div>
    );
};

export default Banner;
