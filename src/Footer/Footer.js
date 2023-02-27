import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";
import { RxTwitterLogo } from "react-icons/rx";
import { BsJournalCode } from "react-icons/bs";
import Style from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={Style.box}>
      <div className={Style.social}>
        <div className={Style.box2}>
          <h6>My travell</h6>
          <h6>Careers</h6>
          <h6>Terms</h6>
          <h6>Tour</h6>
          <h6>Blog</h6>
          <h6>Privacy policy</h6>
          <h6>Get the app</h6>
          <h6>Help and Support</h6>
          <h6>Cookie settings</h6>
          <h6>About Us</h6>
          <h6>Affiliate</h6>
          <h6>Sitemap</h6>
          <h6>Contact us</h6>
          <h6>Investors</h6>
          <h6>Accessibilty statement</h6>
        </div>
        <div className={Style.socialLogo}>
          <AiOutlineInstagram />
          <FiYoutube />
          <AiOutlineFacebook />
          <RxTwitterLogo />
          <AiOutlineLinkedin />
        </div>
      </div>
      <label className={Style.boxIcon}>
        <BsJournalCode /> my travell..
      </label>
      <div className={Style.boxFooter}>
        <span>
          All trademarks are properties of their respective owners. 2008-2023 ©
          my travell™ Ltd. All rights reserved.
        </span>
      </div>
      <h3 className={Style.boxDesigned}>
        Designed by <span className={Style.boxownername}> Abhishek</span>😎
      </h3>
    </div>
  );
}