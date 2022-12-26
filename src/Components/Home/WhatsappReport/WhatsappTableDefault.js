import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { useEffect } from "react";
import { BiCalendarCheck } from "react-icons/bi";

const WhatsappTableDefault = () => {
    const [defaultTd, setDefaultTd] = useState([]);
   
  const columns = [
    { id: "name", label: "Total", minWidth: 60 },
    { id: "code", label: "Done", minWidth: 60 },
    {
      id: "population",
      label: "Success",
      minWidth: 60,
    },
    {
      id: "size",
      label: "Failed",
      minWidth: 60,
     
    },
    {
      id: "density",
      label: "Queued",
      minWidth: 60,
    
    },
    {
      id: "density",
      label: "ASR(%)",
      minWidth: 60,
  
    },
    {
      id: "density",
      label: "Avg.CR",
      minWidth: 60,
    
    },
    {
      id: "density",
      label: "Cost",
      minWidth: 170,
  
    },
    {
      id: "density",
      label: "GW.Cost",
      minWidth: 170,
    
    },
    {
      id: "profit",
      label: "Profit",
      minWidth: 170,
    
    },
    {
      id: "r4_cost",
      label: "R4 Cost",
      minWidth: 60,
  
    },
    {
      id: "r3_cost",
      label: "R3 Cost",
      minWidth: 60,
 
    },
    {
      id: "R2_cost",
      label: "R2 Cost",
      minWidth: 60,

    },
    {
      id: "r1_cost",
      label: "R1 Cost",
      minWidth: 60,
  
    },
  ];

  
   useEffect(() => {
     fetch(
       "http://poultrykhamarbichitra.net/admin/Record/whatsapp_record_search.php?format=format&amp;&amp;search_sms_reports_month=search_sms_reports_month"
     )
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         setDefaultTd(data);
       });
   }, []);
  return (
    <div>
      <Paper mt={2} pt={3} sx={{ width: "100%", mt:"40px" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow sx={{ borderColor: "text.primary" }}>
                <TableCell align="center" colSpan={12}>
                  Whatsapp Report
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
              {defaultTd.map((item) => {
                return (
                  <TableRow key={item.name}>
                    <TableCell align="left">{item.total_message}</TableCell>
                    <TableCell align="left">{item.deliver}</TableCell>
                    {/* <TableCell align="left">{item.deliver}</TableCell> */}
                    <TableCell align="left">{item.end_failed}</TableCell>
                    <TableCell align="left">{item.failed}</TableCell>
                    <TableCell align="left">{item.qued}</TableCell>
                    <TableCell align="left">{item.asr}</TableCell>
                    <TableCell align="left">{item.cr}</TableCell>
                    <TableCell align="left">{item.clcost}</TableCell>
                    <TableCell align="left">{item.gatcost}</TableCell>
                    <TableCell align="left">{item.profit}</TableCell>
                    <TableCell align="left">{item.rs4cost}</TableCell>
                    <TableCell align="left">{item.rs3cost}</TableCell>
                    <TableCell align="left">{item.rs2cost}</TableCell>
                    <TableCell align="left">{item.rs1cost}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default WhatsappTableDefault;
