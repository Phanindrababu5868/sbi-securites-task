import React from "react";
import "./page.css";

import Image from "next/image";

type PageProps = {};

const InvestmentIdeas: React.FC<PageProps> = () => {
  return (
    <div className="mutual_secound_page_container">
      <div className="mutual_secound_page_details_container">
        <h5 className="mutual_secound_heading">Smart Investment</h5>
        <h3 className="mutual_secound_sub_heading">Investment Ideas</h3>
        <div className="mutual_all_box_container">
          <div className="mutual_secound_container_box_container_1">
            <div className="mnutual_text_and_images_1">
              <Image
                src="/Images/financialgrowth.png"
                alt="person"
                className="mutual_image_size_2"
                width={113}
                height={113}
              />
              <span className="larger_cap">Gold</span>
            </div>
          </div>
          <div className="mutual_secound_container_box_container_1">
            <div className="mnutual_text_and_images_1">
              <Image
                src="/Images/company.png"
                alt="person"
                className="mutual_image_size_2"
                width={113}
                height={113}
              />
              <span className="larger_cap">Top Companies</span>
            </div>
          </div>
          <div className="mutual_secound_container_box_container_1">
            <div className="mnutual_text_and_images_1">
              <Image
                src="/Images/Piggy.png"
                alt="person"
                className="mutual_image_size_2"
                width={113}
                height={113}
              />
              <span className="larger_cap">Tax Saving Funds</span>
            </div>
          </div>
          <div className="mutual_secound_container_box_container_1">
            <div className="mnutual_text_and_images_1">
              <Image
                src="/Images/coins.png"
                alt="person"
                className="mutual_image_size_2"
                width={113}
                height={113}
              />
              <span className="larger_cap">Start With RS 500</span>
            </div>
          </div>
        </div>
        <div className="mutual_all_box_container">
          <div className="mutual_secound_container_box_container_1">
            <div className="mnutual_text_and_images_1">
              <Image
                src="/Images/GrowingMoney.png"
                alt="person"
                className="mutual_image_size_2"
                width={113}
                height={113}
              />
              <span className="larger_cap">Best SIP Funds</span>
            </div>
          </div>
          <div className="mutual_secound_container_box_container_1">
            <div className="mnutual_text_and_images_1">
              <Image
                src="/Images/income.png"
                alt="person"
                className="mutual_image_size_2"
                width={113}
                height={113}
              />
              <span className="larger_cap">Better Than FD</span>
            </div>
          </div>
          <div className="mutual_secound_container_box_container_1">
            <div className="mnutual_text_and_images_1">
              <Image
                src="/Images/Bitcoinstatistics.png"
                alt="person"
                className="mutual_image_size_2"
                width={113}
                height={113}
              />
              <span className="larger_cap">Trading Themes</span>
            </div>
          </div>
          <div className="mutual_secound_container_box_container_1">
            <div className="mnutual_text_and_images_1">
              <Image
                src="/Images/StocksGrowth.png"
                alt="person"
                className="mutual_image_size_2"
                width={113}
                height={113}
              />
              <span className="larger_cap">High return Funds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentIdeas;
