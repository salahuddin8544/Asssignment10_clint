import { createBrowserRouter } from "react-router-dom";
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
                path:'/',
                element:<Home></Home>
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