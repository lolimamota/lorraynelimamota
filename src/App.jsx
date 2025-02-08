import React from 'react';
import './global.scss';

//ANOTHER IMPORTS
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//IMPORT ROUTES
import Home from './components/rotas/home.jsx';
import Projects from './components/rotas/projects.jsx';
import Contacts from './components/rotas/contacts.jsx';


//IMPORT STYLES
import S from './components/styles/styleApp.module.scss';

function App() {
  return (
    <BrowserRouter>
    <section className={S.sectionContainerApp}>
    <nav className={S.navApp}>
        <ul className={S.ulApp}>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/projects'>
              Projects
            </Link>
          </li>
          <li>
            <Link to='/contacts'>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </section>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </ BrowserRouter>
  )
}

export default App