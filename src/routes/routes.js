import { createBrowserRouter } from "react-router-dom";
import Main from '../components/layout/Main';
import Home from '../components/pages/Home';
import Courses from '../components/pages/Courses';
import Login from '../components/pages/Login';
import Register from '../components/pages/Register';
import Checkout from '../components/pages/Checkout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout',
                element: <Checkout></Checkout>
            }
        ]
    }
])