import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import ProtectedRoutes from '../../pages/auth/ProtectedRoute'

const DashboardLayout: React.FC = () => {
    console.log('test')
    return (
        <ProtectedRoutes>
            <div className="min-h-screen bg-gray-50">
                <Sidebar />
                <Header />
                <main className="ml-64 pt-16 p-6">
                    <Outlet />
                </main>
            </div>
        </ProtectedRoutes>
    )
}

export default DashboardLayout
