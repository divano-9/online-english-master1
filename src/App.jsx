import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ScrollToAnchor from "./utils/ScrollToAnchor";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import QA from "./pages/QA";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="qa" element={<QA />} />
        </Routes>
        <ScrollToAnchor />
      </Router>
    </>
  );
}

export default App;
