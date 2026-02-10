import styles from './Section.module.scss'
import clsx from 'clsx'

const Section = (props) => {
  const {
    className,
    id,
    bgColor,
    paddingTop = 120,
    paddingBottom = 120,
    children,
  } = props

  let color = null;

  switch (bgColor) {
    case 'gray':
      color = 'var(--color-gray-200)'
      break
    case 'dark':
      color = 'var(--color-gray-900)'
      break
    default:
      color = 'transparent'
  }

  return (
    <section
      id={id}
      className={clsx(styles.section, className)}
      style={{
        '--background-color': color,
        '--padding-top': paddingTop + 'px',
        '--padding-bottom': paddingBottom + 'px',
      }}
    >
      <div className="container">
        {children}
      </div>
    </section>
  )
}

export default Section