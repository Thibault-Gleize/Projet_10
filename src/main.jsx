import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Account from './pages/Account';
import './styles/main.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route index path='/' element={<Home />}/>
        <Route path='/sign-in' element={<Login />}/>
        <Route path='account' element={<Account />}/>
      </Routes>
    </Router>
  </StrictMode>,
)
