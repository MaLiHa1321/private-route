
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';



export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

// create user
    const createUser = (email,pass) =>{
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    // sigin in user

    const login = (email,pass) =>{
        return signInWithEmailAndPassword(auth,email,pass)
    }

    // current user
 useEffect(()=>{
     return onAuthStateChanged(auth,(current) =>{
        setUser(current)
     })
 },[])

//  logOut 

const logOut = () =>{
   return signOut(auth)
}
    const info = {
        createUser,
        login,
        user,
        logOut
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;