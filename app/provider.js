"use client"
import React, { useEffect, useState, useContext } from 'react';
import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '@/configs/FirebaseConfig';
// import { AuthContext } from './_context/AuthContext';

import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/configs/FirebaseConfig';
import { AuthContext } from './_context/AuthContext';



function Provider({ children }) {
    const [user, setUser] = useState(null);
    const CreateUser = useMutation(api.users.createNewUser);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            console.log("Authenticated user:", user);
            

            const result = await CreateUser({
                name: user?.displayName,
                email: user?.email,
                pictureURL: user?.photoURL
            });
            console.log("User created:", result);
            setUser(result);
        })

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            <NextThemesProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {console.log("Rendering children in Provider:", children)}
                {children ? children : <p>⚠ No children provided ⚠</p>} {/* Debug */}
            </NextThemesProvider>
        </AuthContext.Provider>
    );
    
}

// Custom Hook for Authentication Context
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthContext.Provider");
    }
    return context;
};

export default Provider;
