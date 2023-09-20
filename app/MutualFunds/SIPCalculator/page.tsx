import React from "react";
import "./page.css";
import Image from "next/image";

type PageProps = {};

const SIPCalculator: React.FC<PageProps> = () => {
  return (
    <div className="mutual_third_page_container">
      <div className="mutual_secound_page_details_container">
        <h5 className="mutual_secound_heading">Financial Planning</h5>
        <h3 className="mutual_secound_sub_heading">
          SIP For Goal Based Investing
        </h3>

        <div className="mutual_third_page_container_details">
          <div className="mutual_third_page_container_inner_det">
            <h3 className="Sip_claculator">SIP CALCULATOR</h3>
            <div className="Inverstinon_section_money">
              <div className="money_plane">
                <h5 className="name_inverstment">Monthly Investment</h5>
                <select>
                  <option className="number">10,000 Rs</option>
                  <option className="number">5,000 Rs</option>
                  <option className="number">3,000 Rs</option>
                  <option className="number">1,00,000 Rs</option>
                </select>
                <div>
                  <p className="total_amount">
                    Expected Return Rate : 12% P.A.
                  </p>
                </div>
              </div>

              <div className="money_plane">
                <h5 className="name_inverstment">Time Period</h5>
                <select>
                  <option className="number">5 Years</option>
                  <option className="number">3 Years</option>
                  <option className="number">2 Years</option>
                  <option className="number">1 Years</option>
                </select>
                <div>
                  <p className="total_amount">
                    Total amount invested : 6,00,000 Rs
                  </p>
                </div>
              </div>
            </div>
            <div className="button_container_section">
              <button className="button">Invest Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mutual_all_box_container">
        <div className="mutual_secound_container_box_container">
          <div className="mnutual_text_and_images">
            <Image
              src="/Images/home.png"
              alt="person"
              className="mutual_image_size"
              width={40}
              height={40}
            />
            <span className="larger_cap">Dream Home Plan</span>
          </div>
        </div>
        <div className="mutual_secound_container_box_container">
          <div className="mnutual_text_and_images">
            <Image
              src="/Images/mortarboard.png"
              alt="person"
              className="mutual_image_size"
              width={40}
              height={40}
            />
            <span className="larger_cap">Child’s Education</span>
          </div>
        </div>
        <div className="mutual_secound_container_box_container">
          <div className="mnutual_text_and_images">
            <Image
              src="/Images/chair.png"
              alt="person"
              className="mutual_image_size"
              width={40}
              height={40}
            />
            <span className="larger_cap">Retirement Planning</span>
          </div>
        </div>
        <div className="mutual_secound_container_box_container">
          <div className="mnutual_text_and_images">
            <Image
              src="/Images/umbrella.png"
              alt="person"
              className="mutual_image_size"
              width={40}
              height={40}
            />
            <span className="larger_cap">Vacation Planning</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIPCalculator;
