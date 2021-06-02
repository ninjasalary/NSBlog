import React from "react"
import headerStyles from "../styles/components/header.module.scss"
import logo from "../../static/128.png"
import logotext from "../../static/128text.png"
export default function Header(props) {
  return (
    <header>
      <div className="header-area home-5">
        <div id="sticky-header" className="main-header-area home-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header_wrap d-flex justify-content-between align-items-center">
                  <div className="header_left">
                    <div className="logo">
                      <a href="/" className="logo_container">
                        <img className={headerStyles.logo_image}  src={logo} />
                        <img className={headerStyles.text_image}  src={logotext} />
                      </a>
                    </div>
                  </div>
                  <div className="header_right d-flex align-items-center">
                    <div className="main-menu d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <a href="https://ninjasalary.com/#about">About</a>
                          </li>
                          <li>
                            <a href="https://ninjasalary.com/#employers">Employers</a>
                          </li>
                          <li>
                            <a href="https://ninjasalary.com/#employees">Employees</a>
                          </li>
                          <li>
                            <a href="https://ninjasalary.com/#contact">Contact</a>
                          </li>
                          <li>
                            <a
                              href="https://angel.co/company/ninjasalary/jobs"
                              target="_blank"
                            >
                              Careers
                            </a>
                          </li>
                          <li>
                            <a href="https://app.ninjasalary.com/">Sign In</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>

                  <div className="d-lg-flex d-none">
                    <ul className="nav align-self-center">
                      <li className="nav-item pl-3">
                        <a
                          className="btn header-btn"
                          href="https://ninjasalary.com/employerSignup.html"
                        >
                          Get Started
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12">
              <div className="mobile_menu d-block d-lg-none"><div className="slicknav_menu"><a href="#" aria-haspopup="true" role="button" className="slicknav_btn slicknav_collapsed"><span className="slicknav_menutxt">MENU</span><span className="slicknav_icon"><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span></span></a><ul className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{display: "none"}}>
                        <li><a href="https://ninjasalary.com/#about" role="menuitem" >About</a></li>
                        <li><a href="https://ninjasalary.com/#employers" role="menuitem" >Employers</a></li>
                        <li><a href="https://ninjasalary.com/#employees" role="menuitem" >Employees</a></li>
                        <li><a href="https://ninjasalary.com/#contact" role="menuitem" >Contact</a></li>
                        <li><a href="https://angel.co/company/ninjasalary/jobs" target="_blank" role="menuitem" >Careers</a></li>
                        <li><a href="https://app.ninjasalary.com/" role="menuitem" >Sign In</a></li>
                      </ul></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
