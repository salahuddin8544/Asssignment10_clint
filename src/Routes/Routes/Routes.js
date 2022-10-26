import { createBrowserRouter } from "react-router-dom";
import Category from "../../components/Share/Category/Category";
import Home from "../../components/Share/Home/Home";
import Login from "../../components/Share/Login/Login";
import Register from "../../components/Share/Register/Register";
import Main from "../../layout/Main";


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
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])