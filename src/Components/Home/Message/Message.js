import React, { useEffect, useRef } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import { AiOutlineReload } from "react-icons/ai";
import SearchIcon from "@mui/icons-material/Search";
import parse from "html-react-parser";
import backGroundChat from "../../Vendors/Dashboard-img/message_back.jpg";
import {
  Grid,
  ListItem,
  Avatar,
  TextField,
  Fab,
  InputAdornment,
  Input,
} from "@mui/material";
import ScrollableFeed from "react-scrollable-feed";
import { List } from "@mui/material";
import { Divider } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { FiSend } from "react-icons/fi";
import { TiAttachmentOutline } from "react-icons/ti";
import { GiCancel } from "react-icons/gi";
import MessageList from "./MessageList/MessageList";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import DetailsComp from "./DetailsComp/DetailsComp";
import UserListComp from "./UserListComp/UserListComp";
// import useSound from "use-sound";
// import msgSend from "../../../Components/Vendors/COMCell_Message sent (ID 1313)_BSB.mp3";

let temp = false;
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    // height: "100%",
  },
  chatSection: {
    width: "100%",
    height: "calc(100vh - 100px)",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  borderLeft500: {
    borderLeft: "1px solid #e0e0e0",
  },
  messageArea: {
    height:
      window.innerHeight >= 768 ? "calc(100vh - 100px)" : "calc(100vh - 100px)",
    // overflowY: "auto",
  },
});

