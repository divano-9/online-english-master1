import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ScrollToAnchor from "./utils/ScrollToAnchor";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
        <ScrollToAnchor />
      </Router>
    </>
  );
}

export default App;
