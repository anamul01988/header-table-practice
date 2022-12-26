import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  LinearProgress,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import WhatsappReportTable from "./WhatsappReportTable";
import Loading from "../../Shared/Loading";
import WhatsappTableDefault from './WhatsappTableDefault';
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

const WhatsappReportSearch = () => {
  const [checked, setChecked] = useState(false);
  const [tgMonth, setTgMonth] = useState(false);
  const [tgDay, setTgDay] = useState(false);
  const [tgHour, setTgHour] = useState(false);
  const [tgCc, setTgCc] = useState(false);
  const [tgDestination, setTgDestination] = useState(false);
  const [tgService, setTgService] = useState(false);
  const [tgClient, setTgClient] = useState(false);
  const [tgReason, setTgReason] = useState(false);
  const [tgGateway, setTgGateway] = useState(false);

  // const handleChange = (event) => {
  //    setChecked(event.target.checked);
  // };
  //  const handleChange1 = (event) => {
  //    setChecked1(event.target.checked);

  // };
  //  const handleChange2 = (event) => {
  //    setChecked2(event.target.checked);

  // };
  console.log(checked);
  //  const [checked, setChecked] = React.useState(true);

  //  const handleChange = (event) => {
  //    setChecked(event.target.checked);
  //  };
  // const [toggleYear, setToggleYear] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [currency, setCurrency] = useState("");
  const [textValue, setTextValue] = useState("");
  const [data, setData] = useState([]);

  const [defaultData, setDefault] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const [searchTrigger, setSearchTrigger] = useState("");
  const [formDate, setFormDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [userName, setUserName] = useState("");
  const [callerId, setCallerId] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [destination, setDestination] = useState("");
  const [gwCost, setGwCost] = useState("");
  const [profit, setProfit] = useState("");
  const [gateway, setGateway] = useState("");
  const [endReason, setEndReason] = useState("");
  const [cost, setCost] = useState("");

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [cc, setCc] = useState("");
  const [destination1, setDestination1] = useState("");
  const [service1, setService1] = useState("");
  const [serviceType1, setServiceType1] = useState("");
  const [client, setClient] = useState("");
  const [end, setEnd] = useState("");
  const [gateway1, setGateway1] = useState("");
  const [gwRadio, setGwRadio] = useState("");
  const [profitRadio, setProfitRadio] = useState("");
  const [costRadio, setCostRadio] = useState("");

  //   const [rememberMe, setRememberMe] = useState(false);
  const [updateTable, setUpdateTable] = useState([]);
  const [arrayTh, setArrayTh] = useState([]);
  const [ip, setIp] = useState("");
  //  const location = useLocation();
  //  const navigate = useNavigate();
  //  const redirectUi = location.state ? location.state.from : "/";
  const formData = new FormData();
  let temp = "";

  const onTextChange = (e) => {
    e.preventDefault();
    //    let input = e.target.value;
    //    console.log(input);
    setTextValue(e.target.value);
  };
  
  const handleRadioClick = (e) => {
    // console.log(e)
    setGwRadio(e)
     };
  const handleRadioProfitClick = (e) => {
    // console.log(e);
    setProfitRadio(e);
  };
  const handleRadioCostClick = (e) => {
    // console.log(e);
    setCostRadio(e);
  };

 console.log(gwRadio);
  console.log(profitRadio);
  console.log(costRadio);

  const toggleHandler = (click) => {
    console.log(click);
    // if ((checked) && (click === "year")) {
    if (click === "year") {
      setYear("year");
    }
    if (click === "month") {
      setMonth("month");
    }
    if (click === "day") {
      setDay("day");
    }
    if (click === "hour") {
      setHour("hour");
    }
    if (click === "cc") {
      setCc("cc");
    }
    if (click === "operator") {
      setDestination1("operator");
    }
    if (click === "service_type") {
      setServiceType1("sms_type");
    }
    if (click === "client_id") {
      setClient("client_id");
    }
    if (click === "end_reason") {
      setEnd("report");
    }
    if (click === "gateway") {
      setGateway1("gateway_group");
    }
    // console.log('year',year)

    if (filterData.includes(click)) {
      let deleting = filterData.indexOf(click);
      console.log(deleting);
      if (deleting !== -1) {
        filterData.splice(deleting, 1);
      }
      setFilterData([...filterData]);
      console.log("after deleting  filter", filterData);
    } else {
      filterData.push(click);
      setFilterData([...filterData]);
      console.log("update filter", filterData);
      // if (filterData.length > 0) {
      //   setDefault(false);
      // } else {
      //   setDefault(!defaultData);
      // }
    }
  };

  const handelSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    setLoading(true);

   

    setArrayTh([...filterData]);

    formData.append("search_flexi_reports_from_date", formDate);
    formData.append("search_flexi_reports_to_date", toDate);
    formData.append("search_flexi_reports_username", userName);
    formData.append("search_flexi_reports_number", number);
       formData.append("search_flexi_reports_caller_id", callerId);
       formData.append("search_flexi_reports_message", message);
    formData.append("search_sms_reports_service_type", textValue);
    
    formData.append("search_flexi_reports_gw_cost", gwCost);
    formData.append("search_flexi_reports_profit", profit);
    formData.append("search_flexi_reports_gateway", gateway);
    formData.append("search_flexi_reports_end_reason", endReason);
    formData.append("search_flexi_reports_cost", cost);
    formData.append("search_flexi_reports_dest", destination);
    formData.append("format", "format");
    formData.append("search_flexi_reports_gw_cost1", gwRadio);
    formData.append("search_flexi_reports_profit1", profitRadio);
    formData.append("search_flexi_reports_cost1", costRadio);

    if (checked) {
      formData.append("search_sms_reports_year", year);
    } else {
      formData.append("search_sms_reports_year", "");
    }
    if (tgMonth) {
      formData.append("search_sms_reports_month", month);
    } else {
      formData.append("search_sms_reports_month", "");
    }
    if (tgDay) {
      formData.append("search_sms_reports_day", day);
    } else {
      formData.append("search_sms_reports_day", "");
    }
    if (tgHour) {
      formData.append("search_sms_reports_hour", hour);
    } else {
      formData.append("search_sms_reports_hour", "");
    }
    if (tgCc) {
      formData.append("search_sms_reports_cc", cc);
    } else {
      formData.append("search_sms_reports_cc", "");
    }
    if (tgDestination) {
      formData.append("search_sms_reports_operator", destination1);
    } else {
      formData.append("search_sms_reports_operator", "");
    }
    if (tgService) {
      formData.append("search_sms_reports_service_type1", serviceType1);
    } else {
      formData.append("search_sms_reports_service_type1", "");
    }
    if (tgClient) {
      formData.append("search_sms_reports_client", client);
    } else {
      formData.append("search_sms_reports_client", "");
    }
    if (tgReason) {
      formData.append("search_sms_reports_end_reason1", end);
    } else {
      formData.append("search_sms_reports_end_reason1", "");
    }
    if (tgGateway) {
      formData.append("search_sms_reports_end_gateway", gateway1);
    } else {
      formData.append("search_sms_reports_end_gateway", "");
    }


    fetch(
      `http://poultrykhamarbichitra.net/admin/Record/whatsapp_record_search.php`,
      {
        method: "POST",
        body: formData,
      }
    )
      //  console.log(formData),
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUpdateTable(data);
        setFormDate("")
        setToDate("")
        setUserName("")
        setCallerId("")
        setNumber("")
        setMessage("")
        setServiceType("")
        setDestination("")
        setGwCost("")
        setProfit("")
        setGateway("")
        setEndReason("")
        setCost("")
        setYear("")
        setMonth("")
        setDay("")
        setHour("")
        setCc("")
        setDestination1("")
        setServiceType1("")
        setClient("")
        setEnd("")
        setGateway1("")
        setGwRadio("")
        setProfitRadio("")
        setCostRadio("")
      
      });

  };
  

  useEffect(() => {
    if (updateTable.length !== 0) {
      setLoading(false);
    
    }
  }, [updateTable]);

  return (
    <div>
      {console.log("loading")}
      <form onSubmit={handelSubmit}>
        <Grid container spacing={3}>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Form Date</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              //   variant="outlined"
              name="formDate"
              type="date"
              fullWidth
              value={formDate}
              onChange={(e) => setFormDate?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">To Date</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              //   variant="outlined"
              name="formDate"
              type="date"
              fullWidth
              value={toDate}
              onChange={(e) => setToDate?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">UserName</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              variant="outlined"
              name="number"
              type="text"
              fullWidth
              value={userName}
              onChange={(e) => setUserName?.(e.target.value)}
            />
          </Grid>

          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Caller Id</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              variant="outlined"
              name="caller-id"
              type="text"
              fullWidth
              value={callerId}
              onChange={(e) => setCallerId?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Number</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              variant="outlined"
              name="number"
              type="text"
              fullWidth
              value={number}
              onChange={(e) => setNumber?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Message</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              variant="outlined"
              name="message"
              type="text"
              fullWidth
              value={message}
              onChange={(e) => setMessage?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2 w-100">Service Type</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              id="outlined"
              //   label="Service Type"
              label={<Box></Box>}
              // value={currency}
              value={textValue}
              fullWidth
              onChange={onTextChange}
              // onChange={(handleChange, onTextChange)}
              select
              SelectProps={{
                native: true,
              }}
              //   helperText="Please select your currency"
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Destination</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              variant="outlined"
              name="destination"
              type="text"
              fullWidth
              value={destination}
              onChange={(e) => setDestination?.(e.target.value)}
            />
          </Grid>

          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Gateway</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              variant="outlined"
              name="user-name"
              type="text"
              fullWidth
              value={gateway}
              onChange={(e) => setGateway?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">End Reason</FormLabel>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              variant="outlined"
              name="end-reason"
              type="text"
              fullWidth
              value={endReason}
              onChange={(e) => setEndReason?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            {/* <FormLabel className="mt-2 ms-2">End Reason</FormLabel> */}

            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormLabel
                className="mt-2 me-2"
                id="demo-row-radio-buttons-group-label"
              >
                Cost
              </FormLabel>
              <FormControlLabel
                onClick={(e) => handleRadioCostClick?.(e.target.value)}
                value="1"
                control={<Radio />}
                label=">"
              />
              <FormControlLabel
                onClick={(e) => handleRadioCostClick?.(e.target.value)}
                value="2"
                control={<Radio />}
                label="<"
              />
            </RadioGroup>

            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              variant="outlined"
              name="cost"
              type="number"
              fullWidth
              value={cost}
              onChange={(e) => setCost?.(e.target.value)}
            />
          </Grid>

          <Grid item lg={3} xs={6} md={4}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormLabel
                className="mt-2 me-2"
                id="demo-row-radio-buttons-group-label"
              >
                Profit
              </FormLabel>
              <FormControlLabel
                onClick={(e) => handleRadioProfitClick?.(e.target.value)}
                value="1"
                control={<Radio />}
                label=">"
              />
              <FormControlLabel
                onClick={(e) => handleRadioProfitClick?.(e.target.value)}
                value="2"
                control={<Radio />}
                label="<"
              />
            </RadioGroup>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              variant="outlined"
              name="profit"
              type="number"
              fullWidth
              value={profit}
              onChange={(e) => setProfit?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <RadioGroup
              style={{ display: "block" }}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormLabel
                className="mt-2 me-2"
                id="demo-row-radio-buttons-group-label"
              >
                <span style={{ fontSize: "15px" }}>GW.Cost</span>
              </FormLabel>
              <FormControlLabel
                // onClick=()=>handleRadioClick(value);
                //  onChange={(e) => setEndReason?.(e.target.value)}
                onClick={(e) => handleRadioClick?.(e.target.value)}
                value="1"
                control={<Radio />}
                label=">"
              />
              <FormControlLabel
                onClick={(e) => handleRadioClick?.(e.target.value)}
                value="2"
                control={<Radio />}
                label="<"
              />
            </RadioGroup>
            <TextField
              style={{ margin: "7px" }}
              label={<Box></Box>}
              variant="outlined"
              name="gw-cost"
              type="number"
              fullWidth
              value={gwCost}
              onChange={(e) => setGwCost?.(e.target.value)}
            />
          </Grid>
        </Grid>

        <FormControl className="mt-3" component="fieldset">
          <FormLabel component="legend">Group By</FormLabel>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              style={{ width: "98px", marginBottom: "15px" }}
              value="year"
              control={<Checkbox />}
              label="Year"
              labelPlacement="top"
              onChange={(e) => {
                toggleHandler("year");
                setChecked(!checked);
              }}
            />
            <FormControlLabel
              style={{ width: "98px", marginBottom: "15px" }}
              value="month"
              control={<Checkbox />}
              label="Month"
              labelPlacement="top"
              onChange={(e) => {
                toggleHandler("month");
                setTgMonth(!tgMonth);
              }}
            />
            <FormControlLabel
              style={{ width: "98px", marginBottom: "15px" }}
              value="day"
              control={<Checkbox />}
              label="Day"
              labelPlacement="top"
              onChange={() => {
                toggleHandler("day");
                setTgDay(!tgDay);
              }}
            />
            <FormControlLabel
              style={{ width: "98px", marginBottom: "15px" }}
              value="hour"
              control={<Checkbox />}
              label="Hour"
              labelPlacement="top"
              onChange={() => {
                toggleHandler("hour");
                setTgHour(!tgHour);
              }}
            />
            <FormControlLabel
              style={{ width: "98px", marginBottom: "15px" }}
              value="cc"
              control={<Checkbox />}
              label="CC"
              labelPlacement="top"
              onChange={() => {
                toggleHandler("cc");
                setTgCc(!tgCc);
              }}
            />
            <FormControlLabel
              style={{ width: "98px", marginBottom: "15px" }}
              value="operator"
              control={<Checkbox />}
              label="Destination"
              labelPlacement="top"
              onChange={() => {
                toggleHandler("operator");
                setTgDestination(!tgDestination);
              }}
            />

            <FormControlLabel
              style={{ width: "98px", marginBottom: "15px" }}
              value="service_type"
              control={<Checkbox />}
              label="Service"
              labelPlacement="top"
              onChange={() => {
                toggleHandler("service_type");
                setTgService(!tgService);
              }}
            />
            <FormControlLabel
              style={{ width: "98px", marginBottom: "15px" }}
              value="client_id"
              control={<Checkbox />}
              label="Client"
              labelPlacement="top"
              onChange={() => {
                toggleHandler("client_id");
                setTgClient(!tgClient);
              }}
            />
            <FormControlLabel
              style={{ width: "98px", marginBottom: "15px" }}
              value="end_reason"
              control={<Checkbox />}
              label="End Reason"
              labelPlacement="top"
              onChange={() => {
                toggleHandler("end_reason");
                setTgReason(!tgReason);
              }}
            />
            <FormControlLabel
              style={{ width: "98px", marginBottom: "15px" }}
              value="gateway"
              control={<Checkbox />}
              label="End Gateway"
              labelPlacement="top"
              onChange={() => {
                toggleHandler("gateway");
                setTgGateway(!tgGateway);
              }}
            />
            <Box
              style={{
                display: "flex",

                textAlign: "center",
                marginTop: "14px",
                marginBottom: "25px",
                // marginRight: "100px",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                width="25%"
                sx={{ py: 1 }}
                type="submit"
                onClick={() => {
                  setSearchTrigger("yes");
                }}
              >
                Search
              </Button>
            </Box>
          </FormGroup>
        </FormControl>
      </form>

      {/* {isLoading && <Loading></Loading>} */}
      {updateTable.length === 0 ? (
        <>
          {searchTrigger === "yes" ? (
            <h3 className="text-center text-primary mt-4">No data Found</h3>
          ) : (
            <WhatsappTableDefault></WhatsappTableDefault>
          )}
        </>
      ) : (
        <>
          <WhatsappReportTable
            isLoading={isLoading}
            updateTable={updateTable}
            arrayTh={arrayTh}
          />
        </>
      )}
    </div>
  );
};



export default WhatsappReportSearch;
