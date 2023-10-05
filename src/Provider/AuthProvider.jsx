
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';



export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)

// create user
    const createUser = (email,pass) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    // sigin in user

    const login = (email,pass) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }

    // current user
 useEffect(()=>{
    setLoading(false)
     return onAuthStateChanged(auth,(current) =>{
        setUser(current)
     })
 },[])

//  logOut 

const logOut = () =>{
    setLoading(true)
   return signOut(auth)
}
    const info = {
        createUser,
        login,
        user,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;