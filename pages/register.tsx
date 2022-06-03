import type { NextPage } from "next";
import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, LinearProgress } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import AuthPage from "../layouts/AuthPage";
import { register } from "../actions/auth";
import { redirectLoggedIn, ErrorResponse, getErrorMessage } from "../utils/utils";
import Swal from "sweetalert2";

interface Values {
  name: string;
  email: string;
  regNo: number | string;
  password: string;
  confirmpassword: string;
}

const Register: NextPage = () => {
  redirectLoggedIn();
  return (
    <div>
      <Head>
        <title>Register | Tabernacle of Psalms</title>
        <meta name="description" content="Tabernacle of Psalms, Choir Page" />
      </Head>
      <AuthPage cover="https://res.cloudinary.com/dexg5uy3d/image/upload/v1644112543/choir-register_rwgvxe.jpg">
        <Formik
          initialValues={{
            email: "",
            regNo: "",
            name: "",
            password: "",
            confirmpassword: "",
          }}
          validate={(values) => {
            const errors: Partial<Values> = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (!/^[A-Z0-9._%+-]+@lmu.edu.ng$/i.test(values.email)) {
              errors.email = "Invalid Webmail";
            }
            if (!values.regNo) {
              errors.regNo = "Required";
            } else if (!/^[0-9]{7}$/i.test(values.regNo)) {
              errors.regNo = "Invalid Reg No Format";
            }
            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 8) {
              errors.password =
                "Your password should contain at least 8 characters";
            }
            if (!values.confirmpassword) {
              errors.confirmpassword = "Required";
            }
            if (values.password !== values.confirmpassword) {
              errors.confirmpassword = "Passwords must match";
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            try {
              const res = await register(
                values.name,
                parseInt(values.regNo),
                values.email,
                values.password,
                values.confirmpassword
              );
              alert("Success, check mail")
            } catch (error) {
              Swal.fire(
                "Registration Error",
                getErrorMessage(error as ErrorResponse) ??
                  "Could not register the user.",
                "error"
              );
            }
            setSubmitting(false);
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form>
              <Box
                component="div"
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  boxSizing: "border-box",
                  minHeight: "calc(100vh - 150px)",
                }}
              >
                <Typography
                  lineHeight={1}
                  color="primary"
                  variant="h2"
                  component="h1"
                  mb={1}
                  gutterBottom
                >
                  Register an account
                </Typography>
                <Typography
                  lineHeight={1}
                  color="black"
                  variant="body1"
                  component="p"
                  mb={8}
                  gutterBottom
                >
                  Sign up to manage your choir activities
                </Typography>
                <Field
                  component={TextField}
                  name="name"
                  type="text"
                  label="Full Name"
                  sx={{ width: "100%", marginBottom: "20px" }}
                />
                <br />
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                  sx={{ width: "100%", marginBottom: "20px" }}
                />
                <br />
                <Field
                  component={TextField}
                  name="regNo"
                  type="number"
                  label="Reg No. (e.g. 1800447)"
                  sx={{ width: "100%", marginBottom: "20px" }}
                />
                <br />
                <Field
                  component={TextField}
                  type="password"
                  label="Password"
                  name="password"
                  sx={{ width: "100%", marginBottom: "20px" }}
                />
                <br />
                <Field
                  component={TextField}
                  type="password"
                  label="Confirm Password"
                  name="confirmpassword"
                  sx={{ width: "100%" }}
                />
                <br />
                {isSubmitting && <LinearProgress />}
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                  sx={{ width: "100%", padding: "15px 5px" }}
                >
                  {isSubmitting ? "Signing up..." : "Sign up"}
                </Button>
                <Link passHref href="/login">
                  <Box component="a" sx={{ alignSelf: "items-start" }}>
                    <Typography mt={3} color="black">
                      Already have an account? Sign in
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

export default Register;
