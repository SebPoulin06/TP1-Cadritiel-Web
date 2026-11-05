import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Acceuil from './pages/Acceuil'
import Catalogue from './pages/Catalogue'
import Film from './pages/Film'
import NonTrouve from './pages/NonTrouve'
import Layout from './components/Layout'
import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Acceuil />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/film/:id" element={<Film />} />
          <Route path="*" element={<NonTrouve />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
