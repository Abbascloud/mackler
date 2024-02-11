import logo from "../../assets/icons/shado-logo-for-black.png";
import styles from "./styles.module.css";
export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" />
      <p>
        Истина.
        <br /> Твой духовный наставник.
      </p>
    </div>
  );
};
