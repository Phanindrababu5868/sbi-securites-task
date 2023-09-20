import "./page.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="Footer-section-bg-container">
      <div className="Fooetr-section-deatils-container">
        <div className="logo-container">
          <Link href="/">
            <Image src="/Images/logo.png" className="logo" alt="logo" />
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
              <Image
                src="/Images/phone.png"
                className="Footer-section-contact-img"
                alt="phone"
              />
              <span className="Footer-section-deatils-list-text Footer-section-contact-details-container-span">
                223 7283 2381
              </span>
            </span>
            <span className="Footer-section-contact-details-container Footer-section-deatils-list-text">
              <Image
                src="/Images/envelope.png"
                className="Footer-section-contact-img"
                alt="email"
              />
              Helpdesk@sbi.com
            </span>
            <span className="Footer-section-contact-details-container">
              <Image
                src="/Images/facebook.png"
                className="Footer-section-social-media-img"
                alt="facebook"
              />
              <Image
                src="/Images/twitter.png"
                className="Footer-section-social-media-img"
                alt="twitter"
              />
              <Image
                src="/Images/linkedin.png"
                className="Footer-section-social-media-img"
                alt="linkedin"
              />
              <Image
                src="/Images/instagram.png"
                className="Footer-section-social-media-img"
                alt="instagram"
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
          <Image
            src="/Images/apple.png"
            className="Trading-experience-section-img"
            alt="apple"
          />
          <Image
            src="/Images/GooglePlay.png"
            className="Trading-experience-section-img"
            alt="googlePlay"
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
