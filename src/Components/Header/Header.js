import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";

import { useNavigate } from "react-router-dom";
import { GiBatteryPackAlt } from "react-icons/gi";

// import { BiLogOutCircle } from "react-icons/bi";

// import { Outlet } from "react-router-dom";
// import axios from "axios";
// import { Avatar, Chip, ListItem, Tooltip } from "@mui/material";

// import LiveClock from "../LiveClock/LiveClock";
// import SearchField from "../SearchFiled/SearchFiled";
import SearchField from "../Home/SearchFiled/SearchFiled";
// import useAuth from "./../../../Hooks/useAuth";
// import MainRoutes from "./MainRoutes/MainRoutes";
// import Login from "../../Authentication/Login/Login";
// import Footer from './../../Footer/Footer';

// import Navbar from "./Navbar";
import { Tab, Tabs, useMediaQuery } from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
// import LiveClock from '../Home/LiveClock/LiveClock';
import DrawerComp from "./Drawer";
import "./Header.css";
import logo from "./assets/linkedin.png";
import { useState } from "react";
import {
  FormControl,
  InputAdornment,
  TextField,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import InboxIcon from "@mui/icons-material/Inbox";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const useStyles = makeStyles(() => {
  return createStyles({
    search: {
      marginTop: "7px",
      // height: "34px",
      backgroundColor: "#d0e8ff",
    },
  });
});
const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  width: "100",
  display: "flex",

  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

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
  // boxSizing: "border-box",
  // ...(open && {
  //   ...openedMixin(theme),
  //   "& .MuiDrawer-paper": openedMixin(theme),
  // }),
  // ...(!open && {
  //   ...closedMixin(theme),
  //   "& .MuiDrawer-paper": closedMixin(theme),
  // }),
}));

