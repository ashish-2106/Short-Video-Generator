import React from 'react'
import DashboardProvider from './provider'
import { Toaster } from 'react-hot-toast'

function layout({ children }) {
    return (
        <div>
            <DashboardProvider>
                <Toaster
                    toastOptions={{
                        style: {
                            background: '#1a202c', // Dark theme background
                            color: '#f7fafc',      // Light text color
                        }
                    }}
                    position="top-center"
                    reverseOrder={true}
                />
                {children}
            </DashboardProvider>

        </div>
    )
}

export default layout
