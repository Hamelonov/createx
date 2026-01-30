import './Logo.scss'

const Logo = (props) => {
  const {
    className,
    alt,
    width,
    height,
  } = props

  return (
    <img
      className={`logo ${className}`}
      src={alt ? "images/logo-alt.svg" : "images/logo.svg"}
      alt=""
      width={width}
      height={height}
      loading="lazy"
    />
  )
}

export default Logo;