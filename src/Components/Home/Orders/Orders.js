import React from 'react';
import AdminHome from '../AdminHome/AdminHome';
import TableDefault from './../Home/Hook/TableDefault';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { Box } from "@mui/material";
import ButtonComp from "./../../Shared/Button/Button";
import SearchTable from './../Home/Hook/SearchTable';
import AddOrders from './AddOrders';
const Orders = () => {
   const [prevToggle, setPrevToggle] = useState();
  const [refreshToggle, setRefreshToggle] = useState();
      const [show, setShow] = useState(false);
      const [refresh, setRefresh] = useState(false);
      const columns = [
        { id: 0, label: "Id", minWidth: 60 },
        { id: 1, label: "Title", minWidth: 60 },
        {
          id: 2,
          label: "Title English",
          minWidth: 60,
        },
        {
          id: 3,
          label: "Status",
          minWidth: 60,
        },
        {
          id: 4,
          label: "Action",
          minWidth: 60,
        },
      ];
    return (
      <div>
        {/* <AdminHome
          // setPrevToggle={setPrevToggle}
          // setRefreshToggle={setRefreshToggle}
        /> */}
        <div style={{ width: "100%" }} className="mb-5 mt-5">
          <Box
            sx={{
              mt: 5,
              mb: 5,
            }}
          >
            <Box
              sx={[
                {
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "start",
                  mt: 2,
                  flexWrap: "wrap",
                },
              ]}
            >
              <div
                className="btn_prb"
                onClick={() => {
                  setRefresh(!refresh);
                  if (show) {
                    setShow(false);
                  }
                }}
              >
                <ButtonComp title="Refresh" color="warning" refreshIco />
              </div>

              <div className="btn_prb" onClick={() => setShow(!show)}>
                <ButtonComp title="Add" color="info" search show>
                  {/* toggle: {show ? "show" : "hide"} */}
                </ButtonComp>
              </div>

              {/* {show && <div>Hi there</div>} */}
              <div className="btn_prb">
                <ButtonComp title="Export" color="primary" exportIco />
              </div>
            </Box>
          </Box>

          {show && <AddOrders></AddOrders>}
        </div>
        {/* {prevToggle && <SearchTable />} */}
        {!show && (
          <div>
            <Paper mt={2} pt={3} sx={{ width: "100%", mt: "40px" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow sx={{ borderColor: "text.primary" }}>
                      <TableCell align="center" colSpan={12}>
                        Order Table
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            top: 57,
                            minWidth: column.minWidth,
                            fontWeight: "bold",
                          }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* {defaultTd.map((item) => { */}
                    {/* return ( */}
                    <TableRow>
                      <TableCell align="left">0</TableCell>
                      <TableCell align="left">aa</TableCell>
                      <TableCell align="left">bb</TableCell>
                      <TableCell align="left">cc</TableCell>
                      <TableCell align="left">
                        <Box
                          sx={{
                            mt: 1,
                            mb: 1,
                          }}
                        >
                          <Box
                            sx={[
                              {
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "start",
                                mt: 2,
                                flexWrap: "wrap",
                              },
                            ]}
                          >
                            <div className="btn_prb">
                              <ButtonComp
                                // title="Edit"
                                color="warning"
                                edit
                                // refreshIco
                              />
                            </div>

                            <div className="btn_prb">
                              <ButtonComp
                                // title="Publish"
                                color="primary"
                                publish
                              />
                            </div>
                            <div className="btn_prb">
                              <ButtonComp
                                // title="Delete"
                                color="info"
                                deleteIco
                              ></ButtonComp>
                            </div>
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">1</TableCell>
                      <TableCell align="left">aa</TableCell>
                      <TableCell align="left">bb</TableCell>
                      <TableCell align="left">cc</TableCell>
                      <TableCell align="left">
                        <Box
                          sx={{
                            mt: 1,
                            mb: 1,
                          }}
                        >
                          <Box
                            sx={[
                              {
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "start",
                                mt: 2,
                                flexWrap: "wrap",
                              },
                            ]}
                          >
                            <div className="btn_prb">
                              <ButtonComp
                                // title="Edit"
                                color="warning"
                                edit
                                // refreshIco
                              />
                            </div>

                            <div className="btn_prb">
                              <ButtonComp
                                // title="Publish"
                                color="primary"
                                publish
                              />
                            </div>
                            <div className="btn_prb">
                              <ButtonComp
                                // title="Delete"
                                color="info"
                                deleteIco
                              ></ButtonComp>
                            </div>
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                    {/* );
                })} */}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        )}
      </div>
    );
};

export default Orders;