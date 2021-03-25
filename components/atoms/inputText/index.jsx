export const InputText = ({ title, name, style, required, type, onChange }) => {
  return (
    <input
      onChange={onChange}
      type={type}
      className={`form-control ${style}`}
      placeholder={title}
      name={name}
      required={required}
    />
  );
};
