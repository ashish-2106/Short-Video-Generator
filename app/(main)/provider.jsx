import React from 'react'
import { SidebarProvider } from "@/components/ui/sidebar"
import AppSideBar from './_components/AppSidebar'

function DashboardProvider({ children }) {
  return (
    <SidebarProvider>
      <AppSideBar />
      <div>
        {children}
      </div>
    </SidebarProvider>
  )
}

export default DashboardProvider