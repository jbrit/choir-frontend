import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

const CustomCardBody = ({setOpen} : {setOpen : React.Dispatch<React.SetStateAction<boolean>>}) => (
  <React.Fragment>
    <CardContent sx={{px: {sm: 1, md: 6}}}>
      <Box sx={{display: "flex", alignItems: "center", mt: 3}}>
        <Avatar sx={{ width: "100px", height: "100px"}} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        <Box sx={{ml: 2}}>
          <Typography sx={{ fontSize: 18, mb: '2px' }} color="black" gutterBottom>
            Remy Sharp
          </Typography>
          <Typography sx={{ fontSize: 14, mt: '2px' }} color="text.secondary" gutterBottom>
            remysharp@gmail.com
          </Typography>
        </Box>
      </Box>
      <Divider sx={{my: 3}} />
      <Box>
        <Typography variant="h5" component="h5">
          Password
        </Typography>
        <Typography sx={{ mt: 1 }} color="text.secondary">
          **********************
        </Typography> 
      </Box>
      <Divider sx={{my: 3}} />
      <Box>
        <Typography variant="h5" component="h5">
          Level
        </Typography>
        <Typography sx={{ mt: 1 }} color="text.secondary">
          500
        </Typography> 
      </Box>
      <Divider sx={{my: 3}} />
      <Box>
        <Typography variant="h5" component="h5">
          Department
        </Typography>
        <Typography sx={{ mt: 1 }} color="text.secondary">
          Medicine
        </Typography> 
      </Box>
      <Divider sx={{my: 3}} />
      <Box>
        <Typography variant="h5" component="h5">
          Faculty
        </Typography>
        <Typography sx={{ mt: 1 }} color="text.secondary">
          College of health sciences
        </Typography> 
      </Box>
      <Divider sx={{my: 3}} />
      <Box>
        <Typography variant="h5" component="h5">
          Registration
        </Typography>
        <Typography sx={{ mt: 1 }} color="text.secondary">
          SAPA/0000/000
        </Typography> 
      </Box>
      <Divider sx={{my: 3}} />
    </CardContent>
    <CardActions sx={{px: {sm: 1, md: 6}, mb: 3}}>
      <Button onClick={() => setOpen(true)} variant='contained' size="small">Edit Profile</Button>
    </CardActions>
  </React.Fragment>
);

export default function UserProfileCard({setOpen} : {setOpen : React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CustomCardBody setOpen={setOpen} />
      </Card>
    </Box>
  );
}