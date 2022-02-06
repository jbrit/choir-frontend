import { ReactNode, FC } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

interface Props {
    children: ReactNode,
    cover: string
}

const AuthPage : FC<Props> = ( { children, cover }) => {
    const matches1366 = useMediaQuery('(min-width:1366px)');
    const matches496 = useMediaQuery('(max-width:496px)');

  return (
    <Grid sx={{minHeight: "100vh"}} container spacing={0}>
    <Grid item xs={12} md={6} lg={5} py={4} px={matches496 ? 2 : matches1366 ? 8 : 4} sx={{alignItems: "center"}}>
      <Link passHref href='/'>
        <Box component="a" sx={{position: "relative", width: "187px", height: "70px", display: "block"}} >
          <Image src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1644113020/HorizontalLogo_FullColor_y1calj.png" objectFit="cover" layout="fill" alt="" />
        </Box>
      </Link>
      {children}
    </Grid>
    <Grid item xs={0} md={6} lg={7}>
      <Box component='div' sx={{backgroundImage: `url(${cover})`, width: "100%", minHeight: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", position: "relative", display: "flex", alignItems: "center"}} >
        <Box component='div' sx={{position: "absolute", top: 0, left: 0, bgcolor: 'primary.main', opacity: 0.4, width: "100%", minHeight: "100%"}} ></Box>
      </Box>
    </Grid>
  </Grid>
  )
}

export default AuthPage;