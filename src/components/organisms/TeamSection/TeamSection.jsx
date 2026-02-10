import styles from './TeamSection.module.scss'
import clsx from 'clsx'
import Footnote from "@/components/atoms/Footnote";

const TeamSection = (props) => {
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
      <Footnote>
        <div className={styles.footer}>
          <p>
            Become a part of the best team in the construction market of the USA.
          </p>
          <a
            className={styles.link}
            href="#"
          >
            Available Positions
          </a>
        </div>
      </Footnote>
    </div>
  )
}

export default TeamSection