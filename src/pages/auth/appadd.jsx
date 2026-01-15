import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Login from './pages/auth/login.jsx';
import Signup from './pages/auth/signup.jsx';

function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </Router>
    
   
  </>
  );
}

export default App;