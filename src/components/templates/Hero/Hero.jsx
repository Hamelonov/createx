import styles from './Hero.module.scss'
import clsx from "clsx";
import {useLocation} from "react-router-dom";
import PropTypes from 'prop-types'

const Hero = (props) => {
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
    <section className={clsx(styles.hero, className)}>
      <img
        className={styles.bgImage}
        src={bgImage}
        alt=""
        width="1920"
        height="600"
        loading="lazy"
      />
      <div className={clsx(styles.inner, 'container')}>
        <p className={styles.path}>
          <span className={styles.pathSource}>Homepage</span> / {formattedPath}
        </p>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.text}>
          {children}
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  bgImage: PropTypes.string.isRequired
}

export default Hero