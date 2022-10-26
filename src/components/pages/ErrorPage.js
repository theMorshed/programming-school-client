import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <p className='text-3xl my-10 font-semibold text-primary'>404 Not Found! Please try anothe route</p>
        </div>
    );
};

export default ErrorPage;