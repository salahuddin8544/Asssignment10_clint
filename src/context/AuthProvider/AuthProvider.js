import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from'firebase/auth';
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true)
const GoogleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const googleSignIn =()=>{
    setLoading(true)
 return  signInWithPopup(auth,GoogleProvider)
}
const githubSignIn =()=>{
    setLoading(true)
 return  signInWithPopup(auth,githubProvider)
}
const signIn =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
const logOut=()=>{
    setLoading(true)
   return signOut(auth)
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currrentUser)=>{
        setUser(currrentUser)
        setLoading(false)
    });
    return ()=>{
        unsubscribe();
    }
})
    const authInfo= {
        user,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        githubSignIn,
        loading

    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;