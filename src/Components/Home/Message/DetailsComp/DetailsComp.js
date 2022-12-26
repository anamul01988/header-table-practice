import React from "react";
import { Box } from "@mui/material";

const DetailsComp = ({ userDetails }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        mt: 4,
      }}
    >
      <img
        src={userDetails?.userpic}
        alt="user"
        style={{
          width: "50%",
          height: "50%",
          borderRadius: "50%",
          objectFit: "cover",
          border: "5px solid #e0e0e0",
        }}
      />
      <Box
        sx={{
          mt: 2,
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <p
          style={{
            paddingBottom: "0",
            marginBottom: "0",
          }}
        >
          {userDetails?.psname}
        </p>
        <span
          style={{
            fontSize: "0.9rem",
            color: "#97ACB7",
            padding: "0",
          }}
        >
          {userDetails?.create_time}
        </span>
      </Box>
    </Box>
  );
};

export default React.memo(DetailsComp);
