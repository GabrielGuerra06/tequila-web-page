import React from 'react';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import image from "../images/main.jpg"
import "./navBar.css"
import {BsFacebook, BsTwitter, BsInstagram} from "react-icons/bs"
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
<div class="container">
  <div className='navbar'>
  <img src={image} alt="Snow" className='image' />
  <div className="top-left">TequileraQuantico</div>
  <div className='top-right'>
    <Button variant="secondary" className='facebook'><BsFacebook size={"20px"}/></Button>
    <span style={{padding:"10px"}}></span>
    <Button variant="secondary" className='twitter'><BsTwitter size={"20px"}/></Button>
    <span style={{padding:"10px"}}></span>
    <Button variant="secondary" className='instagram'><BsInstagram size={"20px"}/></Button>
    </div>
  <div className='centered'>Dedicados a crear el mejor tequila</div>
  <div className='centered2'>Comunícate con nosotros para conseguir el tequila que siempre has soñado</div>
  <Link to="/contact"
  onClick={() => {
    window.scroll(0, 0);
  }}
  >
  <Button variant="success" className="centerButton">Ponte en contacto</Button>
  </Link>
  </div>
</div>
    </>
    )
}
 
export default NavBar;
