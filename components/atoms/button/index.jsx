export const Button = ({
  title,
  color,
  size,
  type,
  style,
  dataTarget,
  dataToggle,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      data-toggle={dataToggle}
      data-target={dataTarget}
      className={`btn ${style} btn-${color} btn-${size}`}
    >
      {title}
    </button>
  );
};
