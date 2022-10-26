import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from'firebase/auth';
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
const GoogleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
const googleSignIn =()=>{
 return  signInWithPopup(auth,GoogleProvider)
}
const githubSignIn =()=>{
 return  signInWithPopup(auth,githubProvider)
}
const signIn =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
const logOut=()=>{
   return signOut(auth)
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currrentUser)=>{
        setUser(currrentUser)
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
        githubSignIn

    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;