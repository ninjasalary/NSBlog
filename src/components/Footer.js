import React from 'react'
import footerStyles from "../styles/components/footer.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram, faTwitter, faStackOverflow, faCodepen, faDev, faAngellist, faGithub } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
    return (
        <div>
            <div className="footer-contact-area theme-bg section-padding-100-0">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6 col-lg-3">
          <div className="footer-single-widget mb-50">
            <div className="footer-logo">
              <a href="#"><img src="https://ninjasalary.com/img/favicon copy.png" alt="" /></a>
            </div>
            <div className="footer-contact-icon">
              <a href="https://www.linkedin.com/company/ninjasalary/" title="linkedin" className="linkedin" target="_blank"><i className="ri-linkedin-fill"></i></a>
              <a href="https://twitter.com/ninja_salary" target="_blank" title="twitter" className="twitter"><i className="ri-twitter-fill"></i></a>
              <a href="http://facebook.com/ninjasalary" title="facebook" className="facebook" target="_blank"><i className="ri-facebook-circle-fill"></i></a>
            </div>
          </div>
        </div>

        
        <div className="col-sm-6 col-lg-3">
          <div className="footer-single-widget mb-50">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="https://ninjasalary.com/">Home</a></li>
              <li><a href="https://ninjasalary.com/#about">About Us</a></li>
              <li><a href="https://ninjasalary.com/#contact">Contact</a></li>
              <li><a href="https://angel.co/company/ninjasalary/jobs" target="_blank">Careers</a></li>
            </ul>
          </div>
        </div>

        
        <div className="col-sm-6 col-lg-3">
          <div className="footer-single-widget mb-50">
            <h4>Product Help</h4>
            <ul>
              <li><a href="https://ninjasalary.com/#employers">For Employers</a></li>
              <li><a href="https://ninjasalary.com/#employees">For Employees</a></li>
            </ul>
          </div>
        </div>

        
        <div className="col-sm-6 col-lg-3">
          {/* <div className="footer-single-widget mb-50" style="display: none;">
            <h4>Download</h4>
            <div className="store-buttons store-black d-flex flex-wrap">
              <a className="mr-3 mb-2" href="#"><img src="img/icon-img/google-play-btn.png" alt=""/></a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    
    <div className="copy-right-area">
      <div className="container">
        <div className="row">
          
          <div className="col-md-6">
            <div className="copy-right-menu">
              <ul>
                <li>
                  <a href="#">© Copyrights 2021 NinjaSalary All rights reserved.</a>
                </li>
              </ul>
            </div>
          </div>

          
          <div className="col-md-6 text-right mt-sm-cu-30">
            <div className="copy-right-content">
              <p>Made with <i className="ri-heart-fill" style={{verticleAlign: "middle",color:"red"}}></i> In India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}