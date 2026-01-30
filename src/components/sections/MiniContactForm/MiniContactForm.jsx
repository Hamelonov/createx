import Button from "@/components/ui/Button/index.js";
import Field from "@/components/ui/Field/index.js";
import {useId} from "react";
import styles from './MiniContactForm.module.scss'

const MiniContactForm = (props) => {
  const {id} = props

  const fromId = useId()

  return (
    <div id={id} className={`${styles.contact} container`}>
      <div className={styles.body}>
        <h2>Want to know more? Ask us a question:</h2>
        <form className={styles.form}>
          <Field
            id={`${fromId}-form-name`}
            label="Name"
            placeholder="Your name"
          />
          <Field
            id={`${fromId}-form-phone`}
            label="Phone"
            type="tel"
            placeholder="Your phone"
          />
          <Field
            className={styles.tabletBig}
            id={`${fromId}-form-message`}
            label="Message"
            placeholder="Your message"
            form="textarea"
          />
          <Button
            className={styles.button}
            type="submit"
          >Send</Button>
        </form>
      </div>
    </div>
  )
}

export default MiniContactForm