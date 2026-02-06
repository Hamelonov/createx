import {useRef} from "react";
import {NavLink} from 'react-router-dom'
import BurgerButton from "./BurgerButton/BurgerButton.jsx"
import Logo from '@/components/ui/Logo'
import './Header.scss'

const Header = (props) => {
  const {
    routes = [],
    contactCards = [
      {
        image: 'images/nav/phone.svg',
        title: 'Call us',
        link: '(405) 555-0128',
      },
      {
        image: 'images/nav/chat.svg',
        title: 'Talk to us',
        link: 'hello@createx.com',
      },
    ],
  } = props

  const overlayRef = useRef(null)

  return (
    <header className="header">
      <div className="header__inner container">
        <NavLink to="/">
          <Logo
            className="header__logo"
            width={'130'}
            height={'22'}
          />
        </NavLink>
        <div
          ref={overlayRef}
          className="header__overlay"
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {
                routes
                  .filter(route => route.name)
                  .map(({path, name}) => {
                  return (
                    <li
                      key={path}
                      className="header__menu-item"
                    >
                      <NavLink
                        to={path}
                        className="header__menu-link"
                      >
                        {name}
                      </NavLink>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
          <div className="header__contacts">
            {
              contactCards.map(({image, title, link}) => {
                return (
                  <div
                    key={title}
                    className="header__contacts-card"
                  >
                    <img
                      src={image}
                      alt=""
                      className="header__contacts-icon"
                    />
                    <span className="header__contacts-title">{title}</span>
                    <a
                      className="header__contacts-link"
                      href={link}
                    >
                      {link}
                    </a>
                  </div>
                )
              })
            }
          </div>
        </div>
        <BurgerButton overlayRef={overlayRef} />
      </div>
    </header>
  )
}

export default Header