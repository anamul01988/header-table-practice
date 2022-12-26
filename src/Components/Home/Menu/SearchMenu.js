import React from "react";
import { FormLabel, Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { FormControl, FormGroup } from "@mui/material/";

const SearchMenu = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.serial.value);
    console.log(e.target.issue.value);
    console.log(e.target.background.value);
  };
  return (
    <div className="mt-5">
      <form onSubmit={handelSubmit}>
        <Grid container spacing={3}>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Serial</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              //   variant="outlined"
              name="serial"
              type="number"
              fullWidth
              // value={formDate}
              // onChange={(e) => setFormDate?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Issue</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              //   variant="outlined"
              name="issue"
              type="text"
              fullWidth
              // value={toDate}
              // onChange={(e) => setToDate?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Background</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              variant="outlined"
              name="background"
              type="text"
              fullWidth
              // value={userName}
              // onChange={(e) => setUserName?.(e.target.value)}
            />
          </Grid>
        </Grid>

        <FormControl className="mt-3" component="fieldset">
          {/* <FormLabel component="legend">Group By</FormLabel> */}
          <FormGroup aria-label="position" row>
            <Box
              style={{
                display: "flex",

                textAlign: "center",
                marginTop: "14px",
                marginBottom: "25px",
                // marginRight: "100px",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                width="25%"
                sx={{ py: 1 }}
                type="submit"
              >
                Search
              </Button>
            </Box>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
};

export default SearchMenu;
