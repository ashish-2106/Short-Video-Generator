"use client"
import React, { Children } from 'react'
import Provider from './provider'
import { ConvexProvider, ConvexReactClient } from "convex/react";

function ConvexClientProvider({ children }) {  // ✅ Fixed

    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
    return (
        <ConvexProvider client={convex}>
            <Provider>
                {console.log("Rendering children in ConvexClientProvider:", children)}
                {children ? children : <p>⚠ No children provided ⚠</p>} {/* Debug */}
            </Provider>
        </ConvexProvider>
    );
    
}

export default ConvexClientProvider
