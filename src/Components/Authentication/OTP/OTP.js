import React from "react";
import OTPimage from "../../Vendors/Images/otp1.jpg";
import { Box, Button, TextField, Typography } from "@mui/material";
import Classes from "./OTP.module.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const OTP = () => {
  const [OTP, setOTP] = React.useState("");
  const [OTPError, setOTPError] = React.useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const redirectUi = location.state ? location.state.from : "/";
  const perseData = JSON.parse(localStorage.getItem("user"));
  //varify OTP
  const handleVarify = () => {
    if (OTP === "") {
      setOTPError("OTP is required");
    } else {
      //code
      setOTPError("");
      if (perseData.otp === Number(OTP)) {
        navigate(redirectUi);
      } else {
        setOTPError("Invalid OTP");
      }
    }
  };
  return (
    <Box
      sx={{
        minWidth: "275px",
        padding: "1.5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {" "}
        <img
          src={OTPimage}
          alt="OTP"
          style={{
            width: "200px",
          }}
        />
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          style={{
            fontWeight: "bold",
            color: "gray",
          }}
        >
          Verification Code
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          component="div"
          style={{
            color: "black",
            fontWeight: "bold",
          }}
        >
          We have sent a verification code to your Mobile Number.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          {/* number comes from the database */}
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          {/* number comes from the database */}
        </Typography>
        <TextField
          id="outlined-basic"
          label="Enter OTP"
          variant="outlined"
          className={`${Classes.inputWidth}`}
          onChange={(e) => setOTP(e.target.value)}
          helperText={
            OTPError ? (
              <p style={{ color: "red", fontWeight: "bold" }}>{OTPError}</p>
            ) : null
          }
        />
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <span
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            Didn't receive the code?
          </span>
          <span className={`${Classes.resendOTP}`}>Resend Code</span>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ py: 2, my: 2 }}
            onClick={handleVarify}
            type="submit"
          >
            Verify
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OTP;
