"use client";

import "./page.css";

import React from "react";

import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Rating,
  Stack,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
interface CardData {
  feedback: string;
  name: string;
}

interface CardCarouselProps {
  cards: CardData[];
}

const Testimonials: React.FC<CardCarouselProps> = ({ cards }) => {
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
          <Card
            sx={{
              padding: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              boxShadow: "0px 2px 25px 0px rgba(0, 0, 0, 0.21)",
            }}
          >
            <CardContent>
              <Rating
                name="size-medium"
                defaultValue={5}
                readOnly
                sx={{ marginBottom: "20px" }}
                className="feed-back-card-text stars"
              />
              <Typography
                variant="body2"
                component="div"
                sx={{
                  color: "#000",
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "34px",
                  marginBottom: "20px",
                }}
                className="feed-back-card-text"
              >
                {card.feedback}
              </Typography>
              <Stack flexDirection={"row"} justifyContent={"flex-end"}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#000",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "34px",
                  }}
                  className="feed-back-card-text"
                >
                  {card.name}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "100%",
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h6"
          component={"span"}
          sx={{
            color: "#232073",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "34px",
            marginBottom: "30px",
          }}
        >
          Testimonials{" "}
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
            maxWidth: "60%",
            marginBottom: "60px",
          }}
        >
          WE ARE ONLY AS GOOD AS OUR CLIENT SAY WE ARE
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
      </Container>
    </div>
  );
};

export default Testimonials;
