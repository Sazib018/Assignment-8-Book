import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ListedBooks = () => {

    const readBook = useLoaderData();
    console.log(readBook);
    
    return (
        <div>
          gdtag  
        </div>
    );
};

export default ListedBooks;