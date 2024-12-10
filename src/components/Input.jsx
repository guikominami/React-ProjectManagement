import PropTypes from "prop-types";
import "./Input.css";

export default function Input({ label, textarea, ...props }) {
  Input.propTypes = {
    label: PropTypes.any.isRequired,
    textarea: PropTypes.any.isRequired,
  };

  return (
    <p>
      <label>{label}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}
