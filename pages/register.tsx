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
        <Grid item xs={12} md={4}>
          <Box component='div' sx={{backgroundColor: "primary", width: "100%", minHeight: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            z
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>

        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
