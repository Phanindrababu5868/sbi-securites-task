import {
  Stack,
  Typography,
  Box,
  capitalize,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import Image from "next/image";

import "./page.css";

const TradingExperience = () => {
  return (
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
            <Image
              src="/Images/apple.png"
              className="Trading-experience-section-img"
              alt="apple"
            />
            <Image
              src="/Images/GooglePlay.png"
              className="Trading-experience-section-img"
              alt="googleplay"
            />
          </div>
        </div>
        <Image
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
