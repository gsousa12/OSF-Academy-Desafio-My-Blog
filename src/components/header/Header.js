import styles from "./Header.module.css";

function Header({name}) {
  return (
    <div className = {styles.headerContainer}>
      <span className  = {styles.myBlogText}>My Blog</span>
      <span className = {styles.userText}>{name}</span>
    </div>
  );
}

export default Header;
