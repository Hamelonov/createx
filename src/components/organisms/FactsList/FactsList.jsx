import styles from './FactsList.module.scss'
import FactsArticle from "@/components/molecules/FactsArticle/index.js";

const FactsList = (props) => {
  const {
    facts = [],
  } = props

  return (
    <ul className={styles.list}>
      {facts.map((fact) => (
        <li key={fact.id}>
          <FactsArticle {...fact} />
        </li>
      ))}
    </ul>
  )
}

export default FactsList