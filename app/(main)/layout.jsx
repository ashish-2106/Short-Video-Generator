import React from 'react'
import DashboardProvider from './provider'

function layout({ children }) {
    return (
        <div>
            <DashboardProvider>
                {children}
            </DashboardProvider>

        </div>
    )
}

export default layout
