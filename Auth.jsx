import React from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

const Auth = () => {
    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
    };

    return (
        <div>
            <button onClick={handleGoogleLogin}>Sign In with Google</button>
            <button onClick={handleLogout}>Sign Out</button>
        </div>
    );
};

export default Auth;