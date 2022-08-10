import axios from "axios";
import { useEffect, useState } from "react";
import endPoints from "../config/endPoints";

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(endPoints.obterPosts).then((result) => setPosts(result.data));
  }, []);

  return posts;
};

export default usePosts;