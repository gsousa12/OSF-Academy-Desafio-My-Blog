import axios from "axios";
import { useEffect, useState } from "react";
import endpoints from "../config/endpoints";

const useDetais = (idPost) => {
  const [details, setdetails] = useState([]);

  useEffect(() => {
    axios
      .get(endpoints.obterDetalhesPost(idPost))
      .then((result) => setdetails(result.data));
  }, []);

  return details;
};

export default useDetais;
