import "./index.css";

import { Link } from "react-router-dom";

function Home() {
  return (
    <>

      <div className={"addNewPostContainer"}>
        <span className={"recentPostText"}>Posts Recentes</span>

        <button className={"addPostBtn"}><Link to={"/createpost"}>Add New Post</Link> </button>
      </div>
    </>
  );
}

export default Home;
