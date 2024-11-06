import React, { useEffect, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { GrNotes } from 'react-icons/gr';
import { IoPeopleSharp } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router-dom';

const ReadListBooks = () => {
    const [datas, setDatas] = useState([])
   /*  const [array, setArray] = useState([]) */
    // all Books Data
    const booksData = useLoaderData()
   

    


    useEffect(() => {
        // wish list books datas
        const getLocalStorageData = localStorage.getItem('wishlistBooks')
        console.log(booksData);
        if (booksData.length > 5 && getLocalStorageData) {
            console.log(booksData);
            const readDatas =  booksData?.filter(book => getLocalStorageData.includes(book.bookId))
            setDatas(readDatas)
        }
        
    }, [booksData])

    return (
        <div className="grid grid-row gap-4 mt-4">
    {datas?.map((book) => (
        <div key={book.bookId} className="flex border p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-white">
            <img src={book.image} alt={book.bookName} className="h-40 w-32 object-cover rounded mr-6" />
            <div className="flex flex-col justify-between flex-1">
                <div>
                    <h2 className="font-semibold text-lg text-gray-800">{book.bookName}</h2>
                    <p className="text-sm text-gray-600 mb-3">By: {book.author}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                        {book.tags && Array.isArray(book.tags) ? 
                            book.tags.map(tag => (
                                <span key={tag} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">#{tag}</span>
                            )) : 
                            <span className="text-gray-500 text-xs">No Tags</span>
                        }
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-1"> 
                        <span className="inline-flex items-center">
                        <FaLocationDot />  Year of Publishing: {book.yearOfPublishing}
                        </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1"> 
                        <span className="inline-flex items-center">
                        <IoPeopleSharp />  Publisher: {book.publisher}
                        </span>
                    </div>
                    <div className="text-sm text-gray-600"> 
                        <span className="inline-flex items-center">
                        <GrNotes /> Page: {book.totalPages}
                        </span>
                    </div>
                </div>
                
                <div className="flex items-center mt-4 space-x-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">{book.category}</span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">Rating: {book.rating}</span>
                    <Link to={`/book-details/${book.bookId}`} className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    ))}
</div>
    );
};

export default ReadListBooks;