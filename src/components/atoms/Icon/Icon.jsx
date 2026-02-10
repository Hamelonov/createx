import PropTypes from 'prop-types'
import './Icon.scss'
import clsx from "clsx";

const Icon = (props) => {
  const {
    className,
    src,
    size,
    direction,
    children,
  } = props

  return (
    <span
      className={clsx('icon', className)}
      style={{
        '--src': `url(/${src})`,
        '--size': size + 'px',
        '--direction': direction === 'reverse' ? 'row' : 'row-reverse'
      }}
    >
      {children}
    </span>
  )
}

Icon.propTypes = {
  src: PropTypes.any.isRequired,
  size: PropTypes.string.isRequired,
}

export default Icon