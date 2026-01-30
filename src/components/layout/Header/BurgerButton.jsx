import './BurgerButton.scss'
import {useRef} from "react";

const BurgerButton = (props) => {
  const {
    overlayRef
  } = props

  const burgerButtonRef = useRef(null)

  const openMenu = () => {
    burgerButtonRef.current.classList.toggle('is-active')
    overlayRef.current.classList.toggle('is-active')
    document.documentElement.classList.toggle('is-lock')
  }

  return (
    <button
      className="burger-button visible-tablet"
      type="button"
      ref={burgerButtonRef}
      onClick={openMenu}
    >
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
    </button>
  )
}

export default BurgerButton;