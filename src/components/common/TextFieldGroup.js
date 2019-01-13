import React from "react";
// import PropTypes from "prop-types";
import "../../App.css";
const TextFieldGroup = ({
  name,
  placeholder,
  value,
  type,
  onChange,
  classname,
  hideCheckCircle
}) => {
  return (
    <div className="form-group">
      <div className="input-group">
        <input
          type={type}
          className={classname}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
        {hideCheckCircle ? null : (
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="far fa-check-circle" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

// TextFieldGroup.propTypes = {
//   name: PropTypes.string.isRequired,
//   placeholder: PropTypes.string,
//   value: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired
// };

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
