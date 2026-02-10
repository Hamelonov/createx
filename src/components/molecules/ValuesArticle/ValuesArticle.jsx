import styles from './ValuesArticle.module.scss'
import clsx from 'clsx'

const ValuesArticle = (props) => {
  const {
    className,
    image,
    title,
    subtitle,
  } = props

  return (
    <article className={clsx(styles.card, className)}>
      <img
        className={styles.image}
        src={image}
        alt=""
        width="48"
        height="48"
        loading="lazy"
      />
      <h3 className={styles.title}>{title}</h3>
      <p>{subtitle}</p>
    </article>
  )
}

export default ValuesArticle