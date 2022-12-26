import React from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Checkbox,
} from "@mui/material";
import { Box } from "@mui/material";
import bgImage from "../../Vendors/Images/The-Future-of-Digital-Healthcare-recap.png";
import loginLogo from "../../Vendors/Images/unnamed.png";
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate, useLocation } from "react-router-dom";
import swal from "sweetalert";
// import { useCookies } from "react-cookie";
import axios from "axios";
import CryptoJS from "crypto-js";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const location = useLocation();
  //const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const redirectUi = location.state ? location.state.from : "/";
  const formData = new FormData();

  //for cookies
  const [rememberMe, setRememberMe] = React.useState(false);
  // const [cookies, setCookie] = useCookies(["user"]);
  const [ip, setIp] = React.useState("");
  // using rememberMe with cookies
  let temp = "";

  // make data encoded to base64 and encrypted with AES algorithm
  const encodeSourceObject = (source) => {
    return CryptoJS.enc.Base64.stringify(
      CryptoJS.enc.Utf8.parse(JSON.stringify(source))
    );
  };
  // make data decoded from base64 and decrypted with AES algorithm
  const decodeSourceObject = (source) => {
    return JSON.parse(
      CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(source))
    );
  };

  //remember me data get
  React.useEffect(() => {
    const data = localStorage.getItem("RData");
    // console.log(data);
    if (data) {
      setEmail(decodeSourceObject(data).email);
      setPassword(decodeSourceObject(data).password);
      // setRememberMe(true);
    }
    return () => {
      setEmail("");
      setPassword("");
    };
  }, []);

  //get ip address
  React.useEffect(() => {
    // get IP
    const getData = async () => {
      const res = await axios.get("https://geolocation-db.com/json/");
      // console.log(res.data.IPv4);
      setIp?.(res.data.IPv4);
    };
    getData();
  }, []);

  // var source = {
  //   email:"wahed@gmail.com",
  //   password:"21314"
  // };

  // // 48 65 6c 6c 6f 21
  // // console.log(CryptoJS.enc.Utf8.parse(source).toString());
  // // console.log(CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(source)));

  // console.log(encodeSourceObject(source));
  // console.log(decodeSourceObject(encodeSourceObject(source)));

  //remember me data set with cookies and local storage data set and login to ghorami server
  const handelLogin = (e) => {
    e.preventDefault();
    //cookies
    if (rememberMe===true) {
      // setCookie("user", { email, password }, { path: "/" });
      //save data as encoded string in local storage
      localStorage.setItem("RData", encodeSourceObject({ email, password }));
    }
    if (rememberMe === false) {
      // setCookie(
      //   "user",
      //   {
      //     email: "",
      //     password: "",
      //   },
      //   { path: "/" }
      // );
      // console.log("remove");
      localStorage.removeItem("RData");
    }
    formData.append("MobileNumber", email);
    formData.append("pass", password);
    fetch(`https://ghorami.com/profile/fun_uinsert.php`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res[0]?.sopnoid) {
          localStorage.setItem("user", JSON.stringify(res?.[0]));
          localStorage.setItem("ip", JSON.stringify(ip));
          localStorage.setItem("temp", temp);

          navigate?.(redirectUi);
        } else {
          swal("Error", "Check Email or Password Again!", "error");
        }
      })
      .catch((err) => console.log(err));
    // e.target.reset();
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: window.innerHeight >= 500 ? "calc(100vh - 0px)" : "calc(100vh)",
      }}
    >
      <Container
        maxWidth="sm"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "10px",
          textAlign: "center",
          background: "rgb( 255, 255, 255 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.12 )",
          backdropFilter: "blur( 8px )",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
          padding: "2rem",
        }}
      >
        {/* <MainCard title="LogIn"> */}
        <Box>
          <img
            src={loginLogo}
            alt="logo"
            style={{ width: "100px" }}
            className="img-fluid"
          />
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Welcome Back
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              color: "text.secondary",
              marginBottom: "20px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Sign To Continue
          </Typography>
        </Box>
        {/* {user ? (
          <Button variant="contained" onClick={() => navigate(`/${user.action_type}`)}>
            Confirm to redirectUi
          </Button>
        ) : ( */}
        <form onSubmit={handelLogin}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <TextField
                id="outlined-basic435"
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <AiTwotoneMail
                      style={{
                        marginRight: "10px",
                        fontSize: "25px",
                      }}
                    />
                    <span>Number/Email</span>
                  </Box>
                }
                variant="outlined"
                name="number"
                type="text"
                fullWidth
                value={email}
                onChange={(e) => setEmail?.(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                id="outlined-basic6557"
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <RiLockPasswordFill
                      style={{
                        marginRight: "10px",
                        fontSize: "25px",
                      }}
                    />
                    <span>Password</span>
                  </Box>
                }
                variant="outlined"
                name="password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword?.(e.target.value)}
              />
              <Box
                sx={{
                  mt: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {/* //remember me */}
                <FormGroup>
                  <FormControlLabel
                    onChange={(e) => setRememberMe?.(e.target?.checked)}
                    control={<Checkbox />}
                    label={
                      <Box
                        sx={[
                          {
                            "@media screen and (max-width:600px)": {
                              fontSize: "12px",
                            },
                          },
                        ]}
                      >
                        Remember me
                      </Box>
                    }
                  />
                </FormGroup>
                <Button size="small">
                  <a
                    href="https://ghorami.com/profile/login/l-forgetpass.php?MobileNumber"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <span>Forgot Password?</span>
                  </a>
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ py: 2 }}
              type="submit"
            >
              LogIn
            </Button>
          </Box>
        </form>
        {/* )} */}
        {/* </MainCard> */}
        <Box>
          <span
            style={{
              color: "black",
              marginBottom: "20px",
              fontSize: "14px",
              fontWeight: "bold",
              marginRight: "10px",
            }}
          >
            Don't have an account?
          </span>
          <Link
            to="/register"
            style={{
              textDecoration: "none",
              color: "blue",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Create a new account
            </span>
          </Link>
        </Box>
      </Container>
    </div>
  );
};
export default React.memo(Login);