function Header() {
  const theme = useTheme();
  const { search } = useStyles();
  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (event) => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleClick = () => {
    // TODO: Clear the search input
    console.log("clicked the clear icon...");
  };

  // const [open, setOpen] = React.useState(true);
  const [battery, setBattery] = React.useState(0);
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  //show battery level
  navigator.getBattery().then(function (battery) {
    // console.log(battery);
    setBattery(parseInt(battery.level * 100));
  });

  const navigate = useNavigate();

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);

  // };

  //get user information from localStorage
  // const user = JSON.parse(localStorage.getItem("user"));

  // get data or object from context auth provider
  // const { pageRefresh, setPageRefresh } = useAuth();

  // update window innerWith every time the window is resized
  // React.useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     window.innerWidth > 600 ? setOpen(true) : setOpen(false);
  //   });
  // }, []);
  const [value, setValue] = React.useState();
  //  const theme = useTheme();
  //  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <Box>
      <CssBaseline />
      <Box>
        <AppBar
          position="static"
          component="header"
          sx={{
            backgroundColor: "#fff",
            left: 0,
            top: 0,
            width: "100vw",
            zIndex: 100,
            borderBottom: "",
          }}
          // position="fixed"
          // open={open}
          // sx={{
          //   backgroundColor: "white",
          //   borderBottom: "1px solid #e8e8e8",
          //   boxShadow: "none",
          // }}
        >
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              <img
                style={{
                  height: "46px",
                  minWidth: "auto",
                  marginRight: "20px",
                }}
                src={logo}
                alt="logo"
              />
              <FormControl className={search}>
                <TextField
                  className="inputArea"
                  size="small"
                  variant="outlined"
                  // sx={{ paddingTop: "5px", paddingBottom: "5px" }}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ display: showClearIcon }}
                        onClick={handleClick}
                      >
                        <ClearIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              {/* new start  */}
              <Box sx={{ marginLeft: "auto", minHeight: "52px" }}>
                <List className="navListArea" component={Stack} direction="row">
                  <ListItem
                    sx={{
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center",
                      minWidth: "100px",
                    }}
                    className="navList"
                    disablePadding
                  >
                    <ListItemButton
                      sx={{
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                      className="navLitButton"
                    >
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                    </ListItemButton>
                    <ListItemText
                      sx={{ color: "#777", fontSize: "9px" }}
                      primary="Home"
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center",
                      minWidth: "100px",
                    }}
                    className="navList"
                    disablePadding
                  >
                    <ListItemButton
                      sx={{
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                      className="navLitButton"
                    >
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                    </ListItemButton>
                    <ListItemText
                      sx={{ color: "#777", fontSize: "9px" }}
                      primary="My Network"
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center",
                      minWidth: "100px",
                    }}
                    className="navList"
                    disablePadding
                  >
                    <ListItemButton
                      sx={{
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                      className="navLitButton"
                    >
                      <ListItemIcon>
                        {/* <InboxIcon /> */}
                        <Badge color="secondary" badgeContent={0} showZero>
                          <MailIcon />
                        </Badge>
                      </ListItemIcon>
                    </ListItemButton>
                    <ListItemText
                      sx={{ color: "#777", fontSize: "9px" }}
                      primary="Notification"
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center",
                      minWidth: "100px",
                    }}
                    className="navList"
                    disablePadding
                  >
                    <ListItemButton
                      sx={{
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                      className="navLitButton"
                    >
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                    </ListItemButton>
                    <ListItemText
                      sx={{ color: "#777", fontSize: "9px" }}
                      primary="Messaging"
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center",
                      minWidth: "100px",
                      borderRight:"1px solid #dbd6d6"
                    }}
                    className="navList"
                    disablePadding
                  >
                    <ListItemButton
                      sx={{
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                      className="navLitButton"
                    >
                      <ListItemIcon>
                        {/* <InboxIcon /> */}
                        <Avatar
                          alt="Remy Sharp"
                          src="https://media.licdn.com/dms/image/C5603AQGl8E5SJtmO6w/profile-displayphoto-shrink_100_100/0/1641128126624?e=1677110400&v=beta&t=gdjU46nrs3PvVUuHhaa4SJcE1XKAt8tmlRcpLvDJwgo"
                          sx={{ width: 36, height: 36 }}
                        />
                      </ListItemIcon>
                    </ListItemButton>
                    <ListItemText
                      sx={{ color: "#777", fontSize: "9px" }}
                      // primary="Me"
                       primary={<><strong>Me</strong> <ArrowDropDownIcon className="custom-icon" /> </>} 
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center",
                      minWidth: "100px",
                      // borderRight:"1px soid #000"
                    }}
                    className="navList"
                    disablePadding
                  >
                    <ListItemButton
                      sx={{
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                      className="navLitButton"
                    >
                      <ListItemIcon>
                        {/* <InboxIcon /> */}
                        <Avatar
                          alt="Remy Sharp"
                          src="https://media.licdn.com/dms/image/C5603AQGl8E5SJtmO6w/profile-displayphoto-shrink_100_100/0/1641128126624?e=1677110400&v=beta&t=gdjU46nrs3PvVUuHhaa4SJcE1XKAt8tmlRcpLvDJwgo"
                          sx={{ width: 36, height: 36 }}
                        />
                      </ListItemIcon>
                    </ListItemButton>
                    <ListItemText
                      sx={{ color: "#777", fontSize: "9px" }}
                      // primary="Me"
                       primary={<><strong>Work</strong> <ArrowDropDownIcon className="custom-icon" /> </>} 
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center",
                      minWidth: "100px",
                    }}
                    className="navList"
                    disablePadding
                  >
                    <ListItemButton
                      sx={{
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                      className="navLitButton"
                    >
                      <ListItemIcon>
                        <InboxIcon />
                      
                      </ListItemIcon>
                    </ListItemButton>
                    <ListItemText
                      sx={{ color: "#777", fontSize: "9px" }}
                      primary="Post a job"
                    />
                  </ListItem>
                </List>
              </Box>
              {/* new end  */}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <AppBar
          position="static"
          component="footer"
          sx={{ background: "#063970" }}
        >
          <Toolbar>
            <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
            {isMatch ? (
              <>
                <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                  Shoppee
                </Typography>
                <DrawerComp />
              </>
            ) : (
              <>
                <Tabs
                  sx={{ marginLeft: "auto" }}
                  indicatorColor="secondary"
                  textColor="inherit"
                  value={value}
                  onChange={(e, value) => setValue(value)}
                >
                  <Tab label="Products" />
                  <Tab label="Services" />
                  <Tab label="About Us" />
                  <Tab label="Contact" />
                  <Tab label="Contact" />
                  <Tab label="Contact" />
                  <Tab label="Contact" />
                  <Tab label="Contact" />
                  <Tab label="Contact" />
                  <Tab label="Contact" />
                  <Tab label="Contact" />
                </Tabs>
                <Button sx={{ marginLeft: "auto" }} variant="contained">
                  Login
                </Button>
                <Button sx={{ marginLeft: "10px" }} variant="contained">
                  SignUp
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
}

export default Header;
