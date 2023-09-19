import { Stack, Typography } from "@mui/material";

import "./page.css";

const awardsData = [
  {
    AwardName: "BFSI Tech Conclave 2021",
    AwardDescription: "Express computers, enterprise mobility Pune",
  },
  {
    AwardName: "(Quantic) Digital Customer Experience Transformation ",
    AwardDescription:
      "(Quantic) Digital Customer Experience Transformation Initiative",
  },
  {
    AwardName: "BFSI Tech Conclave 2021",
    AwardDescription:
      "(IMC Chamber of Commerce and Industry) Digital Transformation journey at SBI Securities",
  },
];

const Awards = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "60px",
        paddingTop: "60px",
        backgroundColor: "#FFF",
        width: "100%",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#220D4E",
          fontFamily: "Poppins",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "34px",
          marginBottom: "30px",
        }}
      >
        Awards
      </Typography>
      <Typography
        variant="h4"
        component={"span"}
        sx={{
          color: "#0A1023",
          textAlign: "center",
          fontFamily: "Poppins",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "34px",
          marginBottom: "60px",
        }}
        className="Awards-caption"
      >
        Awarded globally and recognized in India as most promising broker
      </Typography>
      <div className="Awrad-section-medals-bg-container">
        {awardsData.map((eachAward) => (
          <div className="Awrad-section-medals-container">
            <img src="/Images/Medal.png" alt="Medal" className="medal-img" />
            <Typography
              sx={{
                color: "#0A1023",
                fontFamily: "Poppins",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
                textAlign: "center",
                lineHeight: "31px",
                marginBottom: "30px",
              }}
              variant="h6"
            >
              {eachAward.AwardName}
            </Typography>
            <Stack>
              <Typography
                variant="body2"
                sx={{
                  color: "#2C3655",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  textAlign: "center",
                  lineHeight: "30px",
                }}
              >
                {eachAward.AwardDescription}
              </Typography>
            </Stack>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
