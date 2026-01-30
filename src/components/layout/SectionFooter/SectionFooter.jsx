import styles from './SectionFooter.module.scss'
import Button from "@/components/ui/Button/index.js";
import {Link} from "react-router-dom";

const SectionFooter = (props) => {
  const {
    title,
    link,
  } = props

  return (
    <div className={styles.footer}>
      <h3>{title}</h3>
      {link && (<Link to={link.to}><Button>{link.name}</Button></Link>)}
    </div>
  )
}

export default SectionFooter