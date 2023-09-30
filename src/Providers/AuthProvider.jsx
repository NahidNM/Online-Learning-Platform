
import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
   
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [reload, setReload] =useState(0);
    // const [darkmod, setDarkmod] = useState(false)

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            // setUser(currentUser);
            
            // get and set token
            if(currentUser){
                axios.post('http://localhost:4000/jwt', {email: currentUser.email})
                .then(data =>{
                    console.log(data.data.token)
                    localStorage.setItem('access-token', data.data.token)
                    setUser(currentUser);
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('access-token')
                // setUser(null);
                setLoading(false)
            }
            // setLoading(false)
            
        });
        return () => {
            return unsubscribe();
        }
    }, [reload])

    // useEffect(()=>{
    //     const unsubscribe = onAuthStateChanged(auth, (loggedUser)=>{
    //         // console.log('obser logged', loggedUser)
    //         setLoading(false)
    //         setUser(loggedUser)
    //     })
    //     return () =>{
    //         unsubscribe()
    //     }
    // }, [reload])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile,
        setReload,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
    
           {children}
          
        </AuthContext.Provider>
    );

};

export default AuthProvider;