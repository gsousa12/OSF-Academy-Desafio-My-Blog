import axios from "axios";
import { useEffect, useState } from "react";
import endPoints from "../config/endPoints";

const useDetails = () => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    axios
      .get(endPoints.obterDetalhesPost(id),)
      .then((result) => setDetails(result.data));
  }, []);

  return details;
};

export default useDetails;
