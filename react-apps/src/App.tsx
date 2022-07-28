import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const Equation = React.lazy(() => import('./make10/make10'))

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Equation/>} />
          </Routes>
      </Router>
  );
}

export default App;
