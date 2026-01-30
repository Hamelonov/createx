import styles from './News.module.scss'
import Icon from "@/components/ui/Icon";

const News = (props) => {
  const {
    articles = []
  } = props

  return (
    <div className={styles.news}>
      {articles.map(({image, title, text, category, time}) => (
        <article
          key={image}
          className={styles.card}
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
      ))}
    </div>
  )
}

export default News