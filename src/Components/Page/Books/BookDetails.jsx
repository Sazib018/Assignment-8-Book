import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const details = useLoaderData();
    const { bookId } = useParams();
    const info = details.find(d => d.bookId == bookId);

    const handleAddToRead = () => {
        const readBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
        const wishlistBooks = JSON.parse(localStorage.getItem('wishlistBooks')) || [];

        if (wishlistBooks.includes(bookId)) {
            toast.error("This book is already in your Wishlist.");
            return;
        }

        if (readBooks.includes(bookId)) {
            toast.info("You've already marked this book as Read.");
        } else {
            readBooks.push(bookId);
            localStorage.setItem('readBooks', JSON.stringify(readBooks));
            toast.success("Book added to Read list!");
        }
    };

    const handleAddToWishlist = () => {
        const readBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
        const wishlistBooks = JSON.parse(localStorage.getItem('wishlistBooks')) || [];

        if (readBooks.includes(bookId)) {
            toast.error("This book is already marked as Read and can't be added to Wishlist.");
            return;
        }

        if (wishlistBooks.includes(bookId)) {
            toast.info("This book is already in your Wishlist.");
        } else {
            wishlistBooks.push(bookId);
            localStorage.setItem('wishlistBooks', JSON.stringify(wishlistBooks));
            toast.success("Book added to Wishlist!");
        }
    };

    return (
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
              <ToastContainer />
            <div className="lg:flex gap-12 mt-12 mb-36">
                <figure className="max-w-[573px] bg-[#1313130D] rounded-2xl flex items-center justify-center py-6 px-4 sm:px-[75px]">
                    <img
                        src={info.image}
                        className="w-full sm:w-[380px] lg:w-[400px] object-cover"
                        alt={info.bookName}
                    />
                </figure>
                <div className="max-w-[549px]">
                    <h1 className="text-[#131313] text-3xl sm:text-[40px] font-bold mb-4">{info.bookName}</h1>
                    <p className="text-[#131313CC] font-medium text-lg sm:text-xl">By : {info.author}</p>
                    
                    <div className="border-t border-[#13131326] mt-6 mb-4"></div>
                    <p className="text-[#131313CC] font-medium text-lg sm:text-xl">{info.category}</p>
                    
                    <div className="border-t border-[#13131326] mb-6 mt-4"></div>
                    <p className="text-[#131313B2]">
                        <span className="text-base font-bold text-[#131313]">Review:</span> {info.review}<br />
                        <span className="font-bold">Description:</span> {info.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-6 items-center">
                        <p className="text-[#131313] font-bold text-base">Tags:</p>
                        {info.tags.map((tag, index) => (
                            <span key={index} className="bg-[#23BE0A0D] text-[#23BE0A] text-base px-4 py-1 rounded-full font-medium">
                                #{tag}
                            </span>
                        ))}
                    </div>
                    
                    <div className="border-t border-[#13131326] my-6"></div>
                    <div className="flex gap-8 sm:gap-12 mb-8">
                        <ul className="text-[#131313B2] space-y-2">
                            <li>Number of Pages:</li>
                            <li>Publisher:</li>
                            <li>Year of Publishing:</li>
                            <li>Rating:</li>
                        </ul>
                        <ul className="text-[#131313] font-semibold space-y-2">
                            <li>{info.totalPages}</li>
                            <li>{info.publisher}</li>
                            <li>{info.yearOfPublishing}</li>
                            <li>{info.rating}</li>
                        </ul>
                    </div>

                    <div className="text-lg font-semibold flex gap-4">
                        <button onClick={handleAddToRead} className="btn bg-[#23BE0A] text-white px-6 py-2 rounded-md">Read</button>
                        <button onClick={handleAddToWishlist} className="btn bg-[#50B1C9] text-white px-6 py-2 rounded-md">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
