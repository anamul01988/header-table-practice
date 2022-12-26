import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import swal from "sweetalert";
const AcceptMsgModal = ({ open, handleClose, offer, handleReloadChat }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    borderRadius: 4,
    p: 4,
  };
  // console.log(offer);
  const [note, setNote] = React.useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const handleAccept = () => {
    let axios = require("axios");
    let FormData = require("form-data");
    let data = new FormData();
    data.append("SopnoID", user?.sopnoid);
    data.append("offer_refer", offer?.of_refer);
    data.append("states", "2");
    data.append("action_type", offer?.of_action);
    data.append("mesage", note);
    let config = {
      method: "post",
      url: `${user?.master_url}/profile/login/api/mroom_offer_status.php`,
      data: data,
    };
    axios(config)
      .then(function (response) {
        if (response.data[0].message === "Success") {
          swal({
            title: "Offer Accepted",
            text: "Offer Accepted",
            icon: "success",
          });
          handleReloadChat();
        }

        handleClose();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="body">
            Offer Accept Note
          </Typography>
          <TextField
            id="standard-basic"
            label="Note"
            fullWidth
            margin="normal"
            onChange={(e) => setNote(e.target.value)}
          />
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              handleAccept();
            }}
          >
            Send
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AcceptMsgModal;
