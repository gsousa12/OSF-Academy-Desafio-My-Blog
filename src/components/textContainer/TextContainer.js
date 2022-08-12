import styles from "../textContainer/TextContainer.module.css";

function TextContainer({ title, description, author }) {
  return (
    <>
      <div className={styles.contentContainer}>
        <div className={styles.titleAndAuthor}>
          <p className={styles.title}>{title}</p>
          <p className={styles.author}>• by {author}</p>
        </div>
        <p>{description}</p>
        <hr />
      </div>
    </>
  );
}

export default TextContainer;
