import styles from './SectionHeader.module.scss'

const SectionHeader = (props) => {
  const {
    id,
    title = '',
    subtitle = '',
    textAlign = 'center',
  } = props

  return (
    <div
      className={styles.header}
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