import React from "react";
// import { RiTimer2Line } from "react-icons/ri";
// import { Box } from "@mui/material";

const LiveClock = () => {
  const [time, setTime] = React.useState(new Date());

  React.useMemo(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      <span
        style={{
          color: "#000",
          fontSize: "1rem",
          marginRight: "1rem",
          fontWeight: "bold",
        }}
      >
        {/* <Box
          sx={[
            {
              display: {
                sm: "none",

                md: "inline",
              },

              // animation: "rotate 2s ease-in-out infinite",
              "@keyframes rotate": {
                from: {
                  transform: "rotate(0deg)",
                  // make different style
                },
                to: {
                  transform: "rotate(360deg)",
                },
              },
            },
          ]}
        >
          <RiTimer2Line
            style={{
              marginTop: "0.1rem",
              display: "inline",
              fontSize: "1.2rem",
            }}
          />
        </Box>{" "} */}
        <span>{time?.toLocaleTimeString()}</span>
      </span>
    </div>
  );
};

export default React.memo(LiveClock);
