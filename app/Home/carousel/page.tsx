// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./page.css";
// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Rectangle from "public/Rectangle.png";

export default function Carousel() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide
          style={{
            background: `url(/Images/carouselImg.png)`,
            width: "50%",
            backgroundSize: "container",
            height: "auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <div className="home_dwgfwgfwg">
            <div className="home_page_details_container">
              <div className="home_page_details_text_container">
                <h6 className="home_page_sub_details_container">
                  Watching your &nbsp;
                  <span className="investment_name">investment</span> grow is so
                  fulfiling
                </h6>
              </div>
              <p className="home_container_capyion_details">
                get upto <span className="nice_ten_P_A">9.10% P.A.*</span>{" "}
                RETURNS WITH{" "}
                <span className="copporated_FD">COPPORATED fD</span>
              </p>
              <div className="home_page_containere_elements">
                <button className="button">OPEN DEMAT</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            background: `url(/Images/carouselImg.png)`,
            width: "50%",
            backgroundSize: "container",
            height: "auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <div className="home_dwgfwgfwg">
            <div className="home_page_details_container">
              <div className="home_page_details_text_container">
                <h6 className="home_page_sub_details_container">
                  Watching your &nbsp;
                  <span className="investment_name">investment</span> grow is so
                  fulfiling
                </h6>
              </div>
              <p className="home_container_capyion_details">
                get upto <span className="nice_ten_P_A">9.10% P.A.*</span>{" "}
                RETURNS WITH{" "}
                <span className="copporated_FD">COPPORATED fD</span>
              </p>
              <div className="home_page_containere_elements">
                <button className="button">OPEN DEMAT</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            background: `url(/Images/carouselImg.png)`,
            width: "50%",
            backgroundSize: "container",
            height: "auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <div className="home_dwgfwgfwg">
            <div className="home_page_details_container">
              <div className="home_page_details_text_container">
                <h6 className="home_page_sub_details_container">
                  Watching your &nbsp;
                  <span className="investment_name">investment</span> grow is so
                  fulfiling
                </h6>
              </div>
              <p className="home_container_capyion_details">
                get upto <span className="nice_ten_P_A">9.10% P.A.*</span>{" "}
                RETURNS WITH{" "}
                <span className="copporated_FD">COPPORATED fD</span>
              </p>
              <div className="home_page_containere_elements">
                <button className="button">OPEN DEMAT</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            background: `url(/Images/carouselImg.png)`,
            width: "50%",
            backgroundSize: "container",
            height: "auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <div className="home_dwgfwgfwg">
            <div className="home_page_details_container">
              <div className="home_page_details_text_container">
                <h6 className="home_page_sub_details_container">
                  Watching your &nbsp;
                  <span className="investment_name">investment</span> grow is so
                  fulfiling
                </h6>
              </div>
              <p className="home_container_capyion_details">
                get upto <span className="nice_ten_P_A">9.10% P.A.*</span>{" "}
                RETURNS WITH{" "}
                <span className="copporated_FD">COPPORATED fD</span>
              </p>
              <div className="home_page_containere_elements">
                <button className="button">OPEN DEMAT</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
