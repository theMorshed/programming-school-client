import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const selectedCourse = useLoaderData();
    const { title, price } = selectedCourse;
    const handleSuccess = () => {
        toast.success("You have purchase this course successfully.. Thanks");
    }
    return (
        <div className='text-center my-10'>
            <h2 className='text-3xl underline underline-offset-2'>Congrats! You Have Selected: <span className='text-primary'>{title}</span></h2>
            <p className='text-xl py-2'>Total Price is: ${price}</p>
            <button onClick={handleSuccess} className='btn btn-primary mt-3'>For Full Access click here</button>
            <Toaster></Toaster>
        </div>
    );
};

export default Checkout;