"use client";

import { useAuthContext } from "@/app/provider";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import React from "react";

function AppHeader() {
    const { user } = useAuthContext();

    return (
        <div className="flex justify-between items-center p-3">
            <SidebarTrigger />
            {user?.pictureURL ? (
                <Image
                    src={user.pictureURL}
                    alt="user"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
            ) : (
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    {/* Default avatar (optional) */}
                    <span className="text-gray-600">?</span>
                </div>
            )}
        </div>
    );
}

export default AppHeader;
