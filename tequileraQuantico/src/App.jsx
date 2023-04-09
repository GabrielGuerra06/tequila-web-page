import React from 'react';
import logo from './logo.svg';
import './App.css';
import mainImage from './images/main.jpg'
import Container from 'react-bootstrap/Container';
import {Navbar, Nav} from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from './views/Main/main';
import Contact from './views/contact/contact';
import AboutUs from './views/about us/aboutUs';
import History from './views/history/history';
import Tequilas from './views/tequila/tequila';

function App() {
  return (
<Router>
  <div className="body">
<Routes>
<Route path='/' exact element={<Main/>} />
<Route path="/contact" exact element={<Contact/>}/>
<Route path="/aboutUs" exact element={<AboutUs/>}/>
<Route path="/history" exact element={<History/>}/>
<Route path="/tequilas" exact element={<Tequilas/>}/>
</Routes>
  </div>
</Router>
  );
}

export default App;
