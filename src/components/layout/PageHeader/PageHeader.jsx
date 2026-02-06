import PropTypes from 'prop-types'
import clsx from "clsx";
import {useLocation} from "react-router-dom";
import './PageHeader.scss'

const PageHeader = (props) => {
  const {
    className,
    title,
    bgImage,
    children,
  } = props

  const location = useLocation()
  const cleanPath = location.pathname.replace('/', '')
  const formattedPath = cleanPath.charAt(0).toUpperCase() + cleanPath.slice(1);

  return (
    <section className={clsx('page-header', className)}>
      <img
        className="page-header__bg-image"
        src={bgImage}
        alt=""
        width="1920"
        height="600"
        loading="lazy"
      />
      <div className="page-header__inner container">
        <p className="page-header__path">
          <span className="page-header__path-src">Homepage</span> / {formattedPath}
        </p>
        <h1 className="page-header__title">{title}</h1>
        <div className="page-header__text">
          {children}
        </div>
      </div>
    </section>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  bgImage: PropTypes.string.isRequired
}

export default PageHeader