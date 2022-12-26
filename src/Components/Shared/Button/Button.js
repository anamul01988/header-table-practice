

import React from "react";
import { Button } from "@mui/material";
import { MdAddCircle } from "react-icons/md";
import { HiRefresh } from "react-icons/hi";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { TiExportOutline } from "react-icons/ti";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdOutlinePublic } from "react-icons/md";
import { MdOutlinePublicOff } from "react-icons/md";

// import EditIcon from "@mui/icons-material/Edit";

const ButtonComp = ({
  title,
  add,
  addToggleHandler,
  setAddToggleHandler,
  setAdd,
  publish,
  publishOff,
  show,
  setShow,
  refresh,
  setRefresh,
  search,
  deleteIco,
  exportIco,
  refreshIco,
  edit,
  ...rest
}) => {

  return (
    <Button
      variant="outlined"

      sx={[
        {
          borderRadius: "20px",
          mr: 3,
          boxShadow: "3px 2px 5px 0px #DFDFDF",
          "@media screen and (max-width: 768px)": {
            mt: 1,
            mb: 2,
          },
          ...rest,
        },
      ]}
      size="medium"
      {...rest}
    >
      {add && <MdAddCircle style={{ marginRight: "7px", fontSize: "20px" }} />}
      {edit && <AiTwotoneEdit style={{ fontSize: "20px" }} />}
      {publish && <MdOutlinePublic style={{ fontSize: "20px" }} />}
      {publishOff && (
        <MdOutlinePublicOff style={{ marginRight: "7px", fontSize: "20px" }} />
      )}
      {search && (
        <BiSearchAlt2 style={{ marginRight: "7px", fontSize: "20px" }} />
      )}
      {deleteIco && (
        <AiFillDelete style={{ marginRight: "5px", fontSize: "20px" }} />
      )}
      {exportIco && (
        <TiExportOutline style={{ marginRight: "7px", fontSize: "20px" }} />
      )}
      {refreshIco && (
        <HiRefresh
          style={{
            marginRight: "7px",
            fontSize: "20px",
          }}
        />
      )}
      {title}
    </Button>
  );
};

export default ButtonComp;
