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

interface Values {
  email: string;
  password: string;
  confirmpassword: string;
}

const Register: NextPage = () => {
  const matches1366 = useMediaQuery('(min-width:1366px)');
  const matches496 = useMediaQuery('(max-width:496px)');
  return (
    <div>
      <Head>
        <title>Register | Tabernacle of Psalms</title>
        <meta name="description" content="Tabernacle of Psalms, Choir Page" />
      </Head>
      <Grid sx={{minHeight: "100vh"}} container spacing={0}>
        <Grid item xs={12} md={6} lg={5} py={4} px={matches496 ? 2 : matches1366 ? 8 : 4} sx={{alignItems: "center"}}>
          <Box sx={{position: "relative", width: "187px", height: "70px"}}>
            <Image src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1644112543/choir-register_rwgvxe.jpg" objectFit="cover" layout="fill" alt="" />
          </Box>
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
                if (!values.confirmpassword) {
                  errors.confirmpassword = 'Required';
                }
                if (values.password !== values.confirmpassword) {
                  errors.confirmpassword = 'Passwords must match';
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
                  <Typography lineHeight={1} color="primary" variant="h2" component="h1" mb={8} sx={{alignSelf: 'flex-start'}} gutterBottom>Register an account</Typography>
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
                  <Field
                    component={TextField}
                    type="password"
                    label="Confirm Password"
                    name="confirmpassword"
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
                    Sign up
                  </Button>
                  <Link passHref href='/login'>
                    <Box component="a" sx={{alignSelf:"items-start"}} >
                      <Typography mt={3} color="black">
                        Already have an account? Sign in
                      </Typography>
                    </Box>
                  </Link>
                  </Box>
                </Form>
              )}
            </Formik>
        </Grid>
        <Grid item xs={0} md={6} lg={7}>
          <Box component='div' sx={{backgroundImage: 'url(./choir-register.jpg)', width: "100%", minHeight: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", position: "relative", display: "flex", alignItems: "center"}} >
            <Box component='div' sx={{position: "absolute", top: 0, left: 0, bgcolor: 'primary.main', opacity: 0.4, width: "100%", minHeight: "100%"}} ></Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
