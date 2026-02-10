import PropTypes from 'prop-types';
import './Checkbox.scss';

const Checkbox = (props) => {
  const {
    className = '',
    id,
    label,
    ...rest // позволяем прокидывать checked, onChange и т.д.
  } = props;

  return (
    <div className={`checkbox ${className}`}>
      <input
        type="checkbox"
        className="checkbox__control"
        id={id}
        {...rest}
      />
      <label
        htmlFor={id}
        className="checkbox__label"
      >
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Checkbox;