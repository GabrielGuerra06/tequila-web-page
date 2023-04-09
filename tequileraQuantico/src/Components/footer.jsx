import React from "react"
import {BsInstagram, BsFacebook, BsTwitter, BsPinterest} from 'react-icons/bs'
import { Link } from "react-router-dom"
import imagen from "../images/main.jpg"
import "./footer.css"
import { Button} from 'react-bootstrap';

const Footer =()=> {
    return(
        <footer className="page-footer font-small blue pt-4">
        <div className="socials">
            <div className="instagram"><Button variant="warning" className="botonIg" href=""> <BsInstagram size={"30px"} color="aliceblue"/> </Button></div>
            <div className="facebook" href="#!"> <Button variant="primary" className="botonIg" href=""> <BsFacebook size={"30px"}/> </Button></div>
            <div className="twitter" href="#!"> <Button variant="info" className="botonIg" href=""> <BsTwitter size={"30px"} color="aliceblue"/> </Button></div>
            <div className="pinterest" href="#!"> <Button variant="danger" className="botonIg" href="" > <BsPinterest size={"30px"}/> </Button></div>
        </div>

        <div className="avisos">
           <div style={{paddingBottom:"15px"}} href="#!"> <Button variant="link" className="botonesPolíticas">TÉRMINOS DE USO</Button></div>
           <div style={{paddingBottom:"15px"}}> <Button variant="link" className="botonesPolíticas"> POLÍTICA DE PRIVACIDAD</Button></div>
           <div><Button variant="link" className="botonesPolíticas" >POLÍTICA DE COOKIES</Button></div>
        </div>

        <div className="permiso">
        EVITE EL EXCESO | PERMISO DE PUBLICIDAD No. " " 
        </div>
       
        <div className="brand">
            ESTE CONTENIDO ES SÓLO PARA MAYORES DE EDAD Y NO DEBE COMPARTIRSE CON MENORES. TEQUILERA QUANTICO® TEQUILA. 35% ALC. VOL. MARCA REGISTRADA POR MAESTRO TEQUILERO, S.A. DE C.V. ©2022 PROXIMO SPIRITS, JERSEY CITY, NJ.
        </div>
    
    </footer>
      )
}

export default Footer;