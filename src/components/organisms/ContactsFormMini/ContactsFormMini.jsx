import Button from "@/components/atoms/Button/index.js";
import Field from "@/components/atoms/Field/index.js";
import {useId} from "react";
import styles from './ContactsFormMini.module.scss'
import clsx from "clsx";

const ContactsFormMini = (props) => {
  const {id, className} = props

  const formId = useId()

  return (<div
    id={id}
    className={clsx(styles.contacts, 'container', className)}
  >
    <div className={styles.body}>
      <h2>Want to know more? Ask us a question:</h2>
      <form className={styles.form}>
        <Field
          id={`${formId}-form-name`}
          label="Name"
          placeholder="Your name"
        />
        <Field
          id={`${formId}-form-phone`}
          label="Phone"
          type="tel"
          placeholder="Your phone"
        />
        <Field
          className={styles.tabletBig}
          id={`${formId}-form-message`}
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
  </div>)
}

export default ContactsFormMini