import {
  Stack,
  Typography,
  Box,
  capitalize,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import "./page.css";

const TradingExperience = () => {
  return (
    // <Box display="flex" p={4} gap={40} m={4} flexDirection={"column"}>
    //   <Stack flexDirection={"row"}>
    //     <Stack>
    //       <Typography
    //         variant="subtitle1"
    //         fontSize={24}
    //         fontFamily={"Jost"}
    //         fontStyle={"normal"}
    //         fontWeight={500}
    //         color={"#220D4E"}
    //       >
    //         Trading at Your Fingertips
    //       </Typography>
    //       <Typography
    //         variant="h4"
    //         fontSize={32}
    //         fontFamily={"Poppins"}
    //         fontStyle={"normal"}
    //         fontWeight={600}
    //         color={"#0D0D0D"}
    //         textTransform={"capitalize"}
    //         gutterBottom
    //       >
    //         Your Trading experience anytime, anywhere
    //       </Typography>
    //       <Typography
    //         variant="body1"
    //         fontSize={18}
    //         fontFamily={"Poppins"}
    //         fontStyle={"normal"}
    //         fontWeight={400}
    //         color={"#2C3655"}
    //         textTransform={"capitalize"}
    //         marginTop={8}
    //       >
    //         Get your money moving with our simple to use, accessible mobile app.
    //         As good as a professional trader within your phone!
    //       </Typography>
    //       <Box flexDirection={"row"}>
    //         <img src="" />
    //       </Box>
    //     </Stack>
    //     <Stack>
    //       <img src="/Images/statistics.png" />
    //     </Stack>
    //   </Stack>
    //   <Card>
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         Ready to start your journey?
    //       </Typography>
    //       <Typography variant="body2" component="div">
    //         Let us help you.
    //       </Typography>
    //       <Box>
    //         <Button variant="contained">Open Account</Button>
    //         <Button variant="outlined">Open Account</Button>
    //       </Box>
    //     </CardContent>
    //   </Card>
    // </Box>
    <div className="Trading-experience-section-bg-container">
      <div className="Trading-experience-section-experience-container">
        <div className="Trading-experience-section-experience-details-container">
          <h6 className="Trading-experience-section-sub-heading">
            Trading at Your Fingertips
          </h6>
          <h4 className="Trading-experience-section-heading">
            Your Trading experience anytime, anywhere
          </h4>
          <p className="Trading-experience-section-descripton">
            Get your money moving with our simple to use, accessible mobile app.
            As good as a professional trader within your phone!
          </p>
          <div className="Trading-experience-section-imgs-container">
            <img
              src="/Images/apple.png"
              className="Trading-experience-section-img"
            />
            <img
              src="/Images/GooglePlay.png"
              className="Trading-experience-section-img"
            />
          </div>
        </div>
        <img
          src="/Images/statistics.png"
          alt="trading"
          className="statistics-image"
        />
      </div>
      <div className="Trading-experience-section-card">
        <div>
          <h6 className="Trading-experience-section-card-heading">
            Ready to start your journey?
          </h6>
          <span className="Trading-experience-section-card-caption">
            Let us help you.
          </span>
        </div>
        <div className="Trading-experience-section-card-btn-container">
          <button className="button">Open Demat</button>
          <button className="button button-outlined">Call Customer Care</button>
        </div>
      </div>
    </div>
  );
};

export default TradingExperience;
