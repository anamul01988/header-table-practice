import React from "react";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemIcon,
  // ListItemText,
} from "@mui/material";

const UserListComp = ({
  msgUserList,
  handleSingleUserMessage,
  singleMsgUser,
  myRef,
}) => {
  // console.log(msgUserList);

  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <Box
      sx={[
        {
          overflowY: msgUserList?.length > 10 ? "scroll" : "auto",
          height:
            window.innerHeight >= 500
              ? "calc(100vh - 150px)"
              : "calc(100vh - 100px)",
        },
      ]}
    >
      {msgUserList?.map((user, i) => (
        <List
          key={i}
          onClick={() => {
            handleSingleUserMessage(user);
            executeScroll();
          }}
          sx={{
            p: 0,
            mt: 0.5,
            borderBottom: "1px solid #e0e0e0",
          }}
          //active List style
          style={{
            backgroundColor:
              singleMsgUser?.m_room === user?.m_room ? "#e0e0e0" : "",
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <Avatar alt="Remy Sharp" src={user?.userpic} />
            </ListItemIcon>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              {" "}
              {/* <ListItemText primary={user?.psname}></ListItemText> */}
              <small
                style={{
                  wordBreak: "break-all",
                  fontWeight: "bold",
                }}
              >
                {user?.psname}
              </small>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  flex: 1,

                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "block",
                  }}
                >
                  {user?.rstate === "1" ? (
                    <>
                      {" "}
                      <span
                        style={{
                          backgroundColor: "green",
                          padding: "0px 5px",
                          borderRadius: "50%",
                          color: "#000",
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginRight: "5px",
                          textAlign: "center",
                        }}
                      ></span>
                      <span
                        style={{
                          fontSize: "12px",
                          color: "#828282",
                        }}
                      >
                        Online
                      </span>
                    </>
                  ) : (
                    <>
                      {" "}
                      <span
                        style={{
                          backgroundColor: "gray",
                          padding: "0px 5px",
                          borderRadius: "50%",
                          color: "#000",
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginRight: "5px",
                          textAlign: "center",
                        }}
                      ></span>
                      <span
                        style={{
                          fontSize: "12px",
                          color: "#828282",
                        }}
                      >
                        Offline
                      </span>
                    </>
                  )}
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#1BB096",
                    borderRadius: "5px",
                    paddingX: "5px",
                    color: "#fff",
                    fontSize: "11px",
                    textAlign: "right",
                    marginLeft: "5px",
                  }}
                >
                  {user?.new_count === 0 ? "" : user?.new_count}
                </Box>
              </Box>
            </Box>
          </ListItem>
        </List>
      ))}
    </Box>
  );
};

export default React.memo(UserListComp);
