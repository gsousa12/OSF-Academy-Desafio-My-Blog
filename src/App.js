import React from "react";
import "./app.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import useUser from "./hooks/useUser";

import Header from "./components/header/Header";

// import Home from "./Pages/Home";
// import CreatePost from "./Pages/CreatePost";
// import CreateComment from "./Pages/CreateComment";

function App() {
  const user = useUser();

  return (
    <>
      <Header name={user.name} />

      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/createcomment" element={<CreateComment />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
