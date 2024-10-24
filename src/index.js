import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Projects from './pages/Projects';
import About from './pages/About'
import { AnimatePresence } from 'framer-motion';

export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
