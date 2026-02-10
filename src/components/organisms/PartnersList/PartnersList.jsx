import styles from './PartnersList.module.scss'
import clsx from "clsx";

const PartnersList = (props) => {
  const {
    className,
    partners,
  } = props

  return (
    <div className={clsx(styles.partners, className)}>
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

export default PartnersList