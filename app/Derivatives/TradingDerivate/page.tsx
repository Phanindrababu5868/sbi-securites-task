import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./page.css";

const TradingDerivate = () => {
  return (
    <div className="TradingDerivate-section-bg-container">
      <div className="TradingDerivate-section-Derivate-bg-container">
        <div>
          <h6>Types Of Derivatives</h6>
          <h4>Future Contracts OF Stocks</h4>
          <p>
            A futures contract in the derivatives meaning binds both parties
            legally to exercise the agreement within the predefined period. The
            involved parties set a quantity of the underlying assets and a price
            payable by the buyer at a specific date in the future.
          </p>
          <Button
            variant="text"
            endIcon={<ArrowRightAltIcon />}
            sx={{ color: "#220D4E", textTransform: "capitalize" }}
            disableRipple
            size="small"
          >
            Read More
          </Button>
        </div>

        <img src="/Images/handShake.png" alt="stastics" />
      </div>
      <div className="TradingDerivate-section-Derivate-bg-container">
        <img src="/Images/Trading.png" alt="stastics" />
        <div>
          <h6>Types Of Derivatives</h6>
          <h4>Options Contracts OF Stocks</h4>
          <p>
            A futures contract in the derivatives meaning binds both parties
            legally to exercise the agreement within the predefined period. The
            involved parties set a quantity of the underlying assets and a price
            payable by the buyer at a specific date in the future.
          </p>
          <Button
            variant="text"
            endIcon={<ArrowRightAltIcon />}
            sx={{
              color: "#220D4E",
              textTransform: "capitalize",
              fontSize: {
                sm: "12px",
                m: "18px",
              },
            }}
            disableRipple
            size="small"
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TradingDerivate;

// import React from "react";
// import { Button, Container, Typography, Grid, Box, Paper } from "@mui/material";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// const TradingDerivate = () => {
//   return (
//     <Container
//       maxWidth="lg"
//       sx={{
//         paddingTop: "60px",
//         paddingBottom: "60px",
//         backgroundColor: "#fff",
//       }}
//     >
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <Paper
//             elevation={3}
//             sx={{
//               p: "40px",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start",
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{ color: "#220D4E", textTransform: "capitalize", mb: "10px" }}
//             >
//               Types Of Derivatives
//             </Typography>
//             <Typography
//               variant="h4"
//               sx={{ color: "#000", textTransform: "capitalize", mb: "38px" }}
//             >
//               Future Contracts OF Stocks
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 color: "var(--N2, #2c3655)",
//                 fontSize: "18px",
//                 lineHeight: "200%",
//                 maxWidth: "80%",
//               }}
//             >
//               A futures contract in the derivatives meaning binds both parties
//               legally to exercise the agreement within the predefined period.
//               The involved parties set a quantity of the underlying assets and a
//               price payable by the buyer at a specific date in the future.
//             </Typography>
//             <Button
//               variant="text"
//               endIcon={<ArrowRightAltIcon />}
//               sx={{ color: "#220D4E", textTransform: "capitalize", mt: "20px" }}
//               disableRipple
//               size="small"
//             >
//               Read More
//             </Button>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Paper
//             elevation={3}
//             sx={{
//               p: "40px",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start",
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{ color: "#220D4E", textTransform: "capitalize", mb: "10px" }}
//             >
//               Types Of Derivatives
//             </Typography>
//             <Typography
//               variant="h4"
//               sx={{ color: "#000", textTransform: "capitalize", mb: "38px" }}
//             >
//               Options Contracts OF Stocks
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 color: "var(--N2, #2c3655)",
//                 fontSize: "18px",
//                 lineHeight: "200%",
//                 maxWidth: "80%",
//               }}
//             >
//               A futures contract in the derivatives meaning binds both parties
//               legally to exercise the agreement within the predefined period.
//               The involved parties set a quantity of the underlying assets and a
//               price payable by the buyer at a specific date in the future.
//             </Typography>
//             <Button
//               variant="text"
//               endIcon={<ArrowRightAltIcon />}
//               sx={{ color: "#220D4E", textTransform: "capitalize", mt: "20px" }}
//               disableRipple
//               size="small"
//             >
//               Read More
//             </Button>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default TradingDerivate;
