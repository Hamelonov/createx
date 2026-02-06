import styles from './SectionHeader.module.scss'
import clsx from "clsx";

const SectionHeader = (props) => {
  const {
    className,
    id,
    title = '',
    subtitle = '',
    textAlign = 'center',
  } = props

  return (
    <div
      className={clsx(styles.header, className)}
      style={{'--text-align': textAlign}}
    >
      <h2 id={id}>{title}</h2>
      {subtitle && (
        <p className={styles.subtitle}>{subtitle}</p>
      )}
    </div>
  )
}

export default SectionHeader