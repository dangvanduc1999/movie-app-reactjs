import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import CHplay from "../../asset/image/CHplay.png";
import Applestore from "../../asset/image/Applestore.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="grid wide">
          <div className="row">
            <div className="col l-7 m-12 c-12">
              <div className="footer__content">
                <div className="footer__content-link">
                  <Link to="/Term">Term Of Use</Link>
                  <Link to="/Policy">Privacy-Policy</Link>
                  <Link to="/Term">Blog</Link>
                  <Link to="/FAQ">FAQ</Link>
                  <Link to="/Term">Watch List</Link>
                </div>
                <div className="footer__content-info">
                  © 2021 TOPMOVIE. All Rights Reserved. All videos and shows on
                  this platform are trademarks of, and all related images and
                  content are the property of, Streamit Inc. Duplication and
                  copy of this is strictly prohibited. All rights reserved.
                </div>
              </div>
            </div>
            <div className="col l-2 m-6 c-12">
              <div className="footer__social">
                <p>follow us</p>
                <div className="footer__social-icon ">
                  <a href="https://www.facebook.com/profile.php?id=100033612248016&viewas=100000686899395">
                    <i className=" icon fab fa-facebook-f" />
                  </a>
                  <a href="https://twitter.com/">
                    <i className=" icon fab fa-twitter" />
                  </a>
                  <a href="https://github.com/dangvanduc1999">
                    <i className=" icon fab fa-github" />
                  </a>
                  <a href="google.com">
                    <i className=" icon fab fa-google-plus-g" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col l-3 m-6 c-12">
              <div className="footer__app">
                <p>Streamit App</p>
                <div className="footer__app-img">
                  <div>
                    <img
                      src={CHplay}
                      alt="chplay"
                      className="footer__app-img-chplay"
                    />
                  </div>
                  <div>
                    <img
                      src={Applestore}
                      alt="applestore"
                      className="footer__app-img-applestore"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
