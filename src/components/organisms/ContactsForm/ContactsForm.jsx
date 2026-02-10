import styles from './ContactsForm.module.scss'
import clsx from 'clsx'
import {useId} from "react";
import Field from "@/components/atoms/Field";
import Checkbox from "@/components/atoms/Checkbox";
import Button from "@/components/atoms/Button";

const ContactsForm = (props) => {
  const {
    className
  } = props

  const id = useId()

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries())

    console.log('Данные к отправке', data)

    console.log(`Спасибо, ${data.userName}! Мы свяжемся в с вами.`)
  }

  return (
    <form
      className={clsx(styles.form, className)}
      onSubmit={handleSubmit}
    >
      <h2 className={clsx(styles.title, 'h3')}>A quick way to discuss details</h2>
      <div className={styles.controls}>
        <Field
          id={`${id}-form-name`}
          name="userName"
          label="Name*"
          placeholder="Your name"
          required
        />
        <Field
          id={`${id}-form-phone`}
          type={'tel'}
          name="userPhone"
          label="Phone*"
          placeholder="Your phone number"
          required
        />
        <Field
          id={`${id}-form-email`}
          type={'email'}
          name="userEmail"
          label="Email"
          placeholder="Your working email"
        />
        <Field
          className={styles.fieldTall}
          id={`${id}-form-message`}
          name="userMessage"
          label="Message*"
          placeholder="Your message"
          form="textarea"
          required
        />
        <Checkbox
          id={`${id}-form-distribution`}
          name="userAgreement"
          label="I agree to receive communications from Createx Construction Bureau."
          required
        />
      </div>
      <Button type="submit">send request</Button>
    </form>
  )
}

export default ContactsForm