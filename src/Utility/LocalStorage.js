

export const saveBookToLocalStorage = (bookId, book) => {
    localStorage.setItem(bookId, JSON.stringify(book));
};

export const getReadBooks = () => {
    return JSON.parse(localStorage.getItem('readBooks')) || [];
};

export const addReadBook = (bookId) => {
    const readBooks = getReadBooks();
    if (!readBooks.includes(bookId)) {
        readBooks.push(bookId);
        localStorage.setItem('readBooks', JSON.stringify(readBooks));
    }
};

export const getWishlistBooks = () => {
    return JSON.parse(localStorage.getItem('wishlistBooks')) || [];
};

export const addWishlistBook = (bookId) => {
    const wishlistBooks = getWishlistBooks();
    if (!wishlistBooks.includes(bookId)) {
        wishlistBooks.push(bookId);
        localStorage.setItem('wishlistBooks', JSON.stringify(wishlistBooks));
    }
};

export const clearLocalStorage = () => {
    localStorage.removeItem('readBooks');
    localStorage.removeItem('wishlistBooks');
};
