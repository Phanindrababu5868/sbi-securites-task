import { Typography } from "@mui/material";
import Image from "next/image";

import "./page.css";

const TradingPlatform = () => {
  return (
    <div className="TradingPlatform-bg-container">
      <div className="TradingPlatform-details-bg-container">
        <div className="TradingPlatform-details-container">
          <Typography
            variant="h5"
            sx={{
              color: "#FFF",
              fontFamily: "Poppins",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "31.1px",
              textTransform: "capitalize",
              marginBottom: "20px",
            }}
          >
            Trading Platforms
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#FFF",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "31.1px",
              textTransform: "capitalize",
              marginBottom: "20px",
            }}
          >
            #Stay on top of the market with our powerful platforms
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#FFF",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "31.1px",
              textTransform: "capitalize",
              marginBottom: "20px",
            }}
          >
            Trade with Ease and Precision on our Enhanced Platforms, Capitalize
            on Market Momentum and Discover New Opportunities.
          </Typography>
          <div
            style={{
              display: "flex",
              backgroundColor: "#FFF",
              padding: "20px",
              marginBottom: "10px",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Image
              src="/Images/Desktop.png"
              alt="Desktop"
              style={{ width: "60px", height: "30px" }}
            />
            <div>
              <Typography
                variant="body1"
                sx={{
                  color: "#000",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "31.1px",
                  textTransform: "capitalize",
                  marginBottom: "20px",
                }}
              >
                Web Platform{" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#000",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "31.1px",
                  textTransform: "capitalize",
                  marginBottom: "20px",
                }}
              >
                Upgrade Your Trading with our New Feature-Rich Web Platform
              </Typography>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#FFF",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Image
              src="/Images/Mobile.png"
              alt="Mobile"
              style={{
                width: "60px",
                height: "60px",
              }}
            />
            <div>
              <Typography
                variant="body1"
                sx={{
                  color: "#000",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "31.1px",
                  textTransform: "capitalize",
                  marginBottom: "20px",
                }}
              >
                Mobile App
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#000",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "31.1px",
                  textTransform: "capitalize",
                  marginBottom: "20px",
                }}
              >
                Seamless Trading on Android and iOS: Face ID, Fingerprint, Easy
                Navigation
              </Typography>
            </div>
          </div>
        </div>
        <Image
          src="/Images/mobileTrading.png"
          alt="Trading"
          className="TradingPlatform-trading-img"
        />
      </div>
    </div>
  );
};

export default TradingPlatform;
