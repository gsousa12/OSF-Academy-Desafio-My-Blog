import axios from "axios";
import { useEffect, useState } from "react";
import endPoints from "../config/endPoints";

const useUser = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(endPoints.obterUsuario, { params: { email: "wgsousa12@gmail.com" } })
      .then((result) => setUser(result.data));
  }, []);

  return user;
};

export default useUser;
