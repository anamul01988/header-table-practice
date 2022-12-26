import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import ButtonComp from "../../Shared/Button/Button";
// import WhatsappReportTable from "./WhatsappReportTable";
// import WhatsappReportSearch from "./WhatsappReportSearch";
import { tr } from "date-fns/locale";
// import WhatsappTableDefault from "./WhatsappTableDefault";
import OtpTableDefault from "./OtpTableDefault";
import OtpReportSearch from "./OtpReportSearch";
// import Loading from './../../Shared/Loading';

const currencies = [
  {
    value: "0",
    label: "All",
  },
  {
    value: "1",
    label: "SMS",
  },
  {
    value: "2",
    label: "CAMPAIGN",
  },
];
const OtpReport = () => {
  // const [isLoading, setLoading] = useState(true);
  // const [show, setShow] = useState(true);
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState([]);
  const [currency, setCurrency] = useState("");
  const [defaultData, setDefault] = useState(true);
  const [filterData, setFilterData] = useState([]);
  // const [textValue, setTextValue] = useState("");
  // const [defaultTd, setDefaultTd] = useState([]);

 
  useEffect(() => {
    console.log("main filter", filterData);
  }, [filterData]);

  return (
    <div style={{ width: "100%" }} className="mb-5 mt-5">
      {/* {
        isLoading && <Loading></Loading>
      
      } */}
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
            <ButtonComp title="Search" color="info" search show>
              {/* toggle: {show ? "show" : "hide"} */}
            </ButtonComp>
          </div>

          {/* {show && <div>Hi there</div>} */}
          <div className="btn_prb">
            <ButtonComp title="Export" color="primary" exportIco />
          </div>
        </Box>
      </Box>
      <h4 className="mb-3">Total Result: {data?.length}</h4>
      {show && (
        <>
          <OtpReportSearch
            refresh={refresh}
            setRefresh={setRefresh}
          ></OtpReportSearch>
        </>
      )}
      {(refresh || !refresh) && !show && (
        <OtpTableDefault></OtpTableDefault>
      )}
    </div>
  );
};

export default OtpReport;
