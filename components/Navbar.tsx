import { useState, MouseEvent, useRef, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { navAnimation } from '../animations/navbar';

const pages = ['/register', '/login'];
const settings = ['Biodata', 'Dashboard', 'Logout'];

const Navbar = () => {
  const navRef = useRef(null)
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  // const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event : MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event : MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  useEffect(() => {
    navAnimation(navRef.current)
  }, [])

  return (
    <AppBar ref={navRef} sx={{background: "transparent", color: "black", boxShadow: "none", height: "10vh"}} position="static">
        <Toolbar sx={{justifyContent: "space-between"}} disableGutters>
          <Link passHref href='/'>
            <Box component="a" sx={{position: "relative", width: "187px", height: "70px", mr: 1, mt: 4, display: { xs: 'none', md: 'block' }}} >
              <Image src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1644113020/HorizontalLogo_FullColor_y1calj.png" objectFit="cover" objectPosition="center" layout="fill" alt="" />
            </Box>
          </Link>
          <Link passHref href='/'>
            <Box component="a" sx={{position: "relative", width: "187px", height: "70px", mt: 1, display: { xs: 'block', md: 'none'}}} >
              <Image src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1644113020/HorizontalLogo_FullColor_y1calj.png" objectFit="cover" objectPosition="center" layout="fill" alt="" />
            </Box>
          </Link>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              <Box sx={{padding: "10px 10px 10px 0"}}>
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link passHref href={page.toLowerCase()}>
                    <Box component="a" sx={{display: "flex", alignItems:"center"}} >
                      <Typography color="black" textAlign="center">
                        {page}
                      </Typography>
                    </Box>
                  </Link>
                </MenuItem>
              ))}
              </Box>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                <Link passHref href={page.toLowerCase()}>
                  <Box component="a" sx={{display: "flex", alignItems:"center"}} >
                    <Typography fontWeight="600">{page}</Typography>
                  </Box>
                </Link>
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
    </AppBar>
  );
};
export default Navbar;