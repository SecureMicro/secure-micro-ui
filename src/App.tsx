import React, { Suspense, lazy } from 'react'
import { ThemeProvider } from '@mui/material'
import './App.css'
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import store from './store'
import 'react-toastify/ReactToastify.css'
import DashboardLayout from './components/layouts/DashboardLayout'
import { ROUTES } from './config/routes'
import { lightTheme } from './config/theme'
import ErrorBoundary from './Errorboundary'

const Login = lazy(() => import('./pages/auth/Login'))
const Register = lazy(() => import('./pages/auth/Register'))
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))
const Services = lazy(() => import('./pages/services/Services'))
const Configurations = lazy(
    () => import('./pages/configurations/Configurations')
)
const Users = lazy(() => import('./pages/users/Users'))
const Settings = lazy(() => import('./pages/settings/Settings'))
const Profile = lazy(() => import('./pages/profile/Profile'))

const renderLoader = () => <p>Loading...</p>

const App: React.FC = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Provider store={store}>
                <Router>
                    <ErrorBoundary>
                        <Suspense fallback={renderLoader()}>
                            <Routes>
                                <Route
                                    path={ROUTES.LOGIN}
                                    element={<Login />}
                                />
                                <Route
                                    path={ROUTES.REGISTER}
                                    element={<Register />}
                                />

                                {/* Protected Routes */}
                                <Route element={<DashboardLayout />}>
                                    <Route
                                        path={ROUTES.DASHBOARD}
                                        element={<Dashboard />}
                                    />
                                    <Route
                                        path={ROUTES.SERVICES}
                                        element={<Services />}
                                    />
                                    <Route
                                        path={ROUTES.CONFIGURATIONS}
                                        element={<Configurations />}
                                    />
                                    <Route
                                        path={ROUTES.USERS}
                                        element={<Users />}
                                    />
                                    <Route
                                        path={ROUTES.SETTINGS}
                                        element={<Settings />}
                                    />
                                    <Route
                                        path={ROUTES.PROFILE}
                                        element={<Profile />}
                                    />
                                </Route>

                                {/* Redirect unmatched routes to dashboard */}
                                <Route
                                    path="*"
                                    element={
                                        <Navigate to={ROUTES.LOGIN} replace />
                                    }
                                />
                            </Routes>
                        </Suspense>
                    </ErrorBoundary>
                </Router>
            </Provider>
        </ThemeProvider>
    )
}

export default App
