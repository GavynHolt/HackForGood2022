import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loginApiKey } from './realmWebConfig';
import Parent from './components/Parent';
import Splash from './components/Splash';

function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    loginApiKey();

    setTimeout(() => {
      setSplash(false);
    }, 700);
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
          <Route
            path="*"
            element={<Navigate to="/home" />}
          />
        </Routes>
      </Router>
      <Splash visible={splash} />
    </>
  );
}

export default App;
