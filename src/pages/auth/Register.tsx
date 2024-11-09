import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../config/routes";
import {
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/slices/authSlice"; // Adjust the import path as necessary
import { useSelector } from "react-redux";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector(
    (state: { auth: { error: any } }) => state.auth.error
  ); // Access error from auth state

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      allowExtraEmails: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required."),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required."),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters long.")
        .required("Password is required."),
    }),
    onSubmit: (values) => {
      // Dispatch the registerUser  thunk
      // @ts-ignore
      dispatch(registerUser({ 
        fullName: values.name, 
        email: values.email, 
        password: values.password 
      })).then((action: any) => {
        if (registerUser.fulfilled.match(action)) {
          // If registration is successful, navigate to the dashboard
          navigate(ROUTES.LOGIN);
        }
      });
    },
  });

  return (
    <Box className="flex flex-col justify-between h-screen p-4 sm:p-8 bg-gradient-to-r from-blue-100 to-white dark:from-gray-800 dark:to-gray-900">
      <Box className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <Typography variant="h4" component="h1" align="center">
          Sign up
        </Typography>
        {error && (
          <Typography color="error" align="center">
            {error}
          </Typography>
        )}
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-4 w-full mt-4"
        >
          <FormControl fullWidth variant="outlined">
            <TextField
              id="name"
              name="name"
              label="Full Name"
              variant="outlined"
              required
              placeholder="Jon Snow"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              required
              placeholder="your@email.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                id="allowExtraEmails"
                name="allowExtraEmails"
                onChange={formik.handleChange}
                checked={formik.values.allowExtraEmails}
              />
            }
            label="I want to receive updates via email."
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full"
          >
            Sign up
          </Button>
          <Typography variant="body2" align="center">
            Already have an account?{" "}
            <a
              onClick={() => navigate(ROUTES.LOGIN)}
              className="text-blue-500 cursor-pointer hover:text-blue-600 dark:text-blue-800 dark:hover:text-blue-900"
            >
              Sign in
            </a>
          </Typography>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
