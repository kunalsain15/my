import React from 'react'
import About from './components/aboutus/About'
import ContactUs from './components/contactUs/ContactUs'
import Faq from './components/faq/Faq'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar'
import CivilInteriour from './components/civilAndinterior/CivilInteriour';
import Electrical from './components/electrical/Electrical';
import Pulmbing from './components/plumbing/Pulmbing';
import Home from './components/home/Home';
import Footer from './Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/civilinteriour" element={<CivilInteriour />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/plumbing" element={<Pulmbing />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

