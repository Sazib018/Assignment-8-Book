import React from 'react';
import { NavLink } from 'react-router-dom';

const ListedNav = () => {
    return (
        <div>
          <div className=" space-x-4 mb-4">
                <NavLink to={'/listedbooks'}
                   
                    className={` text-xl hover:text-green-600 `}>
                    Read Books
                </NavLink>

                <NavLink to={'/listedbooks/wish'}
                    
                    className={`text-xl hover:text-green-600 `}>
                    Wishlist Books
                </NavLink>
            </div>
        </div>
    );
};

export default ListedNav;