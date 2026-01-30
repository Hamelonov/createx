import styles from './Partners.module.scss'

const Partners = (props) => {
  const {
    partners,
  } = props

  return (
    <div className={styles.partners}>
      {partners.map(({id, name, image}) => (
        <div key={id} className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={image}
            alt={name}
            width="120"
            height="64"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}

export default Partners