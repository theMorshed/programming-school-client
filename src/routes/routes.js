import { createBrowserRouter } from "react-router-dom";
import Main from '../components/layout/Main';
import Home from '../components/pages/Home';
import Courses from '../components/pages/Courses';
import Login from '../components/pages/Login';
import Register from '../components/pages/Register';
import Checkout from '../components/pages/Checkout';
import ErrorPage from "../components/pages/ErrorPage";
import CourseDetails from "../components/sections/CourseDetails";
import PrivateRoute from "../components/route/PrivateRoute";
import Blog from "../components/pages/Blog";

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
                loader: () => fetch('https://programming-school-server.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`https://programming-school-server.vercel.app/course/${params.id}`),
                element: <CourseDetails></CourseDetails>
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
                path: '/checkout/:id',
                loader: ({ params }) => fetch(`https://programming-school-server.vercel.app/course/${params.id}`),
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },            
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])