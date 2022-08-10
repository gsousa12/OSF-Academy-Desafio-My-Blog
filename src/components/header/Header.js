import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header({name}) {
  return (
    <div className = {styles.headerContainer}>
      <span className  = {styles.myBlogText}><Link to="/">My Blog</Link></span>
      <span className = {styles.userText}>{name}</span>
    </div>
  );
}

export default Header;
