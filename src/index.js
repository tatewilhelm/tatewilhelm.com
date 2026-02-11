import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Projects from './pages/Projects';
import About from './pages/About'
import { AnimatePresence } from 'framer-motion';
import Gallery from './pages/Gallery';

const reload = () => window.location.reload();


export default function App() {
  return (
    <html className='html'>
    <BrowserRouter>
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
    </html>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
