import React, {useState} from 'react';
import {BiHomeAlt, BiHelpCircle} from "react-icons/bi"
import {BsPlus, BsInfoCircle, BsBook} from "react-icons/bs"
import{GrContact} from "react-icons/gr"
import {GiWineGlass} from "react-icons/gi"
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./menu.css"
import Tooltip from './tooltip';

const Menu = () => {
  const [isActive, setIsActive] = useState("false");


    const changeStyle = () => {
      const menu = document.querySelector('.menu')
        setIsActive(!isActive)
        menu.classList.toggle('active')
    }

    return (
        <div className="try">    
        <div className="menu">
        <Button  className={isActive ?  "toggle" : "toggleTrue" }  onClick={()=>changeStyle()}><BsPlus/></Button>
      
        <li style={{"--i" : 0}}>
        <Tooltip content="Home" direction="bottom">
        <Link to="/"
        onClick={() => {
          window.scroll(0, 0);
        }}>
        <a ><BiHomeAlt style={{color:"black"}}/></a>    
        </Link>
        </Tooltip>
      
        </li> 
        
        
        <li style={{"--i" : 1}}>
        <Tooltip content="Contact Us" direction="top">
        <Link to="/contact" 
        onClick={() => {
    window.scroll(0, 0);
  }}
  >
          <a href=""><BiHelpCircle style={{color:"black"}}/></a>
          </Link>
          </Tooltip>
          </li>
         

          <li style={{"--i" : 2}}>
            <Link to="/aboutUs"
            onClick={() => {
              window.scroll(0, 0);
            }}
            >
            <Tooltip content="About Us" direction="top">
            <a href=""><BsInfoCircle style={{color:"black"}}/></a>
            </Tooltip>
            </Link>
            </li>
    
            <li style={{"--i" : 3}}>
              <Link to="/tequilas"
              onClick={() => {
                window.scroll(0, 0);
              }}
              >
              <Tooltip content="Tequila" direction="top">
              <a href=""><GiWineGlass style={{color:"black"}}/></a>
              </Tooltip>
              </Link>
              </li>
    
              <li style={{"--i" : 4}}>
                <Link to="/history" 
                onClick={() => {
                  window.scroll(0, 0);
                }}
                >
                <Tooltip content="History" >
                <a href=""><BsBook style={{color:"black"}}/></a>
                </Tooltip>
                </Link>
                </li>
      </div>
   
      </div>
  
      );
}
 
export default Menu;