import React from 'react'
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
// function SearchFiled({setSearchQuery}) {
function SearchFiled({setSearchQuery}) {
  return (
    <div>
      <form>
        <TextField
          id="search-bar"
          className="text"
          //   onInput={(e) => {
          //     setSearchQuery(e.target.value);
          //   }}
          label="Search Here"
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton
          sx={{ backgroundColor: "#000", borderRadius:"0" }}
          type="submit"
          aria-label="search"
        >
          <SearchIcon style={{ fill: "blue"}} />
        </IconButton>
      </form>
    </div>
  );
}

export default SearchFiled