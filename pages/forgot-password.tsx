import type { NextPage } from "next";
import * as React from 'react';
import Link from 'next/link'
import Head from "next/head";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, LinearProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import AuthPage from '../layouts/AuthPage'

interface Values {
  email: string;
}

const ForgotPassword: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Forgot password | Tabernacle of Psalms</title>
        <meta name="description" content="Type your email to reset password" />
      </Head>
      <AuthPage cover="https://res.cloudinary.com/dexg5uy3d/image/upload/v1644112302/choir3_kbp7ah.jpg">
      <Formik
              initialValues={{
                email: ''
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
                  <Typography lineHeight={1} color="primary" variant="h2" component="h1" mb={1} gutterBottom>Forgot Password?</Typography>
                  <Typography lineHeight={1} color="black" variant="body1" component="p" mb={8} gutterBottom>Type your email to reset password</Typography>
                  <Field
                    component={TextField}
                    name="email"
                    type="email"
                    label="Email"
                    sx={{width: "100%"}}
                  />
                  <br />
                  {isSubmitting && <LinearProgress />}
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    sx={{width: "100%", padding: '15px 5px'}}
                  >
                    Reset
                  </Button>
                  <Link passHref href='/login'>
                    <Box component="a" sx={{alignSelf:"items-start"}} >
                      <Typography mt={3} color="black">
                        Remember password ? Login
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

export default ForgotPassword;
