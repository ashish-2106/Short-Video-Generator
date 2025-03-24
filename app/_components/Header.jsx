"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect } from "react";
import Authentication from "./Authentication";
import { useAuthContext } from "../provider";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {
    const { user } = useAuthContext();
    const router = useRouter();

    // Redirect to dash
    // board if user is authenticated
    useEffect(() => {
        if (user) {
            router.push("/dashboard");
        }
    }, [user, router]);

    return (
        <div className="p-8 flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
                <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
                <h1 className="text-2xl font-bold">Video Gen</h1>
            </div>

            {/* Authentication Section */}
            <div>
                {!user ? (
                    <Authentication>
                        <Button className="bg-white text-black">Get Started</Button>
                    </Authentication>
                ) : (
                    <div className="flex items-center gap-3">
                        <Link href={"/dashboard"}>
                            <Button className="bg-white text-black">Dashboard</Button>
                        </Link>
                        {user?.photoURL && (
                            <Image
                                src={user?.photoURL}
                                alt="user"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
