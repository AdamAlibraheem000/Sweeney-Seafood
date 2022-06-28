import React from "react";
import Footer from "./components/pages/Footer"
import './App.css';
import favicon from './imgs/favicon.ico';
import { Helmet } from 'react-helmet';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavTabs from "./components/NavTabs";
import Home from './components/pages/Home'
import Menu from './components/pages/Menu'
import Bar from './components/pages/Bar'
import Update from './components/pages/Update'
import Features from './components/pages/Features'
import About from './components/pages/About'




const App = () =>
 <Router>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet" />
      <link rel="icon" type="image/x-icon" href={favicon} />
    </Helmet>
    <NavTabs></NavTabs>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="features" element={<Features/>}/>
      <Route path="menu" element={<Menu/>}/>
      <Route path="bar" element={<Bar/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="update" element={<Update/>}/>
    </Routes>
    <Footer></Footer>
    </Router>
    
  

export default App;
