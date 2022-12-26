import React, { useEffect } from "react";
import AdminHome from "../AdminHome/AdminHome";
import IssueTable from "./IssueTable";
import TableDefault from "./../Home/Hook/TableDefault";
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
import SearchIssue from "./SearchIssue";
import AddIssue from "./AddIssue/AddIssue";
import { TableFooter } from "@material-ui/core";
import MTable from './components/MTable';

const Issue = () => {
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState(false);
  //pagination start
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  //pagination end
  const [defaultTd, setDefaultTd] = useState([]);
 
  const columns = [
    {
      id: 0,
      label: "Serial",
      minWidth: 60,
    },

    { id: 1, label: "Cover Story ", minWidth: 60 },
    { id: 2, label: "Cover Title", minWidth: 60 }, //name
    { id: 3, label: "Cover Pic", minWidth: 60 }, //img_url
    {
      id: 4,
      label: "Publish Date",
      minWidth: 60,
    },
    {
      id: 5,
      label: "Poster Name", //poster
      minWidth: 60,
    },
    {
      id: 6,
      label: "Posting Time", //time_stamp
      minWidth: 60,
    },
    {
      id: 7,
      label: "Issue Refer",
      minWidth: 60,
    },
    {
      label: "Status",
      minWidth: 60,
    },
    {
      label: "Action",
      minWidth: 60,
    },
  ];

  useEffect(() => {
    fetch("http://nobovabna.com/webapi/tbl_issue.php")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDefaultTd(data);
      });
  }, []);
  return (
    <div>
      {/* <AdminHome/> */}
      <div style={{ width: "100%" }} className="mb-5 mt-5">
        <Box
          sx={{
            mt: 2,
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

        {show && <AddIssue></AddIssue>}
      </div>

      {!show && (
        <div>
          <Paper mt={2} pt={3} sx={{ width: "100%", mt: "40px" }}>
            <TableContainer sx={{ maxHeight: 540 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow sx={{ borderColor: "text.primary" }}>
                    <TableCell align="center" colSpan={12}>
                      Issue Table
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
                  {defaultTd
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item) => {
                      return (
                        <TableRow key={item.id}>
                          <TableCell align="left">{item.id}</TableCell>
                          <TableCell align="left">{item.cover_story}</TableCell>
                          {/* <TableCell align="left">{item.deliver}</TableCell> */}
                          <TableCell align="left">{item.name}</TableCell>
                          <TableCell align="left">
                            <img
                              style={{ height: "70px", width: "70px" }}
                              src={item.image_url}
                              alt="img"
                            />
                          </TableCell>
                          <TableCell align="left">
                            {item.publish_date}
                          </TableCell>
                          <TableCell align="left">{item.poster}</TableCell>
                          <TableCell align="left">{item.time_stamp}</TableCell>
                          <TableCell align="left">{item.issue_refer}</TableCell>
                          <TableCell align="left">
                            {item.status == 1 ? "Active" : "InActive"}
                          </TableCell>
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
                                    className="mb-2"
                                    edit
                                    // refreshIco
                                  />
                                </div>

                                <div className="btn_prb">
                                  <ButtonComp
                                    // title="Publish"
                                    color="primary"
                                    className="mb-2"
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
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[4, 8, 12]}
              component="div"
              count={defaultTd.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      )}
      {/* <MTable></MTable> */}
    </div>
  );
};

export default Issue;
