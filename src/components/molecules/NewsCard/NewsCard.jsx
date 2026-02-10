import styles from './NewsCard.module.scss'
import clsx from 'clsx'
import Icon from "@/components/atoms/Icon/index.js";

const NewsCard = (props) => {
  const {
    className,
    image,
    title,
    category,
    time,
    text
  } = props

  return (
    <article
      key={image}
      className={clsx(styles.card, className)}
    >
      <div className={styles.image}>
        <img
          src={image}
          alt=""
          loading="lazy"
        />
      </div>
      <div className={styles.body}>
        <h3 className={`${styles.title} h5`}>
          <a
            className="link"
            href="#"
          >
            {title}
          </a>
        </h3>
        <div className={styles.description}>
          <span>{category}</span>
          <time
            dateTime={time}
          >
            {time}
          </time>
          <span>
            <Icon
              src="icons/comments.svg"
              size={16}
            >
              4 comments
            </Icon>
          </span>
        </div>
        {text && (
          <p className={styles.text}>
            {text}
          </p>
        )}
      </div>
    </article>
  )
}

export default NewsCard