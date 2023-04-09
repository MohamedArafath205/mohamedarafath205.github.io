import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home'
import Projects from './routes/Projects'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
