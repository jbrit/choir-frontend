import type { NextPage } from "next";
import Head from "next/head";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Register: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Register | Tabernacle of Psalms</title>
        <meta name="description" content="Tabernacle of Psalms, Choir Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid sx={{minHeight: "100vh"}} container spacing={0}>
        <Grid item xs={12} md={6} lg={5}>
          <Box component='div' px={9} sx={{width: "100%", minHeight: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          <Box component='div' sx={{backgroundImage: 'url(./choir1.jpg)', width: "100%", minHeight: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}} ></Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
