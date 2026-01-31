import styles from './ServicesPreview.module.scss'

const ServicesPreview = (props) => {
  const {
    cards = []
  } = props

  return (
    <div className={styles.list}>
      {cards.map(({image, title, bgImage}, index) => (
        <div
          key={index}
          className={styles.card}
          style={{'--bgImage': `url(${bgImage})`}}
        >
          <img
            className={styles.image}
            src={image}
            alt=""
            width="52"
            height="52"
            loading="lazy"
          />
          <h3 className={`${styles.title} h5`}>{title}</h3>
        </div>
      ))}
    </div>
  )
}

export default ServicesPreview