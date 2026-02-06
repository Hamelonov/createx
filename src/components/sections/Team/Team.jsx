import styles from './Team.module.scss'
import clsx from 'clsx'

const Team = (props) => {
  const {
    className,
    workers = [],
  } = props

  return (
    <div className={clsx(styles.team, className)}>
      <ul className={styles.list}>
        {workers.map(({id, image, name, position}, index) => (
          <li
            key={id}
            className={styles.worker}
          >
            <div className={styles.imageWrapper}>
              <img
                className={styles.image}
                src={image}
                alt=""
                width="285"
                height="340"
                loading="lazy"
              />
            </div>
            <div className={styles.desc}>
              <p className="h5">{name}</p>
              <p>{position}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className={styles.footer}>
        Become a part of the best team in the construction market of the USA.
        <a
          className={styles.link}
          href="#"
        >
          Available Positions
        </a>
      </p>
    </div>
  )
}

export default Team