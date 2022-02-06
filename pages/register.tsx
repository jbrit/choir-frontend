import type { NextPage } from "next";
import * as React from 'react';
import Link from 'next/link'
import Head from "next/head";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, LinearProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';

interface Values {
  email: string;
  password: string;
}

const Register: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Register | Tabernacle of Psalms</title>
        <meta name="description" content="Tabernacle of Psalms, Choir Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid sx={{minHeight: "100vh"}} container spacing={0}>
        <Grid item xs={12} md={6} lg={5} sx={{alignItems: "center"}}>
          {/* <Box component='div' py={4} sx={{width: "100%", minHeight: "100%", display: "flex", alignItems: "center"}}> */}
            <Formik
              initialValues={{
                email: '',
                password: '',
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
                  <Box component='div' py={4} px={8} sx={{width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", boxSizing: "border-box"}}>
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
                  {isSubmitting && <LinearProgress />}
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    sx={{width: "100%"}}
                  >
                    Sign up
                  </Button>
                  <Link passHref href='/login'>
                    <Box component="a" sx={{alignSelf:"items-start"}} >
                      <Typography mt={6} color="black">
                        Already have an account? Login here
                      </Typography>
                    </Box>
                  </Link>
                  </Box>
                </Form>
              )}
            </Formik>
          {/* </Box> */}
        </Grid>
        <Grid item xs={0} md={6} lg={7}>
          <Box component='div' sx={{backgroundImage: 'url(./choir1.jpg)', width: "100%", minHeight: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", position: "relative"}} >
            <Box component='div' sx={{position: "absolute", top: 0, left: 0, bgcolor: 'primary.main', opacity: 0.4, width: "100%", minHeight: "100%"}} ></Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
