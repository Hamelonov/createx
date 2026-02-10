import styles from './PortfolioNavFilter.module.scss'
import clsx from 'clsx'
import Button from "@/components/atoms/Button/index.js";
import {ReactSVG} from "react-svg";
import {useState} from "react";

const PortfolioNavFilter = (props) => {
  const {
    className,
    links = [
      {
        icon: '/icons/house-with-heart.svg',
        category: 'All projects',
      },
      {
        icon: '/icons/bricks.svg',
        category: 'Construction',
      },
      {
        icon: '/icons/plan.svg',
        category: 'Project Development',
      },
      {
        icon: '/icons/carpets.svg',
        category: 'Interior Design',
      },
      {
        icon: '/icons/roller.svg',
        category: 'Repairs',
      },
    ]
  } = props

  const [activeButton, setActiveButton] = useState(0)

  return (
    <div className={clsx(styles.navigation, className)}>
      {links.map(({icon, category}, index) => (
        <Button
          key={category}
          onClick={() => setActiveButton(index)}
          className={clsx(styles.navButton, index === activeButton && styles.active)}
          altStyle
        >
          <ReactSVG
            src={icon}
            className={styles.icon}
          />
          {category}
        </Button>
      ))}
    </div>
  )
}

export default PortfolioNavFilter