import styles from "./styles.module.css";

export const Card = ({ img, title, description, numPosition }) => {
  const positionIndex =
    numPosition > 9 ? String(numPosition) : "0" + numPosition;
  return (
    <article
      className={`${styles.card} ${numPosition ? styles.cardWithNum : ""}`}
    >
      <div style={{ backgroundImage: img }}>
        <img src={img} alt="изображение услуги" />
        {numPosition && <p className={styles.cardIndex}>{positionIndex}</p>}
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  );
};
