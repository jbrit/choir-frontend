import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ChurchIcon from "@mui/icons-material/Church";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useQuery } from "react-query";
import { getBiodata, logout } from "../actions/auth";
import router from "next/router";

const drawerWidth = 240;

interface Props {
  children: React.ReactNode;
  page: string;
}

const settings = ["Home", "Logout"];

const ResponsiveDrawer = ({ children, page }: Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const biodataQuery = useQuery("biodata", getBiodata);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (selected?: number) => {
    setAnchorElUser(null);
    switch (selected) {
      case 0:
        return router.push("/")
      case 1:
        return logout()

      default:
        break;
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Avatar
        sx={{ margin: "20px auto 10px auto", width: "80px", height: "80px" }}
        alt={biodataQuery.data?.name}
        src="/static/images/avatar/2.jpg"
      />
      <Typography
        sx={{ marginBottom: "20px" }}
        color="black"
        textAlign="center"
      >
        {biodataQuery.data?.name}
      </Typography>
      <Divider />
      <List sx={{ padding: "40px 0" }}>
        {/* ["Biodata", "Rehearsals", "Songs"] */}
        {["Biodata", "Songs"].map((text, index) => (
          <Link key={text} passHref href={`/dashboard/${text.toLowerCase()}`}>
            <Box component="a" sx={{ display: "flex", alignItems: "center" }}>
              <ListItem
                sx={{ marginBottom: `${index === 2 ? "" : "20px"}` }}
                button
              >
                <ListItemIcon>
                  {index === 0 ? (
                    <PersonOutlineIcon
                      color={`${page === text ? "primary" : "inherit"}`}
                    />
                  ) : index === 1 ? (
                    <ChurchIcon
                      color={`${page === text ? "primary" : "inherit"}`}
                    />
                  ) : (
                    <LibraryMusicIcon
                      color={`${page === text ? "primary" : "inherit"}`}
                    />
                  )}
                </ListItemIcon>
                <Typography
                  color={`${page === text ? "primary" : "black"}`}
                  textAlign="center"
                >
                  {text}
                </Typography>
              </ListItem>
            </Box>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {["Logout"].map((text, index) => (
          <ListItem onClick={() => logout()} button key={text}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {page}
          </Typography>
          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={biodataQuery.data?.name}
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={() => handleCloseUserMenu()}
            >
              {settings.map((setting, index) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu(index)}>
                  {index === 0 ? (
                    <PersonOutlineIcon width={1} height={1} />
                  ) : (
                    <LogoutIcon width={1} height={1} />
                  )}
                  <Typography ml={1} textAlign="center">
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default ResponsiveDrawer;
