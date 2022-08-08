import styles from "./Header.module.css";

function Header() {
  return (
    <div className = {styles.headerContainer}>
      <span className  = {styles.myBlogText}>My Blog</span>
      <span className = {styles.userText}>User</span>
    </div>
  );
}

export default Header;
