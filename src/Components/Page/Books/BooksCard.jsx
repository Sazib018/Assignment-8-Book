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
            className="card max-w-[374px] h-full border border-[#13131326] xl:p-6 p-3 flex flex-col cursor-pointer"
        >
            <figure className="bg-[#F3F3F3] rounded-2xl flex justify-center items-center w-full h-[250px] overflow-hidden">
                <img
                    src={image}
                    alt="Book Cover"
                    className="h-full w-full object-cover rounded-lg"
                />
            </figure>
            <div className="md:mt-6 mt-3 flex flex-col flex-grow">
                <div className="flex gap-3 md:mb-4 mb-2">
                    {tags?.map((tag, i) => (
                        <p key={i} className="bg-[#23BE0A0D] md:text-base text-[8px] text-[#23BE0A] md:px-4 px-2 py-1 rounded-[30px] font-medium">
                            {tag}
                        </p>
                    ))}
                </div>
                <h3 className="text-[#131313] md:text-2xl text-sm font-bold platFont md:mb-4 mb-1">{bookName}</h3>
                <p className="text-[#131313CC] font-medium md:text-base text-xs">By: {author}</p>
                <div className="border border-dashed border-[#13131326] md:my-5 my-2"></div>
                <div className="flex justify-between text-[#131313CC] md:text-base text-xs mt-auto">
                    <p>{category}</p>
                    <div className="flex gap-2 items-center">
                        <p>{rating}</p>
                        <LuStar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;
