import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, LinearProgress } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Formik, Form, Field } from 'formik';
import { TextField, Select, SimpleFileUpload } from 'formik-mui';
import { height } from '@mui/system';

interface Values {
  email: string;
  password: string;
  confirmpassword: string;
  level: string;
  department: string;
  faculty: string
}

const EditProfileForm = ({setOpen} : {setOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
      <Formik
              initialValues={{
                email: '',
                password: '',
                confirmpassword: '',
                level: '',
                department: '',
                faculty: ''
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
                if (!values.department) {
                  errors.department = 'Required';
                }
                if (!values.faculty) {
                  errors.faculty = 'Required';
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
                  <Box component='div' sx={{width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", boxSizing: "border-box", mt: "20px"}}>
                  {/* <Field sx={{width: "100px", height: "100px", backgroundColor: "primary"}} component={SimpleFileUpload} name="file" label="Simple File Upload" /> */}
                  <Field
                    component={TextField}
                    name="email"
                    type="email"
                    label="Email"
                    sx={{width: "100%", marginBottom: "20px"}}
                  />
                  {/* <br /> */}
                  <Field
                    component={TextField}
                    type="password"
                    label="Password"
                    name="password"
                    sx={{width: "100%", marginBottom: "20px"}}
                  />
                  <Field
                    component={TextField}
                    type="password"
                    label="Confirm Password"
                    name="confirmpassword"
                    sx={{width: "100%", marginBottom: "20px"}}
                  />
                  <Field
                    component={Select}
                    formControl={{ sx: {width: "100%"} }}
                    sx={{width: "100%", marginBottom: "20px"}}
                    formHelperText={{ level: 'Level' }}
                    id="level"
                    name="level"
                    labelId="level-simple"
                    label="Level"
                    validate={(age: number) =>
                      !age
                        ? 'Please enter your level'
                        : undefined
                    }
                  >
                    <MenuItem value={100}>100 Level</MenuItem>
                    <MenuItem value={200}>200 Level</MenuItem>
                    <MenuItem value={300}>300 Level</MenuItem>
                    <MenuItem value={400}>400 Level</MenuItem>
                    <MenuItem value={500}>500 Level</MenuItem>
                  </Field>
                  <Field
                    component={TextField}
                    type="text"
                    label="Department"
                    name="department"
                    sx={{width: "100%", marginBottom: "20px"}}
                  />
                  <Field
                    component={TextField}
                    type="text"
                    label="Faculty"
                    name="faculty"
                    sx={{width: "100%"}}
                  />
                  {isSubmitting && <LinearProgress />}
                  <br />
                  <Box>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                      onClick={submitForm}
                      sx={{ padding: '15px 20px'}}
                    >
                      Save Changes
                    </Button>
                    <Button
                      onClick={() => setOpen(false)}
                      variant="outlined"
                      color="primary"
                      sx={{ padding: '15px 35px', ml: "25px"}}
                    >
                      Cancel
                    </Button>
                  </Box>
                  </Box>
                </Form>
              )}
            </Formik>
  );
};

export default EditProfileForm;
