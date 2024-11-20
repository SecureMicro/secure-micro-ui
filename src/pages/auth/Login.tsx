import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../config/routes'
import { TextField, FormControl, Button, Typography, Box } from '@mui/material'
import { loginUser, addUser } from '../../store/slices/authSlice'
import { useDispatch } from 'react-redux'

const Login: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required.'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters long.')
                .required('Password is required.'),
        }),
        onSubmit: (values) => {
            // @ts-ignore
            dispatch(
                loginUser({
                    email: values.email,
                    password: values.password,
                })
            ).then((action: any) => {
                console.log('actionss', action)
                if (loginUser.fulfilled.match(action)) {
                    // If login is successful, navigate to the dashboard
                    navigate(ROUTES.DASHBOARD)
                    // dispatch(addUser(action))
                }
            })
        },
    })

    return (
        <Box className="flex flex-col justify-between h-screen p-4 sm:p-8 bg-gradient-to-r from-blue-100 to-white dark:from-gray-800 dark:to-gray-900">
            <Box className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <Typography variant="h4" component="h1" align="center">
                    Sign in to SecureMicro
                </Typography>
                <form
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col gap-4 w-full mt-4"
                >
                    <FormControl fullWidth variant="outlined">
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            variant="outlined"
                            required
                            placeholder="your@email.com"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            error={
                                formik.touched.email &&
                                Boolean(formik.errors.email)
                            }
                            helperText={
                                formik.touched.email && formik.errors.email
                            }
                        />
                    </FormControl>
                    <FormControl fullWidth variant="outlined">
                        <TextField
                            id="password"
                            name="password"
                            label="Password"
                            variant="outlined"
                            required
                            placeholder="••••••"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            error={
                                formik.touched.password &&
                                Boolean(formik.errors.password)
                            }
                            helperText={
                                formik.touched.password &&
                                formik.errors.password
                            }
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="w-full"
                    >
                        Sign in
                    </Button>
                    <Typography variant="body2" align="center">
                        Don't have an account?{' '}
                        <a
                            onClick={() => navigate(ROUTES.REGISTER)}
                            className="text-blue-500 cursor-pointer hover:text-blue-600 dark:text-blue-800 dark:hover:text-blue-900"
                        >
                            Sign up
                        </a>
                    </Typography>
                </form>
            </Box>
        </Box>
    )
}

export default Login
