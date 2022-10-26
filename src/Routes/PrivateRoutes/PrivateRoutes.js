import React,{useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';
const PrivateRoutes = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    }
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children
};

export default PrivateRoutes;