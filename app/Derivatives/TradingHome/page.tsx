import "./page.css";
import Image from "next/image";

const TradingHome = () => {
  return (
    <div className="Trading-Home-bg-container">
      <div className="Trading-Home-deatils-container">
        <h6 className="Trading-Home-deatils-container-sub-heading">
          Simple. Transparent. Secure
        </h6>
        <h1 className="Trading-Home-deatils-container-heading">
          Derivatives Trading:{" "}
          <span className="Trading-Home-deatils-container-span-heading">
            Leverage, Hedge, and Opportunities
          </span>{" "}
          at SBI Securities.
        </h1>
        <p className="Trading-Home-deatils-container-caption">
          Enjoy higher leverage and the ability to hedge your positions by
          trading in Future and Option contracts of stocks/indexes. Or buy and
          sell currency pairs at a future date.
        </p>
        <div className="Trading-experience-section-card-btn-container">
          <button className="button">OPEN DEMAT</button>
          <button className="button button-outlined explore-btn">
            Explore
          </button>
        </div>
      </div>
      <div className="Trading-Home-deatils-img-container">
        <Image
          src="/Images/computerAnalytics.png"
          className="Trading-Home-img"
          alt="computer"
        />
      </div>
    </div>
  );
};

export default TradingHome;
