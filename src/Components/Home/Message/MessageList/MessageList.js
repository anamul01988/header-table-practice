import React, { useEffect } from "react";
// import "./Message.css";
import { Avatar, Box } from "@mui/material";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { MdReplyAll } from "react-icons/md";
import parse from "html-react-parser";
import { Button } from "@mui/material";
import AcceptMsgModal from "./AcceptMsgModal";
import swal from "sweetalert";

const useStyles = makeStyles((theme) =>
  createStyles({
    messageRow: {
      display: "flex",
    },
    messageBlue: {
      marginLeft: "20px",
      marginBottom: "10px",
      padding: "9px 9px 0 9px",
      backgroundColor: "#E9EAEC",
      width: "fit-content",
      // minWidth: "200px",
      wordBreak: "break-word",
      textAlign: "left",
      font: "400 1em 'Open Sans', sans-serif ",
      lineHeight: "1.6",
      border: "1px solid #E9EAEC",
      borderRadius: "10px",
      fontWeight: "550",
    },

    messageContent: {
      padding: 0,
      margin: 0,
      wordBreak: "break-word",
    },
    avatarNothing: {
      color: "transparent",
      backgroundColor: "transparent",
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    displayNameLeft: {
      marginLeft: "20px",
      color: "#97ACB7",
    },
    displayNameRight: {
      marginRight: "20px",
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "row-reverse",
      textAlign: "right",
      alignItems: "center",
      color: "#97ACB7",
    },
  })
);

const MessageList = ({
  msg,
  attachFile,
  handleReply,
  handleReloadChat,
  datas,
}) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [offer, setOffer] = React.useState({});
  const classes = useStyles();
  const [check, setCheck] = React.useState([]);
  // console.log(msg.at_offer[0]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const check = datas?.filter((item) => item?.at_rid === msg?.at_reply_id);
    // console.log(check);
    setCheck(check);
  }, [datas, msg]);

  const handleAcceptOffer = (offer) => {
    handleOpen();
    setOffer(offer);
  };

  const handleOfferDeny = (offerDeny) => {
    let axios = require("axios");
    let FormData = require("form-data");
    let data = new FormData();
    data.append("SopnoID", user?.sopnoid);
    data.append("offer_refer", offerDeny?.of_refer);
    data.append("states", "0");
    data.append("action_type", offerDeny?.of_action);
    let config = {
      method: "post",
      url: `${user?.master_url}/profile/login/api/mroom_offer_status.php`,
      data: data,
    };
    axios(config)
      .then(function (response) {
        if (response?.data[0]?.message === "Success") {
          swal({
            title: "Offer Denied",
            text: "Offer Denied",
            icon: "success",
          });
          handleReloadChat();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Box>
      {msg?.at_poster === user?.sopnoid ? (
        // for right side message
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            my: 2,
            ml: {
              xs: "20px",
              md: "250px",
            },
          }}
        >
          {msg?.at_head === "JobOffer" && msg?.at_offer.length > 0 ? (
            ""
          ) : (
            <span
              style={{
                marginRight: "10px",
                marginTop: "38px",
                transform: "rotate(180deg)",
                cursor: "pointer",
              }}
              onClick={() => {
                handleReply(msg);
              }}
            >
              <MdReplyAll />
            </span>
          )}
          <Box>
            <div className={classes?.displayNameRight}>
              <Avatar
                alt="Remy Sharp"
                src={msg?.at_ppic}
                sx={{ width: 34, height: 34, marginLeft: "10px", mb: 1 }}
              />
              {msg?.at_pname}
            </div>
            {check?.map((item, i) => {
              return (
                <Box
                  key={i}
                  sx={[
                    {
                      backgroundColor: "#E9EAEC",
                      border: "1px solid #E9EAEC",
                      borderRadius: "10px",
                      padding: "9px 9px 0 9px",
                      m: 2,
                    },
                  ]}
                >
                  {item?.at_message}
                  <Box
                    sx={[
                      {
                        fontSize: "12px",
                      },
                    ]}
                  >
                    Message from {item?.at_pname}
                  </Box>
                </Box>
              );
            })}
            <Box
              sx={{
                // width: "fit-content",
                // minWidth: "200px",
                wordBreak: "break-word",
                mr: 8,
                padding: "8px",
                font: "400 1em 'Open Sans', sans-serif",
                border: "1px solid #D1E3EC",
                borderRadius: "10px",
                backgroundColor: "#D1E3EC",
                display: "flex",
                alignItems: "start",
                justifyContent: "flex-start",
                flexDirection: "column",
                fontWeight: "550",
                lineHeight: "1.6",
              }}
            >
              {msg?.at_head === "JobOffer" && msg?.at_offer.length > 0 ? (
                <>
                  <Box
                    sx={[
                      {
                        fontSize: "18px",
                        color: "#2D2D2D",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        "@media (max-width: 1024px)": {
                          fontSize: "16px",
                          flexDirection: "column-reverse",
                          alignItems: "flex-start",
                        },
                        "@media (max-width: 768px)": {
                          fontSize: "16px",
                          flexDirection: "column-reverse",
                        },
                      },
                    ]}
                  >
                    {msg?.at_offer?.[0]?.of_title}
                    <Box
                      sx={[
                        {
                          padding: "2px 5px",

                          borderRadius: "10px",
                          color: "#fff",
                          backgroundColor: "#1B5E20",
                          marginLeft: "220px",
                          "@media (max-width: 1024px)": {
                            //  margin: "100px",
                            fontSize: "12px",
                          },
                          "@media (max-width: 768px)": {
                            marginLeft: "100px",
                            fontSize: "12px",
                          },
                        },
                      ]}
                    >
                      Job Offer
                    </Box>
                  </Box>
                  <span
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    {msg?.at_offer?.[0]?.of_message}
                  </span>

                  <Box
                    sx={{
                      fontSize: "13px",
                      my: 1,
                    }}
                  >
                    Budget:{" "}
                    <span
                      style={{
                        backgroundColor: "#ff0000",
                        padding: "2px 5px",
                        borderRadius: "10px",
                        color: "#fff",
                      }}
                    >
                      {msg?.at_offer?.[0]?.of_price}{" "}
                      <span>
                        {msg?.at_offer?.[0]?.of_currency === "1" ? "BDT" : "USD"}
                      </span>
                    </span>
                  </Box>
                  <Box
                    sx={{
                      fontSize: "12px",
                      color: "#2D2D2D",
                    }}
                  >
                    Offer Duration: {msg?.at_offer?.[0]?.of_date}
                    {" - "}
                    <span> {msg?.at_offer?.[0]?.of_expire}</span>
                  </Box>
                  <Box
                    sx={{
                      fontSize: "12px",
                      color: "#2D2D2D",
                    }}
                  >
                    Work Duration: {msg?.at_offer[0]?.of_work_start} {" - "}
                    <span> {msg?.at_offer[0]?.of_work_expire}</span>
                  </Box>
                  <Box
                    sx={[
                      {
                        mt: 2,
                      },
                    ]}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        mr: 1,
                        backgroundColor: "gray",
                      }}
                      onClick={() => {
                        handleOfferDeny(msg?.at_offer?.[0]);
                      }}
                    >
                      Deny
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => {
                        handleAcceptOffer(msg?.at_offer?.[0]);
                      }}
                    >
                      Accept
                    </Button>
                    <AcceptMsgModal
                      open={open}
                      handleClose={handleClose}
                      offer={offer}
                      handleReloadChat={handleReloadChat}
                    />
                  </Box>
                </>
              ) : (
                <> {parse(msg?.at_message)}</>
              )}
              <span
                style={{
                  fontSize: "12px",
                  textAlign: "right",
                  alignSelf: "flex-end",
                }}
              >
                {msg?.at_timestamp}
              </span>
              <span
                style={{
                  fontSize: "12px",
                  textAlign: "left",
                  alignSelf: "flex-start",
                }}
              >
                {msg?.at_state === "1" ? "Seen" : "Unseen"}
              </span>
            </Box>
          </Box>
        </Box>
      ) : (
        //empty object check
        <Box className={classes?.messageRow}>
          <Avatar
            alt=""
            className={classes?.orange}
            src={msg?.at_ppic}
            sx={{ width: 24, height: 24, ml: 1 }}
          ></Avatar>
          <div>
            <div className={classes?.displayNameLeft}>{msg?.at_pname}</div>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className={classes.messageBlue}>
                <div>
                  <p className={classes.messageContent}>
                    {msg?.at_head === "JobOffer" && msg?.at_offer.length > 0 ? (
                      <>
                        <Box
                          sx={[
                            {
                              fontSize: "18px",
                              color: "#2D2D2D",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              "@media (max-width: 1024px)": {
                                fontSize: "16px",
                                flexDirection: "column-reverse",
                                alignItems: "flex-start",
                              },
                              "@media (max-width: 768px)": {
                                fontSize: "16px",
                                flexDirection: "column-reverse",
                              },
                            },
                          ]}
                        >
                          {msg?.at_offer[0]?.of_title}
                          <Box
                            sx={[
                              {
                                padding: "2px 5px",

                                borderRadius: "10px",
                                color: "#fff",
                                backgroundColor: "#1B5E20",
                                marginLeft: "220px",
                                "@media (max-width: 1024px)": {
                                  //  margin: "100px",
                                  fontSize: "12px",
                                },
                                "@media (max-width: 768px)": {
                                  marginLeft: "100px",
                                  fontSize: "12px",
                                },
                              },
                            ]}
                          >
                            Job Offer
                          </Box>
                        </Box>
                        <span
                          style={{
                            fontSize: "14px",
                          }}
                        >
                          {msg?.at_offer[0]?.of_message}
                        </span>

                        <Box
                          sx={{
                            fontSize: "13px",
                            my: 1,
                          }}
                        >
                          Budget:{" "}
                          <span
                            style={{
                              backgroundColor: "#ff0000",
                              padding: "2px 5px",
                              borderRadius: "10px",
                              color: "#fff",
                            }}
                          >
                            {msg?.at_offer[0]?.of_price}{" "}
                            <span>
                              {msg?.at_offer[0]?.of_currency === "1"
                                ? "BDT"
                                : "USD"}
                            </span>
                          </span>
                        </Box>
                        <Box
                          sx={{
                            fontSize: "12px",
                            color: "#2D2D2D",
                          }}
                        >
                          Offer Duration: {msg?.at_offer[0]?.of_date}
                          {" - "}
                          <span> {msg?.at_offer[0]?.of_expire}</span>
                        </Box>
                        <Box
                          sx={{
                            fontSize: "12px",
                            color: "#2D2D2D",
                          }}
                        >
                          Work Duration: {msg?.at_offer[0]?.of_work_start}{" "}
                          {" - "}
                          <span> {msg?.at_offer[0]?.of_work_expire}</span>
                          <Box
                            sx={[
                              {
                                mt: 2,
                              },
                            ]}
                          >
                            <Button
                              variant="contained"
                              sx={{
                                mr: 1,
                                backgroundColor: "gray",
                              }}
                              onClick={() => {
                                handleOfferDeny(msg?.at_offer[0]);
                              }}
                            >
                              Deny
                            </Button>
                            <Button
                              variant="contained"
                              color="success"
                              onClick={() => {
                                handleAcceptOffer(msg?.at_offer[0]);
                              }}
                            >
                              Accept
                            </Button>
                            <AcceptMsgModal
                              open={open}
                              handleClose={handleClose}
                              offer={offer}
                              handleReloadChat={handleReloadChat}
                            />
                          </Box>
                        </Box>
                      </>
                    ) : (
                      parse(msg?.at_message)
                      // msg?.at_message
                    )}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      textAlign: "right",
                      marginTop: "10px",
                    }}
                  >
                    {msg?.at_timestamp}
                  </p>
                  <span
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    {msg?.at_state === "1" ? "Seen" : "Unseen"}
                  </span>
                </div>
              </div>
              <Box
                sx={{
                  ml: "20px",
                  cursor: "pointer",
                  mr: {
                    xs: "20px",
                    md: "250px",
                  },
                }}
                onClick={() => {
                  handleReply(msg);
                }}
              >
                {msg?.at_head === "JobOffer" && msg?.at_offer.length > 0 ? (
                  ""
                ) : (
                  <MdReplyAll />
                )}
              </Box>
            </Box>
            {/* <Box></Box> */}
          </div>
        </Box>
      )}
    </Box>
  );
};

export default React.memo(MessageList);
