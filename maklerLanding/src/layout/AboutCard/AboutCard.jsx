import styles from "./styles.module.css";

export const AboutCard = ({ img, title, description }) => {
  return (
    <article className={styles.card}>
      <div className={styles.img}>
        {img && <img src={img} alt="изображение описания" />}
      </div>
      <div className={styles.textContent}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};
