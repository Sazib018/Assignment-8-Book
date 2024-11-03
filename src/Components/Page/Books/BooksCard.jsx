import React from 'react';
import { LuStar } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

const BooksCard = ({ books }) => {
    const { id, image, tags, bookName, author, category, rating } = books;
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/book/${id}`);
    };

    return (
        <div
            onClick={handleCardClick}
            className="card max-w-full sm:max-w-[300px] md:max-w-[350px] lg:max-w-[374px] h-full border border-[#13131326] p-3 md:p-4 lg:p-6 flex flex-col cursor-pointer"
        >
            <figure className="bg-[#F3F3F3] rounded-2xl flex justify-center items-center w-full h-[180px] sm:h-[200px] md:h-[250px] overflow-hidden">
                <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                />
            </figure>
            <div className="mt-3 md:mt-5 flex flex-col flex-grow">
                <div className="flex gap-2 md:gap-3 mb-2 md:mb-4">
                    {tags?.map((tag, i) => (
                        <p
                            key={i}
                            className="bg-[#23BE0A0D] text-[8px] sm:text-xs md:text-sm text-[#23BE0A] px-2 md:px-3 py-1 rounded-[30px] font-medium"
                        >
                            {tag}
                        </p>
                    ))}
                </div>
                <h3 className="text-[#131313] text-sm sm:text-base md:text-lg font-bold md:mb-4 mb-1">
                    {bookName}
                </h3>
                <p className="text-[#131313CC] font-medium text-xs sm:text-sm md:text-base">
                    By: {author}
                </p>
                <div className="border border-dashed border-[#13131326] my-2 md:my-4"></div>
                <div className="flex justify-between text-[#131313CC] text-xs sm:text-sm md:text-base mt-auto">
                    <p>{category}</p>
                    <div className="flex gap-1 sm:gap-2 items-center">
                        <p>{rating}</p>
                        <LuStar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;
