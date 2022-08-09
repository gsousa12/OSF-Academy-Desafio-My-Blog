import axios from "axios";
import { useEffect, useState } from "react";

function ObterUser() {

    const [name,setName] = useState=([])

  useEffect(() => {
    const obterUserName = async () => {
      const username = await axios.get(
        "https://academy-julho-backend.vercel.app/api/users?email=felipe.barreto@osf.digital"
      )
      setName(name);
    };
    obterUserName();
  }, []);

  return (
    <>
      
    </>
  );
}

export default ObterUser;
