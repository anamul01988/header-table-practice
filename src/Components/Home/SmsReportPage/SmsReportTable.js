import hi from "date-fns/esm/locale/hi/index.js";
import React, { useEffect, useState } from "react";
import Loading from '../../Shared/Loading';

// material start

// import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@material-ui/core";
import { Pagination } from "@mui/material";

//new
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableFooter from "@mui/material/TableFooter";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
//new

const useStyles = makeStyles((theme) => ({
  // table: {
  //   minWidth: 650,
  // },
  // tableContainer: {
  //   borderRadius: 15,
  //   margin: "10px 10px",
  //   maxWidth: 950,
  // },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
 
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  // status: {
  //   fontWeight: "bold",
  //   fontSize: "0.75rem",
  //   color: "white",
  //   backgroundColor: "grey",
  //   borderRadius: 8,
  //   padding: "3px 10px",
  //   display: "inline-block",
  // },
}));

// let USERS = [],
//   STATUSES = ["Active", "Pending", "Blocked"];
// for (let i = 0; i < 14; i++) {
//   USERS[i] = {
//     name: faker.name.findName(),
//     email: faker.internet.email(),
//     phone: faker.phone.phoneNumber(),
//     jobTitle: faker.name.jobTitle(),
//     company: faker.company.companyName(),
//     joinDate: faker.date.past().toLocaleDateString("en-US"),
//     status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
//   };
// }
// material end

//new start
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
//new end

const SmsReportTable = (props) => {
  //pagination states
  const [pagination, setPagination] = useState(1);

  const handleChange = (event, value) => {
    setPagination(value);
  };
  // material start
  const classes = useStyles();
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };
  //material end
  const [checkData, setCheckData] = useState([]);
  console.log("props", props.updateTable);
  console.log("props", props.arrayTh);
  const { updateTable, arrayTh, isLoading } = props;
  // console.log(isLoading);

  const thData = arrayTh;
  console.log(thData);
  console.log("updateTable_th", updateTable);
  const dataKey =
    updateTable?.length > 0
      ? Object.keys(updateTable[0]).filter((d) => thData?.includes(d))
      : [];
  console.log(dataKey);
  console.log(updateTable)

  //new...
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - thData.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return isLoading ? (
    <Loading></Loading>
  ) : (
    <div>
      <>
        {" "}
        <TableContainer
          sx={[
            {
              maxHeight: 440,
              "@media (max-width: 576px)": {
                width: "300px",
              },
            },
          ]}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {dataKey?.map((i) => (
                  <TableCell
                    align="left"
                    // className={classes.tableHeaderCell}
                  >
                    {i}
                  </TableCell>
                ))}
                <TableCell
                  align="left"
                  // className={classes.tableHeaderCell}
                >
                  Total Send
                </TableCell>
                <TableCell
                  align="left"
                  // className={classes.tableHeaderCell}
                >
                  Done
                </TableCell>
                <TableCell
                  align="left"
                  // className={classes.tableHeaderCell}
                >
                  Success
                </TableCell>
                <TableCell
                  align="left"
                  // className={classes.tableHeaderCell}
                >
                  Failed
                </TableCell>
                <TableCell
                  align="left"
                  // className={classes.tableHeaderCell}
                >
                  Queued
                </TableCell>

                <TableCell align="left">Asr(%)</TableCell>
                <TableCell
                // className={classes.tableHeaderCell}
                >
                  Avg. CR
                </TableCell>
                <TableCell
                  align="left"
                  // className={classes.tableHeaderCell}
                >
                  Cost{" "}
                </TableCell>
                <TableCell
                  align="left"
                  // className={classes.tableHeaderCell}
                >
                  GW.Cost
                </TableCell>
                <TableCell
                  align="left"
                  // className={classes.tableHeaderCell}
                >
                  Profit
                </TableCell>
                <TableCell
                  align="left"
                  // className={classes.tableHeaderCell}
                >
                  R4 Cost
                </TableCell>
                <TableCell
                  align="left"
                  // className={classes.tableHeaderCell}
                >
                  R3 Cost
                </TableCell>
                <TableCell
                  align="left"
                  // className={classes.tableHeaderCell}
                >
                  R2 Cost
                </TableCell>
                <TableCell
                  align="left"
                  // className={classes.tableHeaderCell}
                >
                  R1 Cost
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? updateTable.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : updateTable
              ).map((item) => {
                return (
                  <TableRow key={item.name}>
                    {dataKey?.map((dd) => (
                      <TableCell align="left">{item[dd]}</TableCell>
                    ))}
                    <TableCell align="left">{item.total_message}</TableCell>
                    <TableCell align="left">{item.deliver}</TableCell>
                    <TableCell align="left">{item.end_failed}</TableCell>
                    <TableCell align="left">{item.failed}</TableCell>
                    <TableCell align="left">{item.qued}</TableCell>
                    <TableCell align="left">{item.asr}</TableCell>
                    <TableCell align="left">{item.cr}</TableCell>
                    <TableCell align="left">{item.c1cost}</TableCell>
                    <TableCell align="left">{item.gatcost}</TableCell>
                    <TableCell align="left">{item.profit}</TableCell>
                    <TableCell align="left">{item.rs4cost}</TableCell>
                    <TableCell align="left">{item.rs3cost}</TableCell>
                    <TableCell align="left">{item.rs2cost}</TableCell>
                    <TableCell align="left">{item.rs1cost}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={7}
                  count={thData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <Pagination
          count={10}
          color="primary"
          onChange={handleChange}
          pagination={pagination}
          sx={[
            {
              p: 2,
              mt: "10px",
              display: "flex",
              justifyContent: "flex-end",
            },
          ]}
        />
      </>
      {/* {!dataKey.length || !updateTable.length ? (
        <h3 className="text-center text-primary mt-4">No data Found</h3>
      ) : (
     
      )} */}
    </div>
  );
};

export default SmsReportTable;


  
    