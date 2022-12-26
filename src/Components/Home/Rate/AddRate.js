import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";

// import PageHeader from "../components/PageHeader";
import { Grid, InputAdornment, TextareaAutosize } from "@mui/material";
import { FormLabel } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { FormControl } from "@mui/material/";
import { FormGroup } from "@mui/material/";
import { Button } from "@mui/material";
import PageHeader from "../Issue/components/PageHeader";
import { SettingsInputCompositeRounded } from "@material-ui/icons";
import Visibility from "@mui/icons-material/Visibility";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const useStyles = makeStyles({
  appMain: {
        paddingLeft: "10px",
      paddingRight: "20px",
        width: "100%",
    
  },
});
function AddRate() {
  const [cn_details, setCn_details] = useState("");
  const [writer, setWriter] = useState("");
  // const [title_eng, setTitle_eng] = useState("");
  const [userId, setUserId] = useState("");
  const [cn_status, setCn_status] = useState("");
  // const [sub_title, setSub_title] = useState("");
  const [publish_date, setPublish_date] = useState("");
  const [ar_file, setAr_file] = useState(null);
  const formData = new FormData();
  const classes = useStyles();
   const [showPassword, setShowPassword] = useState(false);
  const currencies = [
    {
      value: "0",
      label: "Unpublish",
    },
    {
      value: "1",
      label: "Publish",
    },
  ];
  const onTextChange = (e) => {
    e.preventDefault();
    //    let input = e.target.value;
    //    console.log(input);
    setCn_status(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(ar_file);
    formData.append("writer", writer);
    formData.append("cn_details", cn_details);
    formData.append("puser", userId);
    formData.append("cn_status", cn_status);
    formData.append("ar_file", ar_file);
    //   formData.append(" ", );
    fetch(`http://nobovabna.com/webapi/writer_new.php`, {
      method: "POST",
      body: formData,
    })
      //  console.log(formData),
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setUpdateTable(data);
        // setFormDate("");
      });

    //   };
    console.log(e.target.serial.value);
    console.log(e.target.issue.value);
    console.log(e.target.background.value);
  };
  return (
    <>
      <PageHeader
        className="mt-5"
        title="New issue"
        subTitle="Form Adding design with validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <div className={classes.appMain}>
        <form onSubmit={handelSubmit}>
          <Grid
            container
            style={
              {
                //   width: "1000px",
                //     display: "flex",
                //   flexWrap: "wrap",
                //   textAlign: "center",
                //   marginTop: "14px",
                //   marginBottom: "25px",
                // marginRight: "100px",
              }
            }
            spacing={2}
          >
            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Writer Name</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
                name="serial"
                type="text"
                fullWidth
                // value={formDate}
                onChange={(e) => setWriter(e.target.value)}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Writer Info</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
                //   variant="outlined"
                name="issue"
                type="text"
                fullWidth
                // value={toDate}
                onChange={(e) => setCn_details(e.target.value)}
              />
            </Grid>
            {/* <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">User Id</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
                name="background"
                type="Number"
                fullWidth
                // value={userName}
                onChange={(e) => setUserId(e.target.value)}
              />
            </Grid> */}
            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">User Id</FormLabel>
              <IconTextField
                label={<Box></Box>}
                // type="number"
                type={showPassword ? "text" : "password"}
                // type="text"
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                fullWidth
                iconEnd={<Visibility />}
                onChange={(e) => setUserId(e.target.value)}
              />
            </Grid>

            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Publish Status</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                //   label="Service Type"
                label={<Box></Box>}
                // value={currency}
                // value={textValue}
                value={cn_status}
                fullWidth
                onChange={onTextChange}
                // onChange={(handleChange, onTextChange)}
                select
                SelectProps={{
                  native: true,
                }}
                //   helperText="Please select your currency"
              >
                {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Writer Pic</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                id="filled-basic"
                label={<Box></Box>}
                color="primary"
                // name="background"
                type="file"
                fullWidth
                // value={userName}
                onChange={(e) => setAr_file(e.target?.files[0])}
              />
            </Grid>
          </Grid>

          <FormControl className="mt-3" component="fieldset">
            <FormGroup aria-label="position" row>
              <Box
                style={{
                  display: "flex",

                  textAlign: "center",
                  marginTop: "14px",
                  marginLeft: "10px",
                  marginBottom: "25px",
                  // marginRight: "100px",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  width="25%"
                  sx={{ py: 1, mr: 3 }}
                  type="submit"
                >
                  Add
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  width="25%"
                  F
                  sx={{ py: 1 }}
                  type="submit"
                >
                  Reset
                </Button>
              </Box>
            </FormGroup>
          </FormControl>
        </form>
      </div>
    </>
  );
}

export default AddRate;

const IconTextField = ({
  iconStart,
  iconEnd,
  InputProps,
  showPassword,
  setShowPassword,
  ...props
}) => {
  // const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      {...props}
      InputProps={{
        ...InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment
            style={{ cursor: "pointer" }}
            onClick={() => setShowPassword(!showPassword)}
            setShowPassword
            position="end"
          >
            {iconEnd}
          </InputAdornment>
        ) : null,
      }}
    />
  );
};