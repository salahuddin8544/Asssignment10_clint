import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Share/Blog/Blog";
import Category from "../../components/Share/Category/Category";
import CheckOut from "../../components/Share/CheckOUt/CheckOut";
import Courses from "../../components/Share/Courses/Courses";
import Faq from "../../components/Share/Faq/Faq";
import Home from "../../components/Share/Home/Home";
import Login from "../../components/Share/Login/Login";
import Register from "../../components/Share/Register/Register";
import Main from "../../layout/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/course')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/course/:id',
                element:<Courses></Courses>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/checkout/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            }
            
        ]
    },
    {
        path:'/*',
        element: <h3 className="text-center">4o4 Data not Found</h3>
    }
])