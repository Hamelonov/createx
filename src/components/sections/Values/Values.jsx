import styles from './Values.module.scss'

const Values = (props) => {
  const {
    cards = []
  } = props

  return (
    <div className={styles.values}>
      {
        cards.map(({image, title, subtitle}) => (
          <article
            key={title}
            className={styles.card}
          >
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
        ))
      }
    </div>
  )
}

export default Values