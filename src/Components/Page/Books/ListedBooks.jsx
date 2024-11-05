import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ListedLayouts from '../../Common/Layout/ListedLayouts';

const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    // console.log(readBooks);
    const [wishlistBooks, setWishlistBooks] = useState([]);
    // console.log(wishlistBooks);
    

    // all Books Data
    const booksData = useLoaderData()

    // read books datas   
    // const readDatas = booksData.filter(book => readBooks.includes(book.bookId))

    // wishList books datas
    // const wishDatas = booksData.filter(book => wishlistBooks.includes(book.bookId))
    
    
    
    

    const [activeTab, setActiveTab] = useState('read');
    const [sortOption, setSortOption] = useState('rating');

    useEffect(() => {
        const readBooksData = JSON.parse(localStorage.getItem('readBooks')) || [];
        const wishlistBooksData = JSON.parse(localStorage.getItem('wishlistBooks')) || [];
        setReadBooks(readBooksData);
        setWishlistBooks(wishlistBooksData);
    }, []);

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const sortBooks = (books) => {
        return books.sort((a, b) => {
            switch (sortOption) {
                   
            }
        });
    };

    const displayedBooks = activeTab === 'read' ? sortBooks(readBooks) : sortBooks(wishlistBooks);



    return (
        <div className="p-4 max-w-[1170px] mx-auto">
            <div className='text-center mb-4'>
                <h1 className="text-2xl bg-[#1313130D] h-[100px] font-bold flex items-center justify-center">
                 Books
                </h1>

                <div className="mb-4 mt-4">
                    <select onChange={handleSortChange} value={sortOption} className="p-2 border rounded">
                        <option value="rating">Rating</option>
                        <option value="totalPages">Number of Pages</option>
                        <option value="year">Published Year</option>
                    </select>
                </div>
            </div>

<ListedLayouts></ListedLayouts>
            {/* <div className=" space-x-4 mb-4">
                <button
                    onClick={() => setActiveTab('read')}
                    className={` text-xl hover:text-green-600 ${activeTab === 'read' ? 'active' : ''}`}>
                    Read Books
                </button>

                <button
                    onClick={() => setActiveTab('wishlist')}
                    className={`text-xl hover:text-green-600 ${activeTab === 'wishlist' ? 'active' : ''}`}>
                    Wishlist Books
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {readDatas?.map((book) => (
                    <div key={book.bookId} className="border p-4 rounded transition-transform transform hover:scale-105">
                        <img src={book.image} alt={book.bookName} className="h-40 w-full object-cover mb-2" />
                        <h2 className="font-semibold">{book.bookName}</h2>
                        <p>Author: {book.author}</p>
                        <p>Category: {book.category}</p>
                        <p>Tags: {book.tags && Array.isArray(book.tags) ? book.tags.join(', ') : 'No Tags'}</p>
                        <p>Total Pages: {book.totalPages}</p>
                        <p>Publisher: {book.publisher}</p>
                        <p>Year of Publishing: {book.yearOfPublishing}</p>
                        <p>Rating: {book.rating}</p>
                        <Link to={`/book-details/${book.bookId}`} className="text-blue-500">View Details</Link>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default ListedBooks;
