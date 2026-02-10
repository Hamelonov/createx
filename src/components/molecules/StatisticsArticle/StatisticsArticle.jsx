import styles from './StatisticsArticle.module.scss'
import clsx from 'clsx'

const StatisticsArticle = (props) => {
  const {
    className,
    percent,
    color,
    title,
    subtitle,
  } = props

  return (
    <article className={clsx(styles.article, className)}>
      <h3
        className={styles.title}
        style={{"--percent": percent, "--color": color}}
      >
        {title}
      </h3>
      <p className={styles.subtitle}>{subtitle}</p>
    </article>
  )
}

export default StatisticsArticle