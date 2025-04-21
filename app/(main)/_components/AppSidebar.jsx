"use client";
import React from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Gem, HomeIcon, LucideFileVideo, Search, WalletCards } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthContext } from "@/app/provider";

const MenuItems = [
    {
        title: "Home",
        icon: HomeIcon,
        link: "/dashboard",
    },
    {
        title: "Create New Video",
        icon: LucideFileVideo,
        link: "/create-new-video", 
    },
    {
        title: "Explore",
        icon: Search,
        link: "/explore",
    },
    {
        title: "Billing",
        icon: WalletCards,
        link: "/billing",
    },
];

function AppSideBar() {
    const path = usePathname();
    const { user } = useAuthContext();

    return (
        <div>
            <Sidebar>
                <SidebarHeader />
                <div>
                    <div className="flex items-center gap-3 width-full justify-center p-3">
                        <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
                        <h2 className="font-bold text-2xl">Video Gen</h2>
                    </div>
                    <h2 className="text-lg text-gray-400 text-center mt-2">
                        AI Short Video Generator
                    </h2>
                </div>
                <SidebarContent>
                    <SidebarGroup />
                    <div className="mx-3 mt-5">
                        <Link href={'/create-new-video'}>
                        <Button className="w-full">+ Create New Video</Button>
                        </Link>
                    </div>
                    <SidebarMenu>
                        {MenuItems.map((menu, index) => (
                            <SidebarMenuItem key={index} className="mt-3 mx-3">
                                <SidebarMenuButton
                                    isActive={path == menu.link} // ✅ Fixed `isActive`
                                    className="p-5"
                                >
                                    <Link href={menu?.link} className="flex items-center gap-4 p-3">
                                        <menu.icon />
                                        <span>{menu?.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>

                    <SidebarGroup />
                </SidebarContent>
                <SidebarFooter>
                    <div className="p-5 border rounded-lg mb-6 bg-gray-800">
                    <div className="flex items-center justify-between">
                        <Gem className="text-gray-400"/>
                        <h2 className="text-gray-400">{user?.credits} credits Left</h2>
                    </div>
                    <Link href={'/billing'}>
                    <Button className='w-full mt-5'>Buy More Credits</Button>
                    </Link>
                    
                    </div>
                </SidebarFooter>
            
            </Sidebar>
        </div>
    );
}

export default AppSideBar;
