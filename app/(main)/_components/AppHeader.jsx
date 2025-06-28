"use client";

import { useAuthContext } from "@/app/provider";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Add this

function AppHeader() {
    const { user, signOut } = useAuthContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter(); // ✅ Initialize router

    const handleSignOut = () => {
        signOut();
        setIsMenuOpen(false);
        router.push("/"); // ✅ Redirect after logout
    };

    return (
        <div className="flex justify-between items-center p-3">
            <SidebarTrigger />
            <div className="relative">
                {user?.pictureURL ? (
                    <Image
                        src={user.pictureURL}
                        alt="user"
                        width={40}
                        height={40}
                        className="rounded-full cursor-pointer"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    />
                ) : (
                    <div
                        className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        <span className="text-gray-600">?</span>
                    </div>
                )}

                {isMenuOpen && (
                    <div className="absolute right-0 mt-2 bg-white text-black border rounded-2xl shadow-lg w-32">
                        <button
                            className="w-full py-2 text-left px-4 text-black hover:bg-black hover:text-white "
                            onClick={handleSignOut}
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AppHeader;
