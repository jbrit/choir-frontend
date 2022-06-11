import * as React from "react";
import Box from "@mui/material/Box";
import { Alert, Button, LinearProgress } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MTextField from "@mui/material/TextField";
import { TextField, Select } from "formik-mui";
import { useQuery } from "react-query";
import { fillBiodata, getBiodata, Biodata } from "../actions/auth";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { getErrorMessage, ErrorResponse } from "../utils/utils";
import moment from "moment";
import Swal from "sweetalert2";
// import { Snackbar } from "@mui/material";

const EditProfileForm = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const biodataQuery = useQuery("biodata", getBiodata);

  // const [openModal, setOpenModal] = React.useState(true);
  // const handleClick = () => {
  //   setOpenModal(true);
  // };
  // const handleClose = (
  //   event?: React.SyntheticEvent | Event,
  //   reason?: string
  // ) => {
  //   setOpenModal(false);
  // };
  // <Snackbar open={openModal} autoHideDuration={6000} message="This is a message">
  //   <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
  //     This is a success message!
  //   </Alert>
  // </Snackbar>;

  return (
    <Formik
      initialValues={
        biodataQuery.data ?? {
          name: "",
          email: "",
          level: "",
          department: "",
          matric_no: "",
          reg_no: "",
          birthday: null,
        }
      }
      validate={(values) => {
        const errors: Partial<any> = {};
        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.birthday) {
          errors.birthday = "Required";
        }
        if (!values.reg_no) {
          errors.reg_no = "Required";
        }
        if (!values.matric_no) {
          errors.matric_no = "Required";
        }
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.department) {
          errors.department = "Required";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const valuesToSubmit = {
          level: values.level,
          department: values.department,
          part: (values as Biodata).part,
          matric_no: values.matric_no,
          birthday: moment(values.birthday).format("YYYY-MM-DD"),
          gender: (values as Biodata).gender,
          name: values.name,
        };
        try {
          await fillBiodata(valuesToSubmit as Biodata);
          await biodataQuery.refetch();
          setOpen(false);
          Swal.fire("Success", "Biodata updated successfully!", "success");
        } catch (error) {
          setOpen(false);
          Swal.fire(
            "Biodata Error",
            getErrorMessage(error as ErrorResponse) ??
              "Could not fill biodata form",
            "error"
          );
        }
        setSubmitting(false);
      }}
    >
      {({ submitForm, isSubmitting, values, setFieldValue, validateField }) => (
        <Form>
          <Box
            component="div"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              boxSizing: "border-box",
              mt: "20px",
            }}
          >
            <Field
              component={TextField}
              name="name"
              type="text"
              label="Name"
              sx={{ width: "100%", marginBottom: "20px" }}
            />
            <Field
              component={Select}
              formControl={{ sx: { width: "100%" } }}
              sx={{ width: "100%" }}
              formHelperText={{ level: "Gender" }}
              id="gender"
              name="gender"
              labelId="gender-simple"
              label="Gender"
              validate={(gender: string) =>
                !gender ? "Please select your gender" : undefined
              }
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Field>
            <div style={{ height: "20px" }}></div>
            <Field
              component={Select}
              formControl={{ sx: { width: "100%" } }}
              sx={{ width: "100%" }}
              formHelperText={{ level: "Level" }}
              id="level"
              name="level"
              labelId="level-simple"
              label="Level"
              validate={(age: number) =>
                !age ? "Please enter your level" : undefined
              }
            >
              <MenuItem value={"100"}>100 Level</MenuItem>
              <MenuItem value={"200"}>200 Level</MenuItem>
              <MenuItem value={"300"}>300 Level</MenuItem>
              <MenuItem value={"400"}>400 Level</MenuItem>
              <MenuItem value={"500"}>500 Level</MenuItem>
            </Field>
            <div style={{ height: "20px" }}></div>
            <Field
              component={TextField}
              type="text"
              label="Department"
              name="department"
              sx={{ width: "100%", marginBottom: "20px" }}
            />
            <Field
              component={Select}
              formControl={{ sx: { width: "100%" } }}
              sx={{ width: "100%" }}
              formHelperText={{ part: "Part" }}
              id="part"
              name="part"
              labelId="part-simple"
              label="Part"
              validate={(part: string) =>
                !part ? "Please select your part" : undefined
              }
            >
              <MenuItem value={"HOD"}>HOD</MenuItem>
              <MenuItem value={"Soprano"}>Soprano</MenuItem>
              <MenuItem value={"Tenor"}>Tenor</MenuItem>
              <MenuItem value={"Alto"}>Alto</MenuItem>
            </Field>
            <div style={{ height: "20px" }}></div>
            <Field
              component={TextField}
              type="text"
              label="Matriculation Number"
              name="matric_no"
              sx={{ width: "100%", marginBottom: "20px" }}
            />
            <Field
              component={TextField}
              type="number"
              label="Registration Number"
              name="reg_no"
              sx={{ width: "100%", marginBottom: "20px" }}
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date of Birth"
                value={values.birthday}
                onChange={(newDob) => {
                  setFieldValue("birthday", newDob, true);
                }}
                renderInput={(params) => (
                  <MTextField sx={{ width: "100%" }} {...params} />
                )}
              />
              <ErrorMessage name="birthday">
                {(msg) => (
                  <div
                    style={{
                      margin: "3px 14px",
                      fontSize: "12px",
                      color: "red",
                    }}
                  >
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </LocalizationProvider>
            {isSubmitting && <LinearProgress />}
            <br />
            <Box>
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
                sx={{ padding: "15px 20px" }}
              >
                Save Changes
              </Button>
              <Button
                onClick={() => setOpen(false)}
                variant="outlined"
                color="primary"
                sx={{ padding: "15px 35px", ml: "25px" }}
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
