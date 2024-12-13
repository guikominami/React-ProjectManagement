/* eslint-disable react/prop-types */
import "./Input.css";
import { forwardRef } from "react";

export default forwardRef(function Input(
  { label, textarea, ...props },
  ref
) {
  return (
    <p>
      <label>{label}</label>
      {textarea ? (
        <textarea ref={ref} {...props} />
      ) : (
        <input ref={ref} {...props} />
      )}
    </p>
  );
});
