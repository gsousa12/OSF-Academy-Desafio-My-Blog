import axios from "axios";
import { useEffect, useState } from "react";
import endPoints from "../config/endPoints";

const useDetais = (idPost) => {
  const [details, setdetails] = useState([]);

  useEffect(() => {
    axios
      .get(endPoints.obterDetalhesPost(idPost))
      .then((result) => setdetails(result.data));
  }, []);

  return details;
};

export default useDetais;
