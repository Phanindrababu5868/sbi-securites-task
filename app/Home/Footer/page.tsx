import "./page.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="Footer-section-bg-container">
      <div className="Fooetr-section-deatils-container">
        <div className="logo-container">
          <Link href="/">
            <img src="/Images/logo.png" className="logo" />
          </Link>
        </div>
        <div className="Footer-section-deatils-lists-bg-container">
          <div className="Footer-section-deatils-list-container">
            <span className="Footer-section-deatils-list-heading">Company</span>
            <span className="Footer-section-deatils-list-text">About US</span>
            <span className="Footer-section-deatils-list-text">Services</span>
            <span className="Footer-section-deatils-list-text">Career</span>
          </div>
          <div className="Footer-section-deatils-list-container">
            <span className="Footer-section-deatils-list-heading">Links</span>
            <span className="Footer-section-deatils-list-text">Products</span>
            <span className="Footer-section-deatils-list-text">Platform</span>
            <span className="Footer-section-deatils-list-text">
              Knowledge Center
            </span>
          </div>
          <div className="Footer-section-deatils-list-container">
            <span className="Footer-section-deatils-list-heading">Contact</span>
            <span className="Footer-section-contact-details-container">
              <img
                src="/Images/phone.png"
                className="Footer-section-contact-img"
              />
              <span className="Footer-section-deatils-list-text Footer-section-contact-details-container-span">
                223 7283 2381
              </span>
            </span>
            <span className="Footer-section-contact-details-container Footer-section-deatils-list-text">
              <img
                src="/Images/envelope.png"
                className="Footer-section-contact-img"
              />
              Helpdesk@sbi.com
            </span>
            <span className="Footer-section-contact-details-container">
              <img
                src="/Images/facebook.png"
                className="Footer-section-social-media-img"
              />
              <img
                src="/Images/twitter.png"
                className="Footer-section-social-media-img"
              />
              <img
                src="/Images/linkedin.png"
                className="Footer-section-social-media-img"
              />
              <img
                src="/Images/instagram.png"
                className="Footer-section-social-media-img"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="Footer-section-our-apps-container">
        <p className="Footer-section-deatils-list-heading out-app-text">
          Our Apps
        </p>
        <div className="Trading-experience-section-imgs-container">
          <img
            src="/Images/apple.png"
            className="Trading-experience-section-img"
          />
          <img
            src="/Images/GooglePlay.png"
            className="Trading-experience-section-img"
          />
        </div>
      </div>
      <div className="Footer-section-copy-right-text-container">
        <p className="Footer-section-copy-right-text">
          Copyright © 2021. All rights Reserved. SBICAP Securities Limited
        </p>
      </div>
    </div>
  );
};

export default Footer;
