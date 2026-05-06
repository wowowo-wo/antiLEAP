import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';


import Splash from './components/Splash';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Voices from './pages/Voices';
import Report from './pages/Report';
import Contact from './pages/Contact';
import Documents from './pages/Documents';


function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  return (
    <Router>
      <AnimatePresence>
        {isSplashVisible && (
          <Splash onComplete={() => setIsSplashVisible(false)} />
        )}
      </AnimatePresence>

      {!isSplashVisible && (
        <div className="bg-black text-foreground min-h-screen selection:bg-accent selection:text-white">
          <Navbar />
          <main className="pt-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail" element={<Detail />} />
              <Route path="/voices" element={<Voices />} />
              <Route path="/report" element={<Report />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/documents" element={<Documents />} />
            </Routes>
          </main>
          
          <footer className="p-12 border-t-2 border-gray-900 text-center text-gray-600 font-black tracking-tighter">
            © 2026 東北大学の大学院生支援制度改悪に反対する会
          </footer>
        </div>
      )}
    </Router>
  );
}

export default App;