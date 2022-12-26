import React from "react";
import { FormLabel, Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { FormControl, FormGroup } from "@mui/material/";

const SearchArticle = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.serial.value);
    console.log(e.target.issue_select.value);
    console.log(e.target.article_type.value);
    console.log(e.target.article_title.value);
    console.log(e.target.writer_name.value);
    console.log(e.target.attachment.value);
    console.log(e.target.soft_details.value);
    console.log(e.target.page.value);
    console.log(e.target.short_info.value);
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
            <FormLabel className="mt-2 ms-2">Issue Select</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              //   variant="outlined"
              name="issue_select"
              type="text"
              fullWidth
              // value={toDate}
              // onChange={(e) => setToDate?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Article Type</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              variant="outlined"
              name="article_type"
              type="text"
              fullWidth
              // value={userName}
              // onChange={(e) => setUserName?.(e.target.value)}
            />
          </Grid>

          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Article Title</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              variant="outlined"
              name="article_title"
              type="text"
              fullWidth
              // value={callerId}
              // onChange={(e) => setCallerId?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Writer Name</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              variant="outlined"
              name="writer_name"
              type="text"
              fullWidth
              // value={callerId}
              // onChange={(e) => setCallerId?.(e.target.value)}
            />

            {/* <Grid item lg={3} xs={6} md={4}>
              <FormLabel className="mt-2 ms-2">Message</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
                variant="outlined"
                name="message"
                type="text"
                fullWidth
                // value={message}
                // onChange={(e) => setMessage?.(e.target.value)}
              />
            </Grid>
           
            <Grid item lg={3} xs={6} md={4}>
              <FormLabel className="mt-2 ms-2">Destination</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
                variant="outlined"
                name="destination"
                type="text"
                fullWidth
                // value={destination}
                // onChange={(e) => setDestination?.(e.target.value)}
              />
            </Grid>

            <Grid item lg={3} xs={6} md={4}>
              <FormLabel className="mt-2 ms-2">Gateway</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
                variant="outlined"
                name="user-name"
                type="text"
                fullWidth
                // value={gateway}
                // onChange={(e) => setGateway?.(e.target.value)}
              />
            </Grid>
            <Grid item lg={3} xs={6} md={4}>
              <FormLabel className="mt-2 ms-2">End Reason</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
                variant="outlined"
                name="end-reason"
                type="text"
                fullWidth
                // value={endReason}
                // onChange={(e) => setEndReason?.(e.target.value)}
              />
            </Grid> */}
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Attachment</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              variant="outlined"
              name="attachment"
              type="text"
              fullWidth
              // value={callerId}
              // onChange={(e) => setCallerId?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Soft Details</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              variant="outlined"
              name="soft_details"
              type="text"
              fullWidth
              // value={callerId}
              // onChange={(e) => setCallerId?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Page</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              variant="outlined"
              name="page"
              type="text"
              fullWidth
              // value={callerId}
              // onChange={(e) => setCallerId?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Short Info</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              variant="outlined"
              name="short_info"
              type="text"
              fullWidth
              // value={callerId}
              // onChange={(e) => setCallerId?.(e.target.value)}
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

export default SearchArticle;
