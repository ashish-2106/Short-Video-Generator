"use client"
import React, { useEffect } from 'react'
import { SidebarProvider } from "@/components/ui/sidebar"
import AppSideBar from './_components/AppSidebar'
import AppHeader from './_components/AppHeader'
import { useAuthContext } from '../provider';
import { useRouter } from 'next/navigation';


function DashboardProvider({ children }) {
  const { user } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    user && ChechedUserAuthenticated();
  }
    , [user]);

  const ChechedUserAuthenticated = () => {
    if (!user) {
      router.replace('/');
    }
  }
  return (
    <SidebarProvider>
      <AppSideBar />
      <div className='w-full'>
        <AppHeader />
        <div className='p-10'>
          {children}
        </div>

      </div>
    </SidebarProvider>
  )
}

export default DashboardProvider