import styles from './Stats.module.scss'

const Stats = (props) => {
  const {
    stats = []
  } = props

  return (
    <div className={styles.stats}>
      {stats.map(({percent, color, title, subtitle}) => (
        <article key={color} className={styles.item}>
          <h3
            className={styles.itemTitle}
            style={{"--percent": percent, "--color": color}}
          >
            {title}
          </h3>
          <p className={styles.subtitle}>{subtitle}</p>
        </article>
      ))}
    </div>
  )
}

export default Stats