import "./app.css";
import Header from "./components/pages/Main/header/Header";
import AddNewPost from "./components/pages/Main/addNewPost/AddNewPost";
import { useState } from "react"

function App() {

  const [usuario, setUsuario] = useState('user')

  return (
    <>
      {/* HEADER */}
      <Header />
      <AddNewPost/>

      
    </>
  );
}

export default App;
