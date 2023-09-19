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
