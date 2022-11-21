import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Greeting from './pages/Greeting';

const App = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <Link to="/greeting">Go to greeting page</Link>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </>
  );
};

export default App;
