"use client";

import "./page.css";

import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { Grid, Typography, Stack, Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
interface CardData {
  postName: string;
  authorName: string;
  postDetails: string;
  postDate: string;
}

interface CardCarouselProps {
  cards: CardData[];
}

const Articals: React.FC<CardCarouselProps> = ({ cards }) => {
  const itemsPerPage = 3;

  const [currentPage, setCurrentPage] = React.useState(0);
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const renderCards = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
      <div className="crad-container">
        {cards.slice(startIndex, endIndex).map((card, index) => (
          <div
            style={{
              borderRadius: "3px",
              maxWidth: "320px",
              backgroundColor: "#F2F2F2",
              boxShadow: "0px 2px 25px 0px rgba(0, 0, 0, 0.21)",
            }}
            className="card"
          >
            <div
              style={{
                width: "100%",
              }}
            >
              <img
                src="/Images/Investment.png"
                alt="Invest"
                className="invetemnt-card-image"
              />
              <button
                style={{
                  color: "#F2F2F2",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "30px",
                  backgroundColor: "#D92365",
                  border: "none",
                  paddingLeft: "4px",
                  paddingRight: "4px",
                }}
              >
                Investment
              </button>
            </div>

            <Stack
              spacing={1}
              padding={1}
              sx={{
                padding: "20px",
              }}
            >
              <Typography variant="h5" className="invetemnt-card-heading">
                {card.postName}
              </Typography>
              <Stack
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
              >
                <Typography className="invetemnt-card-text">
                  {card.authorName}
                </Typography>
                <Typography className="invetemnt-card-text">
                  {card.postDate}
                </Typography>
              </Stack>
              <Typography variant="body2" className="invetemnt-card-text">
                {card.postDetails}
              </Typography>
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
                  alignSelf: "flex-start",
                }}
                disableRipple
                size="small"
              >
                Read More
              </Button>
            </Stack>
          </div>
        ))}
      </div>
    );
  };

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
        }}
      >
        Articles
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "#0A1023",
          textAlign: "center",
          fontFamily: "Poppins",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "45px",
          marginBottom: "60px",
        }}
      >
        Stay Updated
      </Typography>
      <Grid container spacing={1}>
        {renderCards()}
      </Grid>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="carousel-btn"
        >
          <KeyboardArrowLeftIcon
            sx={{ width: "16px", height: "16px", color: "#fff" }}
          />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            style={{ margin: "0 4px", cursor: "pointer", color: "#00C2FF" }}
          >
            {index === currentPage ? "●" : "○"}
          </span>
        ))}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="carousel-btn"
        >
          <KeyboardArrowRightIcon
            sx={{ width: "16px", height: "16px", color: "#fff" }}
          />
        </button>{" "}
      </div>
    </div>
  );
};

export default Articals;
