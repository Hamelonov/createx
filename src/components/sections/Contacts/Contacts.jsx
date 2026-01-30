import {useId} from "react";
import Field from "@/components/ui/Field";
import Checkbox from "@/components/ui/Checkbox";
import Button from "@/components/ui/Button";
import './Contacts.scss'

const Contacts = (props) => {
  const {
    className = ''
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
    <div className={`contacts ${className}`}>
      <div className="contacts__body container">
        <form
          className="contacts__form"
          onSubmit={handleSubmit}
        >
          <h2 className="contacts__title h3">A quick way to discuss details</h2>
          <div className="contacts__form-controls">
            <Field
              className="contacts__field"
              id={`${id}-form-name`}
              name="userName"
              label="Name*"
              placeholder="Your name"
              required
            />
            <Field
              className="contacts__field"
              id={`${id}-form-phone`}
              name="userPhone"
              label="Phone*"
              placeholder="Your phone number"
              required
            />
            <Field
              className="contacts__field"
              id={`${id}-form-email`}
              name="userEmail"
              label="Email"
              placeholder="Your working email"
            />
            <Field
              className="contacts__field contacts__field--tall"
              id={`${id}-form-message`}
              name="userMessage"
              label="Message*"
              placeholder="Your message"
              form="textarea"
              required
            />
            <div className="contacts__form-distribution">
              <Checkbox
                id={`${id}-form-distribution`}
                name="userAgreement"
                label="I agree to receive communications from Createx Construction Bureau."
                required
              />
            </div>
          </div>
          <Button type="submit">send request</Button>
        </form>
      </div>
    </div>
  )
}

export default Contacts