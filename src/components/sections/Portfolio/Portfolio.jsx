import styles from './Portfolio.module.scss'
import clsx from 'clsx'
import ProjectCard from "@/components/ui/ProjectCard/index.js";

const Portfolio = (props) => {
  const {
    className,
    works = []
  } = props

  return (
    <div className={clsx(styles.portfolio, className)}>
      <div className="">Menu</div>
      <div className={styles.list}>
        {works.map(({image, title, category, link}) => (
          <ProjectCard image={image} title={title} category={category} link={link} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio