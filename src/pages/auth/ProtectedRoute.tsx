import { Navigate } from 'react-router-dom'
import { ROUTES } from '../../config/routes'
import React from 'react'

interface ProtectedRouteProps {
    children: React.ReactNode
}

const ProtectedRoutes = ({ children }: ProtectedRouteProps) => {
    const isAuthenticated = false
    return isAuthenticated ? (
        <>{children}</>
    ) : (
        <Navigate to={ROUTES.LOGIN} replace />
    )
}

export default ProtectedRoutes
