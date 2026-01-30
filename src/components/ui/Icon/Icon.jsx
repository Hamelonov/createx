import PropTypes from 'prop-types'
import './Icon.scss'

const Icon = (props) => {
  const {
    src,
    size,
    direction,
    children,
  } = props

  return (
    <span
      className={`icon`}
      style={{
        '--src': `url(${src})`,
        '--size': size + 'px',
        '--direction': direction === 'reverse' ? 'row' : 'row-reverse'
      }}
    >
      {children}
    </span>
  )
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

export default Icon