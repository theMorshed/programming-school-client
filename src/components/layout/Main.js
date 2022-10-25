import React from 'react';
import Header from '../sections/Header';
import Content from '../sections/Content';
import Footer from '../sections/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Header></Header>
            <Content></Content>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;