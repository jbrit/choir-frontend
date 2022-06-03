import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { getBiodata } from "../actions/auth";
import { useQuery } from "react-query";

const CustomCardBody = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const biodataQuery = useQuery("biodata", getBiodata);
  return (
    <React.Fragment>
      <CardContent sx={{ px: { sm: 1, md: 6 } }}>
        <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
          <Avatar
            sx={{ width: "100px", height: "100px" }}
            alt={biodataQuery.data?.name ?? ""}
            src="/static/images/avatar/2.jpg"
          />
          <Box sx={{ ml: 2 }}>
            <Typography
              sx={{ fontSize: 18, mb: "2px" }}
              color="black"
              gutterBottom
            >
              {biodataQuery.data?.name}
            </Typography>
            <Typography
              sx={{ fontSize: 14, mt: "2px" }}
              color="text.secondary"
              gutterBottom
            >
              {biodataQuery.data?.email}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box>
          <Typography variant="h5" component="h5">
            Gender
          </Typography>
          <Typography sx={{ mt: 1 }} color="text.secondary">
            {biodataQuery.data?.gender
              ? biodataQuery.data?.gender
              : "Please Select Gender"}
          </Typography>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box>
          <Typography variant="h5" component="h5">
            Level
          </Typography>
          <Typography sx={{ mt: 1 }} color="text.secondary">
            {biodataQuery.data?.level
              ? biodataQuery.data?.level
              : "Please Select Level"}
          </Typography>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box>
          <Typography variant="h5" component="h5">
            Department
          </Typography>
          <Typography sx={{ mt: 1 }} color="text.secondary">
            {biodataQuery.data?.department
              ? biodataQuery.data?.department
              : "Please Select Department"}
          </Typography>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box>
          <Typography variant="h5" component="h5">
            Part
          </Typography>
          <Typography sx={{ mt: 1 }} color="text.secondary">
            {biodataQuery.data?.part
              ? biodataQuery.data?.part
              : "Please Select Part"}
          </Typography>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box>
          <Typography variant="h5" component="h5">
            Matriculation Number
          </Typography>
          <Typography sx={{ mt: 1 }} color="text.secondary">
            {biodataQuery.data?.matric_no
              ? biodataQuery.data?.matric_no
              : "Please Select Matriculation Number"}
          </Typography>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box>
          <Typography variant="h5" component="h5">
            Registration
          </Typography>
          <Typography sx={{ mt: 1 }} color="text.secondary">
            {biodataQuery.data?.reg_no
              ? biodataQuery.data?.reg_no
              : "Please Select Reg No"}
          </Typography>
        </Box>
        <Divider sx={{ my: 3 }} />
      </CardContent>
      <CardActions sx={{ px: { sm: 1, md: 6 }, mb: 3 }}>
        <Button onClick={() => setOpen(true)} variant="contained" size="small">
          Edit Profile
        </Button>
      </CardActions>
    </React.Fragment>
  );
};

export default function UserProfileCard({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CustomCardBody setOpen={setOpen} />
      </Card>
    </Box>
  );
}
