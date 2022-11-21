import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Greetings from './pages/Greetings';

const App = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <Link to="/greeting">Go to greeting page</Link>
      <Routes>
        <Route path="/greeting" element={<Greetings />} />
      </Routes>
    </>
  );
};

export default App;