const Message = () => {
  useEffect(() => {
    document.title = "Ghorami Desk - Message";
  }, []);

  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("user"));
  const [msgUserList, setMsgUserList] = React.useState([]);
  const [singleMsgUser, setSingleMsgUser] = React.useState({});
  const [msgList, setMsgList] = React.useState([]);
  const [attachFileData, setAttachFileData] = React.useState([]);
  const [attachFile, setAttachFile] = React.useState(null);
  const [msgText, setMsgText] = React.useState("");
  const { pageRefresh, setPageRefresh, socket } = useAuth();
  const [userDetails, setUserDetails] = React.useState({});
  const [sameMsg, setSameMsg] = React.useState("");
  const [replySameObj, setReplySameObj] = React.useState({});
  // console.log(sameMsg.length, replySameObj.at_rid);
  const [searchText, setSearchText] = React.useState("");
  const [userSearchText, setUserSearchText] = React.useState("");
  const [joinFunc, setJoinFunc] = React.useState(null);
  const [socketId, setSocketId] = React.useState("");

  //click to scroll the chat in mobile view
  const myRef = useRef(null);

  //socket implement
  // console.log(singleMsgUser);
  useEffect(() => {
    socket.on("connect", () => {
      // alert("connected successfully with socket");
      setSocketId(socket.id);
      // console.log("connected successfully with socket", socket.id);
    });
    if (joinFunc) {
      socket.emit("join", joinFunc);
    }

    socket.on("newmsg", (data) => {
      // console.log(data);
      const perseData = JSON.parse(data);
      setMsgList([...msgList, perseData]);
    });

    return () => {
      socket.on("disconnect");
      socket.off();
    };
  }, [msgList, joinFunc, socket]);

  useEffect(() => {
    const formData = new FormData();
    formData.append("SopnoID", user?.sopnoid);
    formData.append("action", "fetch");
    axios
      .post(`${user.master_url}/profile/login/api/mroom_all.php`, formData)
      .then((res) => {
        // console.log(res.data);
        const data = res?.data?.sort((a, b) => {
          if (a?.rstate === "1") {
            return -1;
          } else {
            return 1;
          }
        });
        // setMsgUserList(res.data.reverse());
        setMsgUserList(data);
        const filterUserSearchText = data?.filter((item) =>
          item.psname.toLowerCase().includes(userSearchText.toLowerCase())
        );
        setMsgUserList(filterUserSearchText);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?.master_url, user?.sopnoid, userSearchText]);

  const handleSingleUserMessage = (singleUser) => {
    setSingleMsgUser(singleUser);
    singleMessage(singleUser);
    // setTimeout(() => {
    attachFileMsgData(singleUser);
    // }, 1500);
    userDetailsFunction(singleUser);
    setSameMsg("");
  };

  //for message
  const singleMessage = (singleUser) => {
    setJoinFunc(singleUser?.m_room);

    const formData = new FormData();
    formData.append("SopnoID", user.sopnoid);
    formData.append("pref", singleUser?.m_room);
    formData.append("action", "select");
    const data = axios
      .post(
        `${user.master_url}/profile/login/api/mroom_select.php
`,
        formData
      )
      .then((res) => {
        // console.log(res.data);
        setMsgList(res.data);
        const filterSearchText = res.data?.filter((item) =>
          item?.at_message.toLowerCase().includes(searchText.toLowerCase())
        );
        setMsgList(filterSearchText);
      })
      .catch((err) => {
        console.log(err);
      });
    return data;
  };

  //auto show fst user msg
  useEffect(() => {
    setTimeout(() => {
      singleMessage(msgUserList?.[0]);
      setSingleMsgUser(msgUserList?.[0]);
    }, 500);
    return () => {
      setMsgList([]);
    };
  }, [msgUserList]);

  // filtering data by search
  useEffect(() => {
    singleMessage(singleMsgUser);
  }, [searchText]);

  //for attach file message data
  const attachFileMsgData = (singleUser) => {
    const formData = new FormData();
    formData.append("SopnoID", user.sopnoid);
    formData.append("pref", singleUser.m_room);
    formData.append("action", "fetch");
    axios
      .post(
        `${user.master_url}/profile/login/api/mroom_attach_all.php
`,
        formData
      )
      .then((res) => {
        // console.log(res.data);
        setAttachFileData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const datas = [...msgList];
  // console.log(datas);
  // reply message

  const handleReply = (msg) => {
    const replySame = datas?.find((data) => data?.at_rid === msg?.at_rid);

    setReplySameObj(replySame);
    // setSameMsg(msg?.at_message);
    if (msg.at_head === "JobOffer") {
      setSameMsg(msg?.at_offer[0]?.of_title);
    } else {
      setSameMsg(msg?.at_message);
    }
  };

  // console.log(attachFileData);
  const renderMessages = () => {
    //reverse array

    // console.log(datas);
    return datas?.map((msg, i) => {
      return (
        <ScrollableFeed key={i}>
          <MessageList
            msg={msg}
            handleReply={handleReply}
            datas={datas}
            handleReloadChat={handleReloadChat}
          />
        </ScrollableFeed>
      );
    });
  };

  React.memo(renderMessages, [datas]);

  // use Send sound
  // const [play] = useSound(msgSend);

  //click function for send message
  const handleSendMessage = (e) => {
    e.preventDefault();
    // send to audio play
    // play();
    // console.log(msgText);
    if (attachFile) {
      const formData = new FormData();
      formData.append("poster", user.sopnoid);
      formData.append("room_id", singleMsgUser?.m_room);
      formData.append("heada", "attachment");
      formData.append("image", attachFile);
      formData.append("note", msgText);
      if (sameMsg.length > 0) {
        formData.append("at_reply_id", replySameObj?.at_rid);
      } else {
        formData.append("at_reply_id", "");
      }
      axios
        .post(`${user.master_url}/profile/t_message_add_update.php`, formData)
        .then((res) => {
          // console.log(res.data);
          setPageRefresh(!pageRefresh);
          setMsgText("");
          setAttachFile(null);
          singleMessage(singleMsgUser);
          attachFileMsgData(singleMsgUser);
        })
        .catch((err) => {
          console.log(err);
        });
      setMsgText("");
      setAttachFile(null);
    } else {
      if (!socketId) {
        const formData = new FormData();
        formData.append("poster", user.sopnoid);
        formData.append("t_comment", msgText);
        formData.append("room_id", singleMsgUser?.m_room);

        if (sameMsg.length > 0) {
          formData.append("at_reply_id", replySameObj?.at_rid);
          formData.append("head", "reply");
        } else {
          formData.append("at_reply_id", "");
          formData.append("head", "new");
        }
        axios
          .post(
            `${user.master_url}/profile/message/t_message_new.php`,
            formData
          )
          .then((res) => {
            // console.log(res.data);
            setPageRefresh(!pageRefresh);
            setMsgText("");
            singleMessage(singleMsgUser);
            attachFileMsgData(singleMsgUser);
            setSameMsg("");
            setReplySameObj({});
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        const date = new Date();
        const ip = JSON.parse(localStorage.getItem("ip"));
        let mtitle = {
          messagea: msgText,
          receivera: "",
          senddatea:
            date.getFullYear() +
            "-" +
            (date.getMonth() + 1) +
            "-" +
            date.getDate(),
          purposea: "ghorami_message",
          devipa: ip,
          sendera: user.sopnoid,
          rooma: singleMsgUser?.m_room,
          heada: sameMsg.length > 0 ? "reply" : "new",
          at_reply_ida: sameMsg.length > 0 ? replySameObj?.at_rid : "",
          at_ppic: user.userpic,
          at_pname: user.uname,
        };
        socket.emit("msg", JSON.stringify(mtitle));
      }
    }

    e.target.reset();
    setSameMsg("");
    setReplySameObj({});
    // setAttachFile(null);
  };

  //for user details
  const handleUserDetails = () => {
    // handle toggle button for open and close a grid with transition animation
    userDetailsFunction(singleMsgUser);
    const detailsUser = document.getElementById("detailsUser");
    if (detailsUser.style.display === "block") {
      temp = false;
      detailsUser.style.display = "none";
    } else {
      temp = true;
      detailsUser.style.display = "block";
    }
  };

  const userDetailsFunction = (singleUser) => {
    const formData = new FormData();
    formData.append("SopnoID", user.sopnoid);
    formData.append("action", "fetch");
    formData.append("pref", singleUser.m_room);
    axios
      .post(
        `${user.master_url}/profile/login/api/mroom_sender_select.php`,
        formData
      )
      .then((res) => {
        // console.log(res.data);
        setUserDetails(res.data?.[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleReloadChat = (singleMsgUser) => {
    singleMessage(singleMsgUser);
    attachFileMsgData(singleMsgUser);
  };

  return (
    <div>
      <Grid container className={classes.chatSection}>
        <Grid
          item
          xs={12}
          sm={12}
          lg={2}
          md={3}
          className={classes.borderRight500}
        >
          <List>
            <TextField
              type="search"
              variant="outlined"
              size="small"
              label="Search"
              color="warning"
              onChange={(e) => setUserSearchText(e.target.value)}
              sx={{
                mr: 1,
                ml: 1,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </List>
          {/* <Divider /> */}

          <UserListComp
            singleMsgUser={singleMsgUser}
            handleSingleUserMessage={handleSingleUserMessage}
            msgUserList={msgUserList}
            myRef={myRef}
          />
        </Grid>
        {/* {Object.keys(singleMsgUser)?.length > 0 ? ( */}
        
          <Grid
            item
            xs={12}
            sm={12}
            lg={!temp ? 10 : 8}
            md={!temp ? 9 : 8}
            ref={myRef}
          >
            <form onSubmit={handleSendMessage}>
              {/* message list  */}
              <Box
                sx={{
                  display: "flex",

                  alignItems: {
                    xs: "flex-start",
                    sm: "center",
                    md: "center",
                  },
                  justifyContent: {
                    xs: "flex-start",
                    sm: "flex-start",
                    md: "space-between",
                  },
                  flexWrap: "wrap",
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                    md: "row",
                  },
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    // marginBottom: "1rem",
                    // marginTop: "1rem",
                    paddingLeft: "1rem",

                    // width: "30%",
                  }}
                >
                  {/* {user?.uname} */}
                  <ListItem button onClick={handleUserDetails}>
                    <ListItemIcon>
                      <Avatar alt="Remy Sharp" src={singleMsgUser?.userpic} />
                    </ListItemIcon>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {" "}
                      <Box>
                        <h6
                          style={{
                            display: "inline",
                          }}
                        >
                          {singleMsgUser?.psname}
                        </h6>
                        {singleMsgUser?.rstate === "1" ? (
                          <span
                            style={{
                              backgroundColor: "green",
                              padding: "0px 5px",
                              borderRadius: "50%",
                              color: "#000",
                              fontSize: "10px",
                              fontWeight: "bold",
                              marginLeft: "5px",
                              textAlign: "center",
                            }}
                          ></span>
                        ) : (
                          <span
                            style={{
                              backgroundColor: "gray",
                              padding: "0px 5px",
                              borderRadius: "50%",
                              color: "#000",
                              fontSize: "10px",
                              fontWeight: "bold",
                              marginLeft: "5px",
                              textAlign: "center",
                            }}
                          ></span>
                        )}
                      </Box>
                      <Box>
                        <small
                          style={{
                            // marginLeft: "4.5rem",
                            display: "block",
                            color: "#8c8c8c",
                          }}
                        >
                          {singleMsgUser?.rstate === 0 &&
                            singleMsgUser?.last_time}
                        </small>
                      </Box>
                    </Box>
                  </ListItem>
                </span>

                <Box>
                  <Button
                    variant="outlined"
                    sx={[
                      {
                        mt: 0.5,
                        mr: 1,

                        "@media screen and (max-width: 768px)": {
                          mb: 2,
                        },
                      },
                    ]}
                    size="small"
                    color="warning"
                    onClick={() => handleReloadChat(singleMsgUser)}
                  >
                    <AiOutlineReload
                      style={{
                        fontSize: "1.4rem",
                        color: "#ff0000",
                      }}
                    />
                  </Button>
                  <TextField
                    type="search"
                    variant="outlined"
                    size="small"
                    label="Search"
                    color="warning"
                    onChange={(e) => {
                      setSearchText(e.target.value);
                      // if (e.target.value === "") {
                      //   singleMessage(singleMsgUser);
                      // }
                    }}
                    sx={{
                      mr: 1,
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  height:
                    window.innerHeight >= 500
                      ? "calc(100vh - 280px)"
                      : "calc(100vh - 100px)",
                  backgroundImage: `url(${backGroundChat})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundAttachment: "fixed",
                }}
              >
                <ScrollableFeed>
                  <Box>{renderMessages()}</Box>
                </ScrollableFeed>
              </Box>
              {sameMsg !== "" && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flexDirection: "row-reverse",
                    width: "20%",

                    margin: "5px 73%",
                  }}
                >
                  <p
                    style={{
                      padding: "5px",
                      borderRadius: "10px 10px 10px 10px",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    {parse?.(sameMsg)}
                  </p>
                  <span
                    style={{
                      cursor: "pointer",
                      marginTop: "0.8rem",
                      marginRight: "0.5rem",
                    }}
                    onClick={() => {
                      setSameMsg("");
                      setReplySameObj({});
                    }}
                  >
                    <GiCancel />
                  </span>
                </Box>
              )}
              <Divider />
              <Grid container style={{ padding: "20px" }}>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <label htmlFor="contained-button-file">
                    <Input
                      id="contained-button-file"
                      type="file"
                      style={{ display: "none" }}
                      fullWidth
                      multiple
                      onChange={(e) => {
                        setAttachFile(e.target?.files?.[0]);
                      }}
                    />

                    <Button
                      // variant="contained"
                      component="span"
                      size="small"
                      sx={{
                        borderRadius: "4px",
                        mr: 3,
                        // backgroundColor: "#ff0000",
                        color: "#ff0000",
                      }}
                    >
                      <TiAttachmentOutline
                        style={{
                          fontSize: "1.5rem",
                        }}
                      />
                    </Button>
                  </label>
                </Grid>
                <Grid
                  item
                  xs={9}
                  sx={[
                    {
                      "@media screen and (max-width: 768px)": {
                        mb: 5,
                      },
                    },
                  ]}
                >
                  <TextField
                    id="outlined-basic-email"
                    label="Type a message"
                    multiline
                    // rows={1}
                    fullWidth
                    variant="outlined"
                    onChange={(e) => {
                      setMsgText?.(e.target.value);
                    }}
                    color="warning"
                    sx={{
                      mt: 1,
                    }}
                  />

                  {attachFile && (
                    <ul>
                      <li>
                        <span
                          style={{
                            color: "#97ACB7",
                            wordBreak: "break-all",
                          }}
                        >
                          {attachFile?.name}{" "}
                        </span>
                        <span
                          onClick={() => {
                            setAttachFile?.(null);
                          }}
                          style={{
                            color: "#000",
                            cursor: "pointer",
                          }}
                        >
                          <GiCancel />
                        </span>
                      </li>
                    </ul>
                  )}
                </Grid>
                <Grid item xs={1} align="right">
                  <Button
                    variant="text"
                    // onMouseEnter={play}
                    color="primary"
                    type="submit"
                    {...(msgText?.length > 0
                      ? { disabled: false }
                      : { disabled: true })}
                  >
                    <Fab
                      size="small"
                      sx={[
                        {
                          backgroundColor: "#FF0000",
                          zIndex: "5",
                          mt: 1,
                          "&:hover": {
                            backgroundColor: "#FF0000",
                          },
                        },
                      ]}
                      aria-label="add"
                    >
                      <FiSend
                        style={{
                          fontSize: "1.5rem",
                          color: "#fff",
                        }}
                      />
                    </Fab>
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid
            item
            xs={12}
            md={!temp ? 2 : 2}
            className={classes.borderLeft500}
            id="detailsUser"
            sx={{
              display: "none",
            }}
          >
            <DetailsComp userDetails={userDetails} />
          </Grid>
     
      </Grid>

    </div>
  );
};

export default React.memo(Message);
