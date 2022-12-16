import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route, 
  Navigate
} from 'react-router-dom';
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from '../src/components/Pre';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load}/>
      <div className='App' id={ load ? 'no-scoll' : 'scroll' }>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} /> 
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
          