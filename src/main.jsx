import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Profil from './pages/Profil';
import './styles/main.css'
import { Provider } from 'react-redux';
import { store } from './store';

import Header from './components/Header';



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes path='/'>
            <Route index element={<Home />}/>
            <Route path='login' element={<Login />}/>
            <Route path='profil' element={<Profil />}/>
          </Routes>
        </Router>
      </Provider>
  </StrictMode>,
)
