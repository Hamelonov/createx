import styles from './FactsArticle.module.scss'
import clsx from 'clsx'

const FactsArticle = (props) => {
  const {
    className,
    image,
    title,
    subtitle,
  } = props

  return (
    <article className={clsx(styles.article, className)}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={image}
          alt=""
          width="48"
          height="48"
          loading="lazy"
        />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </article>
  )
}

export default FactsArticle