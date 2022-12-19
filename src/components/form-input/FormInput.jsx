import {Group,FormInputStyle,FormInputLabel}from './form-input.styles';

export const FormInput = ({ label, ...restInputProps }) => {
  return (
    <Group>
     <FormInputStyle id={label} {...restInputProps} />
      {label && (
        <FormInputLabel
        shrink={restInputProps.value.length}
        htmlFor={label}
        >
          {label}
        </FormInputLabel>
      )}
     
    </Group>
  );
};
