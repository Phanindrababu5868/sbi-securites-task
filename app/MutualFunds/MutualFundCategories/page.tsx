import React from "react";
import "./page.css";
import Image from "next/image";

type PageProps = {};

const MutualFundCategories: React.FC<PageProps> = () => {
  return (
    <div className="mutual_secound_page_container">
      <div className="mutual_secound_page_details_container">
        <h5 className="mutual_secound_heading">SBI Provides</h5>
        <h3 className="mutual_secound_sub_heading">Mutual Fund Categories</h3>
        <div className="mutual_secound_page_container_boxes_part">
          <div className="mutual_all_box_container">
            <div className="mutual_secound_container_box_container">
              <div className="mnutual_text_and_images">
                <Image
                  src="/Images/largeCap.png"
                  alt="person"
                  className="mutual_image_size"
                  width={40}
                  height={40}
                />
                <span className="larger_cap">Large Cap Funds</span>
              </div>
            </div>
            <div className="mutual_secound_container_box_container">
              <div className="mnutual_text_and_images">
                <Image
                  src="/Images/midCap.png"
                  alt="person"
                  className="mutual_image_size"
                  width={40}
                  height={40}
                />
                <span className="larger_cap">Mid Cap Funds</span>
              </div>
            </div>
            <div className="mutual_secound_container_box_container">
              <div className="mnutual_text_and_images">
                <Image
                  src="/Images/smallCap.png"
                  alt="person"
                  className="mutual_image_size"
                  width={40}
                  height={40}
                />
                <span className="larger_cap">Small Cap Funds</span>
              </div>
            </div>
            <div className="mutual_secound_container_box_container">
              <div className="mnutual_text_and_images">
                <Image
                  src="/Images/indexFunds.png"
                  alt="person"
                  className="mutual_image_size"
                  width={40}
                  height={40}
                />
                <span className="larger_cap">Index Funds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutualFundCategories;
