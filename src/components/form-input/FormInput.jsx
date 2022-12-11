import './form-input.styles.scss';

export const FormInput = ({ label, ...restInputProps }) => {
  return (
    <div className="group-input-form">
     <input className="form-input" id={label} {...restInputProps} />
      {label && (
        <label
          className={`${
            restInputProps.value.length ? "shrink" : ""
          }form-input-label`}
          htmlFor={label}
        >
          {label}
        </label>
      )}
     
    </div>
  );
};
