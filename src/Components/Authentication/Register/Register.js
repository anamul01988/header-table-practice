/* eslint-disable no-useless-escape */
import React from "react";
import { Container, Grid, TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import bgImage from "../../Vendors/Images/The-Future-of-Digital-Healthcare-recap.png";
import loginLogo from "../../Vendors/Images/unnamed.png";
import { AiTwotoneMail, AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { FormControl } from "@mui/material/";
import { InputLabel } from "@mui/material/";
import { Select } from "@mui/material/";
import { MenuItem } from "@mui/material/";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import swal from "sweetalert";
import axios from "axios";

const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [city, setCity] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [agree, setAgree] = React.useState(false);
  const navigate = useNavigate();
  const [error, setError] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    category: "",
    city: "",
    address: "",
  });

  // regular expression
  const emailregEX =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const passRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      phone.length > 0 &&
      category.length > 0 &&
      city.length > 0 &&
      address.length > 0
    ) {
      error.name = "";
      error.email = "";
      error.password = "";
      error.confirmPassword = "";
      error.phone = "";
      error.category = "";
      error.city = "";
      error.address = "";

      if (password === confirmPassword) {
        error.password = "";
        error.confirmPassword = "";

        if (agree) {
          if (emailregEX.test(email)) {
            if (passRegEx.test(password)) {
              setError({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                phone: "",
                category: "",
                city: "",
                address: "",
              });
              // const data = {
              //   name: name,
              //   email: email,
              //   password: password,
              //   phone: phone,
              //   category: category,
              //   city: city,
              //   address: address,
              // };

              const formData = new FormData();
              formData.append("Name", name);
              formData.append("Email", email);
              formData.append("userPass", password);
              formData.append("userPassC", confirmPassword);
              formData.append("MobileNumber", phone);
              formData.append("Location", city);
              formData.append("Address", address);
              formData.append("sType", category);
              formData.append("termsa", "1");

              axios
                .post(`https://ghorami.com/regis_desk.php`, formData)
                .then((res) => {
                  if (res.data[0]?.message === "success") {
                    e.target.reset();
                    swal({
                      title: "Register Successfully",
                      text: "Please Login",
                      icon: "success",
                      button: "OK",
                    }).then(() => {
                      navigate("/login");
                    });
                  } else {
                    swal("Error", "", "error");
                  }
                })
                .catch((err) => {
                  swal("Error", err.message, "error");
                });
            } else {
              setError({
                ...error,
                password:
                  "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
              });
            }
          } else {
            setError({ ...error, email: "Invalid email address" });
          }
        } else {
          setError({
            ...error,
            agree: "You must agree to our terms and conditions",
          });
        }
      } else {
        setError({ ...error, confirmPassword: "Password does not match" });
      }
    } else {
      if (name.length === 0) {
        setError({ ...error, name: "Name is required" });
      }
      if (email.length === 0) {
        setError({ ...error, email: "Email is required" });
      }
      if (password.length === 0) {
        setError({ ...error, password: "Password is required" });
      }
      if (phone.length === 0) {
        setError({ ...error, phone: "Phone is required" });
      }
      if (category.length === 0) {
        setError({ ...error, category: "Category is required" });
      }
      if (city.length === 0) {
        setError({ ...error, city: "City is required" });
      }
      if (address.length === 0) {
        setError({ ...error, address: "Address is required" });
      }
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "calc(100vh - 0px)",
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
          // textAlign: "center",
          background: "rgb( 255, 255, 255 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.12 )",
          backdropFilter: "blur( 8px )",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
          padding: "2rem",
        }}
      >
        {/* <MainCard title="LogIn"> */}
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <img src={loginLogo} alt="logo" style={{ width: "100px" }} />
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Create Account
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
            create a new account
          </Typography>
        </Box>
        <form onSubmit={handleRegister}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <BiCategory
                      style={{
                        marginRight: "10px",
                        fontSize: "25px",
                      }}
                    />
                    <span>Category</span>
                  </Box>
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <BiCategory
                        style={{
                          marginRight: "10px",
                          fontSize: "25px",
                        }}
                      />
                      <span>Category</span>
                    </Box>
                  }
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setError({ ...error, category: "" });
                  }}
                >
                  <MenuItem value="1">Individual</MenuItem>
                  <MenuItem value="2">Company</MenuItem>
                </Select>

                <FormHelperText>
                  <span style={{ color: "red" }}>{error?.category}</span>
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                id="outlined-basic"
                onChange={(e) => {
                  setName(e.target.value);
                  setError({ ...error, name: "" });
                }}
                helperText={<span style={{ color: "red" }}>{error?.name}</span>}
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <AiOutlineUser
                      style={{
                        marginRight: "10px",
                        fontSize: "25px",
                      }}
                    />
                    <span>Name</span>
                  </Box>
                }
                variant="outlined"
                name="name"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                id="outlined-basic"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError({ ...error, email: "" });
                }}
                helperText={
                  <span style={{ color: "red" }}>{error?.email}</span>
                }
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
                    <span>Email</span>
                  </Box>
                }
                variant="outlined"
                name="email"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                id="outlined-basic"
                onChange={(e) => {
                  setPhone(e.target.value);
                  setError({ ...error, phone: "" });
                }}
                helperText={
                  <span style={{ color: "red" }}>{error?.phone}</span>
                }
                type="number"
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <BsFillPhoneFill
                      style={{
                        marginRight: "10px",
                        fontSize: "25px",
                      }}
                    />
                    <span>Number</span>
                  </Box>
                }
                variant="outlined"
                name="number"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                id="outlined-basic"
                helperText={
                  <span style={{ color: "red" }}>{error?.password}</span>
                }
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError({ ...error, password: "" });
                }}
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
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                id="outlined-basic"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setError({ ...error, confirmPassword: "" });
                }}
                helperText={
                  <span style={{ color: "red" }}>{error?.confirmPassword}</span>
                }
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
                    <span>Confirm Password</span>
                  </Box>
                }
                variant="outlined"
                name="password"
                type="password"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                onChange={(e) => {
                  setCity(e.target.value);
                  setError({ ...error, city: "" });
                }}
                helperText={<span style={{ color: "red" }}>{error?.city}</span>}
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MdLocationCity
                      style={{
                        marginRight: "10px",
                        fontSize: "25px",
                      }}
                    />
                    <span>City</span>
                  </Box>
                }
                variant="outlined"
                name="city"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                onChange={(e) => {
                  setAddress(e.target.value);
                  setError({ ...error, address: "" });
                }}
                helperText={
                  <span style={{ color: "red" }}>{error?.address}</span>
                }
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaAddressCard
                      style={{
                        marginRight: "10px",
                        fontSize: "25px",
                      }}
                    />
                    <span>Address</span>
                  </Box>
                }
                variant="outlined"
                name="address"
                type="text"
                fullWidth
              />
            </Grid>
          </Grid>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    // required
                    onChange={(e) => setAgree(e.target.checked)}
                  />
                }
                label={
                  <Box>
                    I have read and agree to the{" "}
                    <a
                      className="text-primary text-decoration-none"
                      href="https://ghorami.com/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms and Conditions
                    </a>
                  </Box>
                }
              />
            </FormGroup>
            <FormHelperText>
              <span style={{ color: "red" }}>{error?.agree}</span>
            </FormHelperText>
          </FormControl>

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
              size="small"
            >
              Create Account
            </Button>
          </Box>
        </form>
        {/* </MainCard> */}
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "black",
              marginBottom: "20px",
              fontSize: "14px",
              fontWeight: "bold",
              marginRight: "10px",
            }}
          >
            Already have an account?
          </span>
          <Link
            to="/login"
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
              Login
            </span>
          </Link>
        </Box>
      </Container>
    </div>
  );
};
export default Register;
