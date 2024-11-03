import React, { useEffect, useState } from 'react';
import BooksCard from './BooksCard';

const Books = () => {
    const [booksData, setBooksData] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
            .then((res) => res.json())
            .then((data) => setBooksData(data));
    }, []);

    return (
        <div className="max-w-[1170px] mx-auto mt-10 md:mt-[80px] mb-16 md:mb-[100px] px-4 md:px-0">
            <h1 className="text-3xl md:text-4xl font-bold text-[#131313] text-center mb-8 md:mb-12">Books</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {booksData?.map((book) => (
                    <BooksCard key={book.bookId} books={book} />
                ))}
            </div>
        </div>
    );
};

export default Books;
