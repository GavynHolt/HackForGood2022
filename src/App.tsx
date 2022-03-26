import './App.css';
import Welcome from './welcome/Welcome';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { loginApiKey } from './realmWebConfig';
import Results from './results/Results';

function App() {
  useEffect(() => {
    loginApiKey();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/results" element={<Results />}/>
      </Routes>
    </Router>
  );
}

export default App;
