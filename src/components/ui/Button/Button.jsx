import './Button.scss'

const Button = (props) => {
  const {
    className = '',
    type = "button",
    children,
    altStyle,
  } = props

  return (
    <button
      className={`button ${className} ${altStyle ? 'button--alt' : ''}`}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button