import './App.css';
import Welcome from './welcome/Welcome';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loginApiKey } from './realmWebConfig';
import Results from './results/Results';
import Tabs from './components/Tabs';
import Categories from './Categories/Categories';
import Parent from './components/Parent';

function App() {
  useEffect(() => {
    loginApiKey();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/:pathId" element={<Parent />} />
          <Route path="/:pathId/:slug" element={<Parent />} />
          {/* <Route path="/" element={<Welcome />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/results" element={<Results />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
