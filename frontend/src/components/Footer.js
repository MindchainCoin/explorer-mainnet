/* eslint-disable */
import React from "react";
import "./Footer.css";
import { TbBrandTelegram } from "react-icons/tb";
import { BsMedium, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h3>Document</h3>
            <ul>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="https://github.com/MindchainCoin" target="_blank">
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Community</h3>
            <div className="social-links">
              <a
                href="https://twitter.com/MindChain1"
                target="_blank"
                aria-label="Telegram"
              >
                <TbBrandTelegram size={20} />
              </a>
              <a
                href="https://twitter.com/MindChain1"
                target="_blank"
                aria-label="Medium"
              >
                <BsMedium size={20} />
              </a>
              <a
                href="https://twitter.com/MindChain1"
                target="_blank"
                aria-label="Twitter"
              >
                <BsTwitter size={20} />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="foo">
        Copyright © 2023 - 2025. Mindchain Ecosystem All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
