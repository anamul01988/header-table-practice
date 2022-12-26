import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";

// import PageHeader from "../components/PageHeader";
import { Grid, InputAdornment, Select, TextareaAutosize } from "@mui/material";
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
function AddArticle() {
  const [cn_details, setCn_details] = useState("");
  const [writer, setWriter] = useState("");
  const [article_type, setArticle_type] = useState("");
  const [article_title, setArticle_title] = useState("");
  const [hard_file, setHard_file] = useState("");
  const [text_info, setTextInfo] = useState("");
  const [page_no, setPageNo] = useState("");
  const [info_file, setInfoFile] = useState("");
  const [userId, setUserId] = useState("");
  const [publish_status, setPublish_status] = useState("");
  const [cn_status, setCn_status] = useState(null);
  const [cn_status_section, setCn_status_section] = useState(null);
  // const [cn_status_writer, setCn_status_writer] = useState("7079366c73773279");
  const [cn_status_writer, setCn_status_writer] = useState(null);
  // const [showPassword, setShowPassword] = useState(false);
  // const [publish_date, setPublish_date] = useState("");
  const [ar_file, setAr_file] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const formData = new FormData();
  const classes = useStyles();
  const [issues, setIssues] = useState([]);
  const [sections, setSections] = useState([]);
  const [writers, setWriters] = useState([]);
  // const currencies = [
  //   {
  //     value: "0",
  //     label: "Select",
  //   },
  //   {
  //     value: "1",
  //     label: "Publish",
  //   },
  //   {
  //     value: "2",
  //     label: "Unpublish",
  //   },
  // ];
  const publishes = [
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
      label: "Unpublish",
    },
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onTextChange = (e) => {
    e.preventDefault();
    //    let input = e.target.value;
    //    console.log(input);
    setCn_status(e.target.value);
  };
  const onTextChange1 = (e) => {
    e.preventDefault();
    //    let input = e.target.value;
    //    console.log(input);
    setPublish_status(e.target.value);
  };
  const onTextChangeSection = (e) => {
    e.preventDefault();
    //    let input = e.target.value;
    //    console.log(input);
    setCn_status_section(e.target.value);
  };
  const onTextChangeWriter = (e) => {
    e.preventDefault();
    //    let input = e.target.value;
    //    console.log(input);
    setCn_status_writer(e.target.value);
  };
  //get user information from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  console.log(user.sopnoid);
  useEffect(() => {
    setUserId(user.sopnoid);
  }, []);
  console.log(userId);

  useEffect(() => {
    if (ar_file) {
      setImageUrl(URL.createObjectURL(ar_file));
    }
  }, [ar_file]);

  useEffect(() => {
    fetch(`http://nobovabna.com/webapi/nget_all_issue.php`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIssues(data);
        setCn_status(data[0]?.issue_refer);
      });
  }, []);
  useEffect(() => {
    fetch(`http://nobovabna.com/webapi/nget_all_section.php`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSections(data);
        setCn_status_section(data[0]?.s_refer);
      });
  }, []);
  useEffect(() => {
    fetch(`http://nobovabna.com/webapi/nget_all_writer.php`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWriters(data);
        setCn_status_writer(data[0]?.w_refer);
      });
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();

    formData.append("article_type", cn_status_section);
    formData.append("ar_name", article_title);

    formData.append("writer", cn_status_writer);
    formData.append("hard_file", hard_file);
    formData.append("text_info", text_info);
    formData.append("page_no", page_no);
    formData.append("info_file", info_file);
    formData.append("puser", userId);
    formData.append("issue", cn_status);
    formData.append("publish_status", publish_status);
    // formData.append("ar_file", ar_file);
    //   formData.append(" ", );
    fetch(`http://nobovabna.com/webapi/article_new.php`, {
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
    // console.log(e.target.serial.value);
    // console.log(e.target.issue.value);
    // console.log(e.target.background.value);
  };
  return (
    <>
      <PageHeader
        className="mt-5"
        title="Add Data"
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
              <FormLabel className="mt-2 ms-2">Issue Select</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                // label="Select"
                label={<Box></Box>}
                // value={currency}
                // value={textValue}
                value={cn_status}
                fullWidth
                onChange={onTextChange}
                disabled={issues.length === 0 ? true : false}
                select
                SelectProps={{
                  native: true,
                }}
              >
                {issues.map((option) => (
                  <option
                    key={option.id}
                    cn_status={option.issue_refer}
                    value={option.issue_refer}
                  >
                    {/* <em>None</em> */}
                    {option.name}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Section</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                //   label="Service Type"
                label={<Box></Box>}
                // value={currency}
                // value={textValue}
                value={cn_status_section}
                fullWidth
                onChange={onTextChangeSection}
                // onChange={(handleChange, onTextChange)}
                disabled={sections.length === 0 ? true : false}
                select
                SelectProps={{
                  native: true,
                }}
                //   helperText="Please select your currency"
              >
                {sections.map((option) => (
                  <option key={option.id} value={option.s_refer}>
                    {option.s_name}
                  </option>
                ))}
              </TextField>
            </Grid>
            {/* <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Section</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
                name="serial"
                type="text"
                fullWidth
                // value={formDate}
                onChange={(e) => setArticle_type(e.target.value)}
              />
            </Grid> */}
            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Title</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
                name="serial"
                type="text"
                fullWidth
                // value={formDate}
                onChange={(e) => setArticle_title(e.target.value)}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Writer Select</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                //   label="Service Type"
                label={<Box></Box>}
                // value={currency}
                // value={textValue}
                value={cn_status_writer}
                fullWidth
                onChange={onTextChangeWriter}
                // onChange={(handleChange, onTextChange)}
                disabled={writers.length === 0 ? true : false}
                select
                SelectProps={{
                  native: true,
                }}
                //   helperText="Please select your currency"
              >
                {writers.map((option) => (
                  <option key={option.id} value={option.w_refer}>
                    {option.w_name}
                  </option>
                ))}
              </TextField>
            </Grid>
            {/* <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Writer Select</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
                name="serial"
                type="text"
                fullWidth
                // value={formDate}
                onChange={(e) => setWriter(e.target.value)}
              />
            </Grid> */}
            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Attach pdf</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
                name="serial"
                type="file"
                fullWidth
                // value={formDate}
                onChange={(e) => setHard_file(e.target?.files[0])}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Soft Info</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
                name="serial"
                type="text"
                fullWidth
                // value={formDate}
                onChange={(e) => setTextInfo(e.target.value)}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Page No</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
                name="serial"
                type="Number"
                fullWidth
                // value={formDate}
                onChange={(e) => setPageNo(e.target.value)}
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
                value={publish_status}
                fullWidth
                onChange={onTextChange1}
                // onChange={(handleChange, onTextChange)}
                select
                SelectProps={{
                  native: true,
                }}
                //   helperText="Please select your currency"
              >
                {publishes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Attach Short file</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                id="filled-basic"
                label={<Box></Box>}
                color="primary"
                // name="background"
                type="file"
                fullWidth
                // value={userName}
                onChange={(e) => setInfoFile(e.target?.files[0])}
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
                  F
                  sx={{ py: 1, mr: 3 }}
                  type="submit"
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

export default AddArticle;
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
