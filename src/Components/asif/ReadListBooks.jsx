import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ReadListBooks = () => {
    const [datas, setDatas] = useState([])
    const [array, setArray] = useState([])
    // all Books Data
    const booksData = useLoaderData()
   

    


    useEffect(() => {
        // read books datas
        const getLocalStorageData = localStorage.getItem('readBooks')
        console.log(booksData);
        if (booksData.length > 5 && getLocalStorageData) {
            console.log(booksData);
            const readDatas =  booksData?.filter(book => getLocalStorageData.includes(book.bookId))
            setDatas(readDatas)
        }
        
    }, [booksData])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {datas?.map((book) => (
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
        </div>
    );
};

export default ReadListBooks;