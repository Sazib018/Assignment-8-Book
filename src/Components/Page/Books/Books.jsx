import React, { useEffect, useState } from 'react';
import BooksCard from './BooksCard';

const Books = () => {

    const [booksData, setBooksData] = useState([
        
    ]);
    console.log(booksData);
    

    useEffect(() => {
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBooksData(data))

}, [])
return (
    <div className='md:mt-[100px] max-w-[1170px] mx-auto mt-14 md:mb-[130px] mb-20'>
        <h1 className='text-[40px] font-bold text-[#131313] text-center platFont mb-9'>Books</h1>
        <div className='grid lg:grid-cols-3 grid-cols-2  xl:gap-6 gap-3 xl:mx-0 mx-2 '>
           {
            booksData?.map(books =>  <BooksCard key={books.bookId} books={books}></BooksCard>)
           }
        </div>
    </div>
);
};

export default Books;

