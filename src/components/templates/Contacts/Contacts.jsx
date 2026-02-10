import styles from './Contacts.module.scss'
import clsx from 'clsx'
import Section from "@/components/templates/Section/index.js";
import ContactsForm from "@/components/organisms/ContactsForm/index.js";

const Contacts = (props) => {
  const {
    className,
    children
  } = props

  return (
    <Section
      paddingTop={80}
      paddingBottom={80}
      className={clsx(styles.contacts, className)}
    >
      <div className={styles.body}>
        <ContactsForm />
      </div>
    </Section>
  )
}

export default Contacts