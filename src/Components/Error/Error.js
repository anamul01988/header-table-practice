import React from "react";
import error from "../Vendors/Images/Error-400.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={error} alt="error" className="img-fluid" />
      </div>
      <div
        style={{
          marginTop: "20px",
          position: "absolute",
          top: "10%",
          left: "10%",
          // transform: "translate(-50%, -50%)",

          zIndex: "1",
        }}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: "#1BB096",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Home
        </Button>
      </div>
    </>
  );
};

export default Error;
