
import React from "react";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  // {
  //   img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  //   title: "Coffee",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
  //   title: "Hats",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  //   title: "Honey",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
  //   title: "Basketball",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
  //   title: "Fern",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
  //   title: "Mushrooms",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
  //   title: "Tomato basil",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
  //   title: "Sea star",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
  //   title: "Bike",
  // },
];
const Footer = () => {
  return (
    <Box
      sx={{
        // display: "flex",
        // justifyContent: "flex-end",
        // alignItems: "end",

        padding: "1rem",
        backgroundColor: "#000",
        color: "#fff",
        fontSize: "1.5rem",
        // flexDirection: "column",
        borderTop: "1px solid #ccc",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item sm={6} md={4}>
            <Typography sx={{ mb: 1 }} variant="h6" component="div">
              Text only
            </Typography>
            <Typography variant="subtitle2" align="left">
              support@nobovobona.com
            </Typography>
          </Grid>
          <Grid item md={4} sm={6}>
            <Typography sx={{ mb: 1 }} variant="h6" component="div">
              COMPANY INFO
            </Typography>
            <Typography variant="subtitle2" align="left">
              About Us
            </Typography>
            <Typography variant="subtitle2" align="left">
              Contact Us
            </Typography>
            <Typography variant="subtitle2" align="left">
              Blog
            </Typography>
            <Typography variant="subtitle2" align="left">
              Privacy Policy
            </Typography>
            <Typography variant="subtitle2" align="left">
              Terms & Conditions
            </Typography>
          </Grid>
          <Grid item md={4} sm={6} >
            <Typography
              align="left"
              sx={{ mb: 1 }}
              variant="h6"
              component="div"
            >
              PURCHASE INFO
            </Typography>
            <Typography variant="subtitle2" align="left">
              FAQs
            </Typography>
            <Typography variant="subtitle2" align="left">
              Payment Methods
            </Typography>
          </Grid>
        </Grid>
        <Grid sx={{ mt: "20px" }} container spacing={2}>
          <Grid item md={4} sm={6}>
            <Box
              component="div"
              sx={{ mr: "8px", display: "flex", alignItems: "center" }}
            >
              <Typography sx={{ mr: "8px" }} variant="subtitle2">
                PAYMENT METHODS
              </Typography>
              <ImageList
                // sx={{ width: 100, height: 150 }}
                cols={3}
                // rowHeight={164}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      style={{ height: "50px", width: "70px" }}
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            {/* <Box sx={{ mr: "8px" }} component="div" display="inline">
              Payment Methods
            </Box> */}
            <Box
              component="div"
              sx={{ mr: "8px", display: "flex", alignItems: "center" }}
              // display="flex"
              // align-items="center"
            >
              <Typography sx={{ mr: "8px" }} variant="subtitle2">
                BUY WITH CONFIDENCE
              </Typography>
              <ImageList
                // sx={{ width: 100, height: 150 }}
                cols={3}
                // rowHeight={164}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      style={{ height: "50px", width: "70px" }}
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            // backgroundColor: "#1BB096",
            color: "#fff",
            fontSize: "1.5rem",
            flexDirection: "column",
            // borderTop: "1px solid #ccc",
          }}
        >
          <Typography variant="subtitle2" align="center">
            &copy; 2018 ghorami.com. All rights reserved |Powered by Ghorami.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;


















// import React from "react";
// import { Box } from "@mui/material";
// import { Typography } from "@mui/material";

// const Footer = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "flex-end",
//         alignItems: "end",
//         padding: "1rem",
//         // backgroundColor: "#1BB096",
//         color: "#000",
//         fontSize: "1.5rem",
//         flexDirection: "column",
//         borderTop: "1px solid #ccc",
//       }}
//     >
//       <Typography variant="subtitle2" align="center">
//         &copy; 2018 ghorami.com. All rights reserved.
//       </Typography>
//       <Typography variant="subtitle2" F align="center">
//         Developed by{" "}
//         <a
//           href="https://ghoramitechnology.com/"
//           style={{
//             color: "#000",
//             textDecoration: "none",
//             fontWeight: "bold",
//           }}
//           rel="noopener noreferrer"
//           target="_blank"
//         >
//           Ghorami Technology
//         </a>
//       </Typography>
//     </Box>
//   );
// };

// export default Footer;
