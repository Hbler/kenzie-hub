import { InputContainer } from "./style";

export const Input = ({ children, label, helperText, ...rest }) => {
  return (
    <InputContainer>
      <label>{label}</label>
      <div>
        <input {...rest} />
        {children}
      </div>
      {helperText && <small>{helperText}</small>}
    </InputContainer>
  );
};

export const Select = ({ children, label, helperText, ...rest }) => {
  return (
    <InputContainer>
      <label>{label}</label>
      <div>
        <select {...rest}>{children}</select>
      </div>
      {helperText && <small>{helperText}</small>}
    </InputContainer>
  );
};
