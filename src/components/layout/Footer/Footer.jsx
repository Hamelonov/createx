import Button from "@/components/ui/Button/index.js";
import Logo from "@/components/ui/Logo/index.js";
import Socials from "@/components/common/Socials/index.js";
import Icon from "@/components/ui/Icon/index.js";
import './Footer.scss'

const Footer = (props) => {
  const {
    className
  } = props

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__header">
          <div className="footer__header-column">
            <div className="footer__header-flex">
              <Logo alt className="footer__logo" width="142" height="24" />
              <Socials className="footer__socials" />
            </div>
            <p className="footer__info">
              Createx Construction Bureau has been successfully operating in the USA construction market since
              2000. We are proud to offer you quality construction and exemplary service. Our mission is to set the highest standards for construction sphere.
            </p>
          </div>
          <div className="footer__header-column">
            <h2 className="footer__call h4">
              Let’s stay in touch
            </h2>
            <form
              className="footer__form"
            >
              <input
                className="footer__form-input"
                id="email"
                name="email"
                placeholder="Your email address"
              />
              <Button className="footer__form-button" type="submit">Subscribe</Button>
            </form>
            <p className="footer__form-info">
              *Subscribe to our newsletter to receive communications and early updates from Createx Construction Bureau.
            </p>
          </div>
        </div>
        <nav className="footer__nav">
          <div className="footer__nav-column">
            <h2 className="footer__nav-title h6">HEAD OFFICE</h2>
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a
                  className="footer__nav-link"
                  href="#"
                >
                  <p>
                    <span>Address:</span>
                    8502 Preston Rd. Inglewood, New York
                  </p>
                </a>
              </li>
              <li className="footer__nav-item">
                <a
                  className="footer__nav-link"
                  href="#"
                >
                  <p>
                    <span>Call: </span>
                    (405) 555-0128
                  </p>
                </a>
              </li>
              <li className="footer__nav-item">
                <a
                  className="footer__nav-link"
                  href="#"
                >
                  <p>
                    <span>Email: </span>
                    hello@createx.com
                  </p>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__nav-column">
            <h2 className="footer__nav-title h6">WHO WE ARE</h2>
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a
                  className="footer__nav-link"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="footer__nav-item">
                <a
                  className="footer__nav-link"
                  href="#"
                >
                  Available Positions
                </a>
              </li>
              <li className="footer__nav-item">
                <a
                  className="footer__nav-link"
                  href="#"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__nav-column">
            <h2 className="footer__nav-title h6">OUR EXPERIENCE</h2>
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a
                  className="footer__nav-link"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li className="footer__nav-item">
                <a
                  className="footer__nav-link"
                  href="#"
                >
                  Work
                </a>
              </li>
              <li className="footer__nav-item">
                <a
                  className="footer__nav-link"
                  href="#"
                >
                  News
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <p className="footer__copy">
          © All rights reserved. Made with <Icon src="icons/heart.svg" size={16} /> by Createx Studio
        </p>
      </div>
    </footer>
  )
}

export default Footer