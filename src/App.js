import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home'
import Projects from './routes/Projects'
import Resume from './routes/Resume'
import Contact from './routes/Contact'
import About from './routes/About'

function App() {
  ReactDOM.render (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

export default App;
