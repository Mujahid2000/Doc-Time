const Banner = () => {
    return (
        <div className="relative mx-auto md:w-[72.5rem] md:h-[29.375rem] px-2 md:px-0">
            <img
                src="https://i.ibb.co/s93HjN5/Rectangle-5.png"
                alt=""
                className="w-full h-full object-cover"
            />
            <div
                className="absolute inset-0 rounded-[3rem]"
                style={{
                    background: 'linear-gradient(179deg, rgba(0, 193, 157, 0.00) -25.42%, rgba(2, 0, 67, 0.47) 107.11%)'
                }}
            ></div>
        </div>
    );
};

export default Banner;
