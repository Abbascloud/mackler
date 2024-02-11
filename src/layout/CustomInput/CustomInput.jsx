import styles from "./styles.module.css";
export const CustomInput = ({
  errorText,
  helperText,
  className,
  isErrorTextVisible = true,
  ...props
}) => {
  const errorIsVisible = Boolean(errorText) && isErrorTextVisible;
  return (
    <div className={`${className} ${styles.inputWrapper}`}>
      <p className={styles.helper}>{helperText}</p>
      <input {...props} />
      {errorIsVisible && <p className={styles.errorText}>{errorText}</p>}
    </div>
  );
};
