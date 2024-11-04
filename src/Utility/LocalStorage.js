

export const getStorageItem = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
};

