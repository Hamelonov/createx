import './Button.scss'
import clsx from "clsx";

const Button = (props) => {
  const {
    className,
    type = "button",
    onClick,
    altStyle,
    children,
  } = props

  return (
    <button
      onClick={onClick}
      className={clsx('button', className, altStyle ? 'button--alt' : '')}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button