import React, { useEffect } from "react";
import AdminHome from "../AdminHome/AdminHome";
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
import SearchArticle from "./SearchArticle";
import AddArticle from "./AddArticle";
const Article = () => {
  //  const [prevToggle, setPrevToggle] = useState();
  // const [refreshToggle, setRefreshToggle] = useState();
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
    { id: 0, label: "Serial", minWidth: 60 },
    { id: 1, label: "Title", minWidth: 60 },
    { id: 2, label: "Article Type", minWidth: 60 },
    { id: 3, label: "Refer", minWidth: 60 },
    { id: 4, label: "Issue Name", minWidth: 60 },
    { id: 5, label: "Page No.", minWidth: 60 },
    { id: 6, label: "Writer.", minWidth: 60 },
    { id: 7, label: "Publish Date", minWidth: 60 },

    { id: 8, label: "File", minWidth: 60 },
    { id: 10, label: "Status", minWidth: 60 },
    { id: 11, label: "Post By", minWidth: 60 },

    { id: 12, label: "Action", minWidth: 60 },
  ];
  useEffect(() => {
    fetch("http://nobovabna.com/webapi/tbl_article.php")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDefaultTd(data);
      });
  }, []);
  return (
    <div>
      <div style={{ width: "100%" }} className="mb-5 ">
        <Box
          sx={{
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
      </div>
      {/* <AdminHome
          // setPrevToggle={setPrevToggle}
          // setRefreshToggle={setRefreshToggle}
        /> */}
      {/* <TableDefault/> */}
      {/* {prevToggle && <SearchArticle />} */}
      {show && <AddArticle />}
      {!show && (
        <div>
          <Paper mt={2} pt={3} sx={{ width: "100%", mt: "40px" }}>
            <TableContainer sx={{ maxHeight: 460 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow sx={{ borderColor: "text.primary" }}>
                    <TableCell align="center" colSpan={12}>
                      Article Table
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
                    .map((item, i) => {
                      return (
                        <TableRow key={item.id}>
                          <TableCell align="left">{i}</TableCell>
                          <TableCell align="left">{item.ar_title}</TableCell>
                          {/* <TableCell align="left">{item.deliver}</TableCell> */}
                          <TableCell align="left">
                            {item.article_type}
                          </TableCell>
                          {/* <TableCell align="left">
                            <img
                              style={{ height: "70px", width: "70px" }}
                              src={item?.image_url}
                              alt="img"
                            />
                          </TableCell> */}
                          <TableCell align="left">{item.issue_refer}</TableCell>
                          <TableCell align="left">{item.issue_name}</TableCell>
                          <TableCell align="left">{item.page_no}</TableCell>
                          <TableCell align="left">{item.writer}</TableCell>
                          <TableCell align="left">
                            {item.issue_publish_date}
                          </TableCell>
                          <TableCell align="left">{item.file_url}</TableCell>

                          <TableCell align="left">
                            {item.status == 1 ? "Active" : "InActive"}
                          </TableCell>
                          <TableCell align="left">{item.poster_name}</TableCell>
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
    </div>
  );
};

export default Article;
