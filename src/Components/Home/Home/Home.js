import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { useNavigate } from "react-router-dom";
import { GiBatteryPackAlt } from "react-icons/gi";

import { BiLogOutCircle } from "react-icons/bi";

import { Outlet } from "react-router-dom";
import axios from "axios";
import { Avatar, Chip, ListItem, Tooltip } from "@mui/material";
//start
// import Badge from "@mui/material/Badge";

import LiveClock from "../LiveClock/LiveClock";
import useAuth from "./../../../Hooks/useAuth";
import MainRoutes from "./MainRoutes/MainRoutes";
//end
// const drawerWidth = 240;
const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  width: "100",
  display: "flex",

  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function Home() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [battery, setBattery] = React.useState(0);
  //show battery level
  navigator.getBattery().then(function (battery) {
    // console.log(battery);
    setBattery(parseInt(battery.level * 100));
  });

  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    // setNestedNavOpen(false);
  };

  //get user information from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // get data or object from context auth provider
  const { pageRefresh, setPageRefresh } = useAuth();

  // update window innerWith every time the window is resized
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > 600 ? setOpen(true) : setOpen(false);
    });
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "white",
          borderBottom: "1px solid #e8e8e8",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
              color: "text.primary",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              color: "#1BB096",
              fontWeight: "bold",
              fontSize: "1.5rem",
              // fontFamily: "heading",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Admin
          </Typography>

          {/* <Box sx={{ flexGrow: 1 }} /> */}

          {/* <TextField
            type="search"
            label="Search..."
            variant="outlined"
            size="small"
            color="warning"
            sx={{
              ml: {
                xs: "0",
                md: 5,
              },
              display: { xs: "none", sm: "block" },
              mr: 2,
              // width: "40%",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          /> */}
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ flexGrow: 1 }} />

          {/* show battery lavel  */}
          <Box
            sx={[
              {
                color: "#000",
                fontWeight: "bold",
                mx: 2,
                "@media screen and (max-width: 768px)": {
                  display: "none",
                },
              },
            ]}
          >
            <GiBatteryPackAlt
              style={{
                fontSize: "1.2rem",
                marginTop: "0.2rem",
              }}
            />
            {battery}%
          </Box>

          {/* show live clock  */}
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}
          >
            <LiveClock />
          </Box>

          {/* profile click information  */}
          <Box>
            <Tooltip title={user?.c_info} arrow placement="right-start">
              <Button id="demo-positioned-button">
                <Chip
                  avatar={<Avatar alt="Natacha" src={user?.userpic} />}
                  label={user?.uname}
                  variant="outlined"
                />
              </Button>
            </Tooltip>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
        </Toolbar>
      </AppBar>
      {/* end  */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
            onClick={handleDrawerClose}
            style={{
              color: "#000",
            }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* main routes  */}
        <MainRoutes />
        {/* end main routes  */}

        <Divider />
        <List>
          {["LogOut"].map((text, index) => (
            <ListItem
              button
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index === 0 && (
                  <Tooltip title="LogOut" arrow placement="right-start">
                    <span
                      style={{
                        fontSize: "1.8rem",
                      }}
                    >
                      <BiLogOutCircle
                        color="#000"
                        onClick={() => {
                          localStorage.removeItem("user");
                          localStorage.removeItem("ip");
                          localStorage.removeItem("uniqId");
                          localStorage.removeItem("temp");
                          setPageRefresh(!pageRefresh);
                          // window.location.reload();
                          navigate("/login");
                        }}
                      />
                    </span>
                  </Tooltip>
                )}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: 2,
          pb: 0,
          width: "100%",
          overflow: "auto",
          minHeight: "90vh"
        }}
      >
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}

export default React.memo(Home);
