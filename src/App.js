import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home'
import Projects from './routes/Projects'
import Resume from './routes/Resume'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
