import styles from "./styles.module.css";

export const Button = ({
  text,
  variant,
  className,
  disabled,
  onClick = () => {},
}) => {
  const variantStyles = () => {
    switch (variant) {
      case "primary":
        return styles.primary;
      case "secondary":
        return styles.secondary;
    }
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${variantStyles()} ${styles.button} ${className} ${
        disabled ? styles.disabled : ""
      }`}
    >
      {text}
    </button>
  );
};
