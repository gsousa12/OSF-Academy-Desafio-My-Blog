import "./index.css";

import { Link } from "react-router-dom";
import usePosts from "../../hooks/usePosts";
import TextContainer from "../../components/textContainer/TextContainer";


function Home() {
  const posts = usePosts();
  return (
    <>
      <div className="addNewPostContainer">
        <span className="recentPostText">Posts Recentes</span>

        <button className="addPostBtn">
          <Link to="/createpost">Add New Post</Link>{" "}
        </button>
        
        {posts.map(({id,title,teaser,author}) => <TextContainer key={id} title = {title} description = {teaser} author = {author}/>)}
      </div>
    </>
  );
}

export default Home;
