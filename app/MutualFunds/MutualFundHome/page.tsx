import React from "react";
import Image from "next/image";

import "./page.css";
type PageProps = {};

const MutualFundHome: React.FC<PageProps> = () => {
  return (
    <div className="Mutual-Home-bg-container">
      <div className="Mutual-Home-deatils-container">
        <h6 className="Mutual-Home-deatils-container-sub-heading">
          With SBI Securities
        </h6>
        <h1 className="Mutual-Home-deatils-container-heading">
          Grow Your Wealth with Mutual Fund Investing:{" "}
          <span className="Mutual-Home-deatils-container-span-heading">
            Smart, Secure, and Simple
          </span>
        </h1>
        <p className="Mutual-Home-deatils-container-caption">
          Competitive rates, low fees, and the most reliable money transfer
          convenient way.You can receive money from abroad directly.
        </p>
        <button className="button">OPEN DEMAT</button>
      </div>
      <div className="Mutual-Home-deatils-img-container">
        <Image
          src="/Images/creditcards.png"
          alt="person"
          className="mutual_first_page_creids"
          width={147}
          height={149.178}
          flex-shrink={0}
        />
        <div className="Mutual-first-page-person-img">
          <Image
            src="/Images/webcharts.png"
            alt="person"
            className="mutual_first_page_web"
            width={137}
            height={120}
          />

          <Image
            src="/Images/boywithphone.png"
            alt="person"
            className="mutual_first_page_person"
            width={277}
            height={345.368}
          />
        </div>
        <Image
          src="/Images/trophy.png"
          alt="person"
          className="mutual_first_page_traget"
          width={142.192}
          height={150.234}
        />
      </div>
    </div>
  );
};

export default MutualFundHome;
