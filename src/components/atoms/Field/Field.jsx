import PropTypes from 'prop-types'
import './Field.scss'
import clsx from "clsx";

const Field = (props) => {
  const {
    className,
    id,
    label,
    type = 'text',
    placeholder,
    form,
    ...rest
  } = props

  return (
    <div className={clsx('field', className)}>
      <label
        htmlFor={id}
        className="field__label"
      >
        {label}
      </label>
      {form === 'textarea' ? (
        <textarea
          className="field__control"
          id={id}
          placeholder={placeholder}
          {...rest}
        ></textarea>
      ) : (

        <input
          type={type}
          className="field__control"
          id={id}
          placeholder={placeholder}
          {...rest}
        />
      )}
    </div>
  )
}

Field.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  form: PropTypes.oneOf(['input', 'textarea']),
}

export default Field