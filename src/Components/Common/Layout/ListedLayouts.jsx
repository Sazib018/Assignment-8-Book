import React from 'react';
import ListedNav from '../../asif/ListedNav';
import { Outlet } from 'react-router-dom';

const ListedLayouts = () => {
    return (
        <div>
            <ListedNav></ListedNav>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedLayouts;