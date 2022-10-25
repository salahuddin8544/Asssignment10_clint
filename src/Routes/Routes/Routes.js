import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Share/Home/Home";
import Main from "../../layout/Main";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])