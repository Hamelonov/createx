import styles from './PortfolioSection.module.scss'
import clsx from 'clsx'
import ProjectCard from "@/components/molecules/ProjectCard";
import LoadMore from "@/components/molecules/LoadMore";
import PortfolioNavFilter from "@/components/organisms/PortfolioNavFilter/index.js";

const PortfolioSection = (props) => {
  const {
    className,
    works = []
  } = props

  return (
    <div className={clsx(styles.portfolio, className)}>
      <PortfolioNavFilter className={styles.menu} />
      <div className={styles.list}>
        {works.map(({id, image, title, category, link}) => (
          <ProjectCard
            key={id}
            image={image}
            title={title}
            category={category}
            link={link}
          />
        ))}
      </div>
      <LoadMore />
    </div>
  )
}

export default PortfolioSection