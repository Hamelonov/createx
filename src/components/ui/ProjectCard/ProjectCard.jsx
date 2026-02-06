import styles from './ProjectCard.module.scss'
import clsx from 'clsx'
import {Link} from "react-router-dom";
import Button from "@/components/ui/Button";


const ProjectCard = (props) => {
  const {
    className,
    image,
    title,
    category,
    link,
  } = props

  return (
    <article className={clsx(styles.projectCard, className)}>
      <div className={styles.cardImageWrapper}>
        <img
          className={styles.cardImage}
          src={image}
          alt=""
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className="h5">{title}</h3>
        <p className={styles.cardCategory}>{category}</p>
        {link && (
          <div className={styles.cardHiddenPart}>
            <Link to={link}>
              <Button
                altStyle
              >
                View Project
              </Button>
            </Link>
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard