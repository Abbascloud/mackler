import { Star } from "../../assets/icons/StarIcon";
import styles from "./styles.module.css";

export const Comment = ({ img, author, text, rate }) => {
  return (
    <article className={styles.comment}>
      <div className={styles.avatarWrapper}>
        {img && (
          <img
            style={{
              objectFit: "contain",
              height: " 100%",
              width: "100%",
              borderRadius: "inherit",
            }}
            src={img}
            alt="аватар"
          />
        )}
      </div>
      <div>
        <h4>{author}</h4>
        <p>{text}</p>
        {rate.map(({ id, disabled }) => (
          <Star
            className={`${styles.star} ${disabled ? styles.disableStar : ""}`}
            key={id}
          />
        ))}
      </div>
    </article>
  );
};
