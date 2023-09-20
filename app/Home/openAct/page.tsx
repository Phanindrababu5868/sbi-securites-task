import { Stack, Typography } from "@mui/material";
import "./page.css";
import Image from "next/image";

const OpenAct = () => {
  return (
    <div className="open-act-section-bg-container">
      <div className="open-act-section-details-bg-container">
        <Typography variant="h5" className="open-act-section-text">
          Open your Account Today <br />
          <Typography
            variant="body1"
            component={"span"}
            className="open-act-section-text-span"
          >
            Let's take the next step together
          </Typography>
        </Typography>
        <div className="home-page-boyandgirl-img-container">
          <Image
            src="/Images/boyandgirl.png"
            alt="boy and girl"
            className="boyandgirl-img"
          />
        </div>
        <button className="button">Open Open An Account</button>
      </div>
    </div>
  );
};

export default OpenAct;
