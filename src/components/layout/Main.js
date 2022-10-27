import React from 'react';
import Header from '../sections/Header';
import Content from '../sections/Content';
import Footer from '../sections/Footer';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Main = () => {
    const { theme } = useContext(AuthContext);
    
    return (
        <div className='w-full' data-theme={theme}>
            <div className='w-10/12 mx-auto'>
                <Header></Header>
                <Content></Content>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;