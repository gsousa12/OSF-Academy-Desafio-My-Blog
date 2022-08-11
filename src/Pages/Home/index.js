import "./index.css";

import { useNavigate } from "react-router-dom";
import usePosts from "../../hooks/usePosts";
import TextContainer from "../../components/textContainer/TextContainer";

function Home() {
  const posts = usePosts();
  const navigate = useNavigate();
  return (
    <>
      <div className="addNewPostContainer">
        <span className="recentPostText">Posts Recentes</span>

        <button
          onClick={() => {
            navigate("/create-post");
          }}
          className="addPostBtn"
        >
          Add New Post{" "}
        </button>

        {posts.map(({ id, title, teaser, author }) => (
          <TextContainer
            key={id}
            title={title}
            description={teaser}
            author={author}
          />
        ))}

        <p className="viewMoreText">View more</p>
      </div>
    </>
  );
}

export default Home;
