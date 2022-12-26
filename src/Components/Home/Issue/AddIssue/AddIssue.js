import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";

import PageHeader from "../components/PageHeader";
import { Grid, InputAdornment, TextareaAutosize } from "@mui/material";
import { FormLabel } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { FormControl } from "@mui/material/";
import { FormGroup } from "@mui/material/";
import { Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
// import { Modal } from '@mui/material/Modal';


// import Box from "@mui/material/Box";
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
function AddIssue() {
  const [updateTable, setUpdateTable] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [title, setTitle] = useState("");
  const [title_eng, setTitle_eng] = useState("");
  const [userId, setUserId] = useState("");
  const [status, setStatus] = useState(null);
  const [sub_title, setSub_title] = useState("");
  const [publish_date, setPublish_date] = useState("");
  const [ar_file, setAr_file] = useState(null);
   const [imageUrl, setImageUrl] = useState(null);
  const formData = new FormData();
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const currencies = [
    {
      value: "0",
      label: "Select",
    },
    {
      value: "1",
      label: "Publish",
    },
    {
      value: "2",
      label: "UnPublish",
    },
  ];


 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

  const onTextChange = (e) => {
    e.preventDefault();
      //  let input = e.target.value;
      //  console.log(input);
    setStatus(e.target.value);
  };

  //get user information from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)
  console.log(user.sopnoid);
  useEffect(() => {
    setUserId(user.sopnoid);
  }, [])
  console.log(userId);

    useEffect(() => {
      if (ar_file) {
        setImageUrl(URL.createObjectURL(ar_file));
      }
    }, [ar_file]);

    const resetForm = (e) => {
      console.log("clicked");
      e.preventDefault();
      // setTitle("");
      //  setTitle_eng("");
      //  setStatus("");
      //  setPublish_date("");
      //  setAr_file("");
      //  setSub_title("");
    };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(ar_file);
    formData.append("title", title);
    formData.append("title_eng", title_eng);
    formData.append("puser", userId);
    formData.append("status", status);
    formData.append("sub_title", sub_title);
    formData.append("publish_date", publish_date);
    formData.append("ar_file", ar_file);
    //   formData.append(" ", );
    fetch(`http://nobovabna.com/webapi/mIssue_new.php`, {
      method: "POST",
      body: formData,
    })
      //  console.log(formData),
      .then((res) => res.json())
      // .then((res) => {
      //   console.log(res)
      //   res.json()
      // })
      .then((data) => {
         console.log(data);
            setTitle("");
            setTitle_eng("");
            setStatus("");
            setPublish_date("");
            setAr_file("");
            setSub_title("");
      });

    //   };
    // console.log(updateTable)
    // console.log(e.target.serial.value);
    // console.log(e.target.issue.value);
    // console.log(e.target.background.value);
    
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
              <FormLabel className="mt-2 ms-2"> Issue Name (Bangla)</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
                name="serial"
                type="text"
                fullWidth
                // value={formDate}
                onChange={(e) => setTitle?.(e.target.value)}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Issue Name( English) </FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
                //   variant="outlined"
                name="issue"
                type="text"
                fullWidth
                // value={toDate}
                onChange={(e) => setTitle_eng(e.target.value)}
              />
            </Grid>
            {/* <Grid item sm={12} md={6} className="d-flex">
              <div className="idToggle">
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
              </div>
              <Button>Visible</Button>
            </Grid> */}
            {/* <Grid item sm={12} md={6}>
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
            </Grid> */}

            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Publish Status</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                //   label="Service Type"
                label={<Box></Box>}
                // value={currency}
                // value={textValue}
                value={status}
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
              <FormLabel className="mt-2 ms-2">Publish Date</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
                name="background"
                type="date"
                fullWidth
                // value={userName}
                onChange={(e) => setPublish_date(e.target.value)}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Cover Pic</FormLabel>
              {/* <FormLabel className="mt-2 ms-2">File</FormLabel> */}
              <TextField
                // accept="image/*"
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
              {imageUrl && ar_file && (
                <Box mt={2} textAlign="center">
                  <div>Image Preview:</div>
                  <img src={imageUrl} alt={ar_file.name} height="100px" />
                </Box>
              )}
            </Grid>
            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Cover-info</FormLabel>
              {/* <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
                name="background"
                type="text"
                fullWidth
                // value={userName}
                onChange={(e) => setSub_title(e.target.value)}
              /> */}
              <TextareaAutosize
                aria-label="minimum height"
                minRows={2}
                label={<Box></Box>}
                name="background"
                type="text"
                fullWidth
                // value={userName}
                onChange={(e) => setSub_title(e.target.value)}
                placeholder=""
                style={{ display: "block", margin: "7px", width: "100%" }}
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
                  color="warning"
                  width="25%"
                  sx={{ py: 1, mr: 3 }}
                  // type="submit"
                  onClick={resetForm}
                >
                  Reset
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  width="25%"
                  sx={{ py: 1, mr: 3 }}
                  type="submit"
                  onClick={handleOpen}
                >
                  Save
                </Button>
                {/* <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor
                      ligula.
                    </Typography>
                  </Box>
                </Modal> */}
              </Box>
            </FormGroup>
          </FormControl>
        </form>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {/* Data in Response */}
              Successfully Added Data.
            </Typography>
            {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Successfully Added Data.
            </Typography> */}
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default AddIssue;

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
