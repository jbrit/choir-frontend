import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Image from 'next/image';

export default function Hero() {
  return (
    <Container maxWidth="lg">
      <Grid sx={{minHeight: "500px", alignItems: "center"}} container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography sx={{fontWeight: "semibold"}} variant="h2" component="h1" gutterBottom>
            Tabernacle of Psalms
          </Typography>
          <Typography  variant="subtitle1" component="p" gutterBottom>
            A choir is made up of many voices, including yours and mine. If one by one all go silent then all that will be left are the soloists.
          </Typography>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Register</Button>
            <Button variant="outlined">Login</Button>
        </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
            <Grid sx={{justifyContent :"space-between", alignItems: "center"}} container spacing={2}>
              <Grid sx={{height:"500px"}} item xs={4}>
                <Box component="img" sx={{height: "100%",width: "100%", objectFit: "cover"}} src="/choir1.jpg" alt="" />
              </Grid>
              <Grid sx={{height:"450px"}} item xs={4}>
                <Box component="img" sx={{height: "100%",width: "100%", objectFit: "cover"}} src="/choir2.jpg" alt="" />
              </Grid>
              <Grid sx={{height:"400px"}} item xs={4}>
                <Box component="img" sx={{height: "100%",width: "100%", objectFit: "cover"}} src="/choir3.jpg" alt="" />
              </Grid>
            </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}