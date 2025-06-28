"use client"
import React, { useEffect, useState, useContext } from 'react';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '@/configs/FirebaseConfig';
import { AuthContext } from './_context/AuthContext';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function Provider({ children }) {
    const [user, setUser] = useState(null);
    const CreateUser = useMutation(api.users.createNewUser);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            console.log("Authenticated user:", firebaseUser);

            if (firebaseUser) {
                const result = await CreateUser({
                    name: firebaseUser.displayName,
                    email: firebaseUser.email,
                    pictureURL: firebaseUser.photoURL
                });
                console.log("User created:", result);
                setUser(result);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    // ✅ Add this logout function
    const signOut = () => {
        firebaseSignOut(auth)
            .then(() => {
                setUser(null);  // Clear user from context
                console.log("User signed out");
            })
            .catch((error) => {
                console.error("Sign out error", error);
            });
    };

    return (
        <AuthContext.Provider value={{ user, setUser, signOut }}>
            <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>
                <NextThemesProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children ? children : <p>⚠ No children provided ⚠</p>}
                </NextThemesProvider>
            </PayPalScriptProvider>
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthContext.Provider");
    }
    return context;
};

export default Provider;
