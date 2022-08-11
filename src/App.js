import React from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useUser from "./hooks/useUser";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import CreateComment from "./Pages/CreateComment";

function App() {
  const user = useUser();

  return (
    <>
      <BrowserRouter>
        <Header name={user.name} /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/create-comment" element={<CreateComment />} />
          {/* <Route path="/post/:id" element={<Post />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
