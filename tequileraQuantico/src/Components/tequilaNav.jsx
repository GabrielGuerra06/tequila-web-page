import React, {useState} from 'react';
import "./tequilaNav.css";
import  Container  from 'react-bootstrap/Container';
import  Nav  from 'react-bootstrap/Nav';
import  Navbar  from 'react-bootstrap/Navbar';

const TequilaNav = () => {
  const [blancoActive, setBlancoActive] = useState(false);

  const handleClick = () => {
    console.log("funciona")
    setBlancoActive(!blancoActive)
    console.log(blancoActive)
  }
    return(
        <>
      <Navbar className='navbar2'>
        <Container> 
          <Nav className='navText'>
            <ul>
            <li><a href="#linkToBlanco" className="blanco">BLANCO </a></li>
            <li><a href="#linkToReposado" className='reposado'>REPOSADO </a></li>
            <li><a href="#linkToAñejo" className='añejo'>AÑEJO </a></li>
            <li><a href="#linkToExtraAñejo" className='extraAñejo'>EXTRA AÑEJO </a></li>
            </ul>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
 
export default TequilaNav;