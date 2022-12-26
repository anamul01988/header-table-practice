import { Box } from "@mui/material";
import React from "react";
import ButtonComp from "../../Shared/Button/Button";
import { useNavigate } from "react-router-dom";

const ProjectRate = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        mt: 2,
      }}
    >
      <Box
        sx={[
          {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "start",
            mt: 2,
            flexWrap: "wrap",
          },
        ]}
      >
        <ButtonComp title="Refresh" color="warning" refreshIco />
        <ButtonComp
          title="Add"
          color="success"
          add
          onClick={() => {
            navigate("/projectRateAdd");
          }}
        />
        <ButtonComp title="Search" color="info" search />
        <ButtonComp title="Delete" color="error" deleteIco />
        <ButtonComp title="Export" color="primary" exportIco />
      </Box>
    </Box>
  );
};

export default ProjectRate;
