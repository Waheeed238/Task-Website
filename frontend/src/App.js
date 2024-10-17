import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import GetTask from './pages/GetTask';
import AddTask from './pages/AddTask';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <div className="App">
        <nav className="navbar">
          <ul className="nav-links">
              <li><Link to="/" className='links'>GetTask</Link></li>
              <li><Link to="/add" className='links'>AddTask</Link></li>
              <li><Link to="/authentication/register" className='links'>Registration</Link></li>
              <li><Link to="/authentication/login" className='links'>Login</Link></li>
          </ul>
      </nav>
      </div>
        
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/add' element={<AddTask />} />
            <Route path='/tasks' element={<GetTask />} />
            <Route path='/authentication/register' element={<RegisterPage />} />
            <Route path='/authentication/login' element={<LoginPage />} />
          </Routes>
    </>
  );
}

export default App;
