import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const BookDetails = () => {
    const details = useLoaderData();

    const { bookId } = useParams();

    const info = details.find(d => d.bookId == bookId);



    return (
        <div className='max-w-[1170px] mx-auto'>
            <div className="xl:mx-0 mx-2">
                <div className="lg:flex gap-12 mt-[52px] mb-36">
                    <figure className='max-w-[573px] bg-[#1313130D] rounded-2xl flex items-center justify-center md:py-0 py-6 md:px-[75px]'>
                        <img
                            src={info.image}
                            className="xl:w-[400px] lg:w-[380px] md:w-[380px]" />
                    </figure>
                    <div className="max-w-[549px]">
                        <h1 className="text-[#131313] text-[40px] font-bold platFont mb-4">{info.bookName}</h1>
                        <p className='text-[#131313CC] font-medium xl:text-xl text-base '>By : {info.author}</p>
                        <div className='border border-[#13131326] mt-6 mb-4'></div>
                        <p className='text-[#131313CC] font-medium xl:text-xl text-base '>{info.category}</p>
                        <div className='border border-[#13131326] mb-6 mt-4'></div>
                        <p className='text-[#131313B2]'><span className='text-base text-[#131313] font-bold'>Review :</span> {info.review} <br />Description : {info.description}</p>
                        <div className='flex gap-4 mt-6 items-center'>
                            <p className='text-[#131313] font-bold text-base '>Tag</p>
                            {info.tags.map((tag, index) => (
                                <p key={index} className='w-fit bg-[#23BE0A0D] text-base  text-[#23BE0A] px-4  py-[7] rounded-[30px] font-medium'>#{tag}</p>
                            ))}

                        </div>
                        <div className='border border-[#13131326] my-6'></div>
                        <div className='flex gap-[59px] mb-8'>
                            <ul className='text-[#131313B2] gap-3'>
                                <li>Number of Pages:</li>
                                <li>Publisher:</li>
                                <li>Year of Publishing:</li>
                                <li>Rating:</li>
                            </ul>
                            <ul className='text-[#131313] gap-3 font-semibold'>
                                <li>{info.totalPages}</li>
                                <li>{info.publisher}</li>
                                <li>{info.yearOfPublishing}</li>
                                <li>{info.rating}</li>
                            </ul>
                        </div>

                        <div className=" text-lg font-semibold flex gap-4">
                            <button className="btn bg-[#23BE0A] text-white">Read</button>
                            <button className="btn bg-[#50B1C9] text-white">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
