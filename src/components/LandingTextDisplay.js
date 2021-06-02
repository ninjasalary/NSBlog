import React from 'react'
import landingStyles from "../styles/components/landing.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram, faTwitter, faStackOverflow, faCodepen, faDev, faAngellist, faGithub } from '@fortawesome/free-brands-svg-icons'
export default function LandingTextDisplay(props) {
    return (
        <section className="banner-area bg-light" id="about">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 col-md-6 col-sm-12">
          <div className="banner-content">
            <div className="banner-title b-title">
              <h1 className="wow fadeInLeft  animated" data-wow-delay=".5s" >
                Withdraw your salary anytime
              </h1>
              <p>
                Access a portion of your earned salary whenever you need it. We integrate with employers to provide a seamless experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-6">
          <div className="m-right3 wow fadeInRight  d-none d-md-block animated" >
            <img src="https://ninjasalary.com/img/banner/ba-2.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}