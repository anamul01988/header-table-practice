import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import ButtonComp from "./../../../Shared/Button/Button";

const ProjectRateAdd = () => {
  return (
    <Box
      sx={[
        {
          width: "60%",
          mx: "auto",
          mt: 3,

          "@media only screen and (max-width:768px)": {
            width: "100%",
          },
        },
      ]}
    >
      <Typography
        sx={[
          {
            fontWeight: "bold",
          },
        ]}
      >
        Rate Add
      </Typography>
      <form>
        <TextField label="Rate Name" fullWidth margin="normal" />
        <TextField label="Rate For" fullWidth />
        <ButtonComp title="Save" type="submit" color="success" mt={2} />
        <ButtonComp title="Reset" type="reset" color="error" mt={2} />
      </form>
    </Box>
  );
};

export default ProjectRateAdd;
