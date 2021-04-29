const InputItem = ({id, name, type, text, label, className, onBlur, onChange, required, value}) => {
  return (
  <div>
    <label htmlFor={id}>{label}</label>

    <input
    className={className}
    name={name}
    text={text}
    value={value}
    id={id}
    type={type}
    onBlur={onBlur}
    onChange={onChange}
    required={required}
    />
  </div>
  )
};

export default InputItem;