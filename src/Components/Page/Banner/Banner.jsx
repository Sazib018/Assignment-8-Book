import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-base-200 max-w-[1170px] mx-auto sm:h-[70vh] rounded-3xl">
        <div className="hero-content flex-col lg:flex-row-reverse gap-28">
            <img src="https://i.ibb.co.com/jDLPxGt/pngwing-1.jpg" className="max-w-sm" alt="Hero" />
            <div className="text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold playfont mb-3 sm:mb-12 sm:leading-relaxed">
                    Books to freshen up <br /> your bookshelf
                </h1>
                <a href="/listedbooks">
                    <button className="btn px-7  bg-[#23BE0A] text-white mb-6">View The List</button>
                </a>
            </div>
        </div>
    </div>
    );
};

export default Banner;