import React from "react";
import "./page.css";
import Image from "next/image";
import YoungMan from "public/YoungMan.png";
type PageProps = {};

const MagicOfCompounding: React.FC<PageProps> = () => {
  return (
    <div className="mutual_five_page_container">
      <div className="mutual_five_page_container_textImages">
        <div className="mutual_five_inner_container">
          <h4 className="heading_invest_early">
            Invest early to see Magic of Compounding
          </h4>
          <div className="number_and_title_containers">
            <div className="all_number_text_container">
              <span className="number_size_section">100+</span>
              <p className="name_number_size_container">Investments done</p>
            </div>
            <div className="all_number_text_container">
              <span className="number_size_section">15,000+</span>
              <p className="name_number_size_container">Customers Served</p>
            </div>
            <div className="all_number_text_container">
              <span className="number_size_section">26</span>
              <p className="name_number_size_container">States</p>
            </div>
          </div>
          <button className="button">invest In SIP</button>
        </div>
        <div className="mutual_five_person">
          <Image
            src="/Images/youngman.png"
            alt="person"
            className="mutual_first_page_creids"
            width={294}
            height={336}
            flex-shrink={0}
          />
        </div>
      </div>
    </div>
  );
};

export default MagicOfCompounding;
