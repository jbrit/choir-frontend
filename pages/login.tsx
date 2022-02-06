import type { NextPage } from "next";
import * as React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Head from "next/head";
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, LinearProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import AuthPage from '../layouts/AuthPage'

interface Values {
  email: string;
  password: string
}

const Login: NextPage = () => {
  const matches1366 = useMediaQuery('(min-width:1366px)');
  const matches496 = useMediaQuery('(max-width:496px)');
  return (
    <div>
      <Head>
        <title>Login | Tabernacle of Psalms</title>
        <meta name="description" content="Tabernacle of Psalms, Login Page" />
      </Head>
      <AuthPage cover="https://res.cloudinary.com/dexg5uy3d/image/upload/v1644112536/choir-login_j4pope.jpg">
      <Formik
              initialValues={{
                email: '',
                password: '',
                confirmpassword: ''
              }}
              validate={(values) => {
                const errors: Partial<Values> = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                if (!values.password) {
                  errors.password = 'Required';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(true);
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 500);
              }}
            >
              {({ submitForm, isSubmitting }) => (
                <Form>
                  <Box component='div' sx={{width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", boxSizing: "border-box", minHeight: "calc(100vh - 150px)"}}>
                  <Typography lineHeight={1} color="primary" variant="h2" component="h1" mb={1} gutterBottom>Login to your account</Typography>
                  <Typography lineHeight={1} color="black" variant="body1" component="p" mb={8} gutterBottom>Login to manage your choir activities</Typography>
                  <Field
                    component={TextField}
                    name="email"
                    type="email"
                    label="Email"
                    sx={{width: "100%", marginBottom: "20px"}}
                  />
                  <br />
                  <Field
                    component={TextField}
                    type="password"
                    label="Password"
                    name="password"
                    sx={{width: "100%", marginBottom: "20px"}}
                  />
                  <br />
                  <Link passHref href='/forgot-password'>
                    <Box component="a" sx={{alignSelf:"items-start"}} >
                      <Typography color="primary">
                        Forgot your password?
                      </Typography>
                    </Box>
                  </Link>
                  {isSubmitting && <LinearProgress />}
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    sx={{width: "100%", padding: '15px 5px'}}
                  >
                    Login
                  </Button>
                  <Link passHref href='/register'>
                    <Box component="a" sx={{alignSelf:"items-start"}} >
                      <Typography mt={3} color="black">
                        Don&apos;t have an account? Sign up
                      </Typography>
                    </Box>
                  </Link>
                  </Box>
                </Form>
              )}
            </Formik>
      </AuthPage>
    </div>
  );
};

export default Login;
