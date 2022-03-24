/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="footer-section">
      <div className="row">
        <div className="col-md-3">
          <ul>
            <li>
              <a href="#">Emergency Dental Care</a>
            </li>
            <li>
              <a href="#">Check Up</a>
            </li>
            <li>
              <a href="#">Treatment of Personal Diseases</a>
            </li>
            <li>
              <a href="#">Tooth Extraction</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h6 style={{ color: "#1CC7C1", marginLeft: "30px" }}>Services</h6>
          <ul>
            <li>
              <a href="#">Emergency Dental Care</a>
            </li>
            <li>
              <a href="#">Check Up</a>
            </li>
            <li>
              <a href="#">Treatment of Personal Diseases</a>
            </li>
            <li>
              <a href="#">Tooth Extraction</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h6 style={{ color: "#1CC7C1", marginLeft: "30px" }}>Our Health</h6>
          <ul>
            <li>
              <a href="#">Emergency Dental Care</a>
            </li>
            <li>
              <a href="#">Check Up</a>
            </li>
            <li>
              <a href="#">Treatment of Personal Diseases</a>
            </li>
            <li>
              <a href="#">Tooth Extraction</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h6 style={{ color: "#1CC7C1", marginLeft: "30px" }}>Our Address</h6>
          <ul>
            <li>
              <a href="#">
                North Khulshi, Chittagong, Bangladesh
              </a>
            </li>
            <ul className="d-flex my-3 ">
              <li
                className="me-2 text-center icon"
                style={{ fontSize: "20px" }}
              >
                <a href="https://web.facebook.com/">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li
                className="me-2 text-center icon"
                style={{ fontSize: "20px" }}
              >
                <a href="#">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li
                className="me-2 text-center icon"
                style={{ fontSize: "20px" }}
              >
                <a href="https://www.instagram.com/">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
          </ul>
          <div>
            <span className="my-2">Call Now</span>
            <br />
            <button type="button" className="btn-brand">
              +2878125612891
            </button>
          </div>
        </div>
      </div>
      <div className="copy-right text-center  " style={{ marginTop: "35px" }}>
        <h6 className="text-secondary">
          &copy; Copyright {new Date().getFullYear()} Muhammad all right reserved{" "}
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
