import './App.css';
import Welcome from './welcome/Welcome';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { db, collection, getDocs } from './firebaseConfig';
import { useEffect } from 'react';

function App() {
  // useEffect(() => {
  //   const resources = collection(db, 'resources');
  //   const docs = getDocs(resources);
  //   docs.then((data) => {
  //     const f = data.docs.map(doc => doc.data());
  //     console.log(f);
  //   });
  // });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
