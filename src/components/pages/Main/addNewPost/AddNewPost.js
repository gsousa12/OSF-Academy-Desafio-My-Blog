import styles from "./AddNewPost.module.css";

function AddNewPost() {
  return (
    <div className = {styles.addNewPostContainer}>
        
        <span className= {styles.recentPostText}>Posts Recentes</span>

        <button className = {styles.addPostBtn} >Add New Post</button>
    
    </div>
  );
}

export default AddNewPost;