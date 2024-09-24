import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Signup, Login } from './components'


function App() {
  return (
    <div className="App">
      <Router>

        
        <Routes>
          {/* <Route path='/' element={<Signup />} /> */}
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Login />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
