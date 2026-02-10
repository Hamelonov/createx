import styles from './ValuesList.module.scss'
import clsx from "clsx";
import ValuesArticle from "@/components/molecules/ValuesArticle";

const ValuesList = (props) => {
  const {
    className,
    cards = []
  } = props

  return (
    <div className={clsx(styles.values, className)}>
      {cards.map((card) => (
        <ValuesArticle key={card.id} {...card} />
      ))}
    </div>
  )
}

export default ValuesList