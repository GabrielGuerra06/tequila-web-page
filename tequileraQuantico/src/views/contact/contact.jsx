import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagen from "../../images/main.jpg"
import imagen2 from "../../images/paisaje.jpg"
import imagen3 from "../../images/barril.jpg"
import { Button} from 'react-bootstrap';
import {BsFacebook, BsTwitter, BsInstagram} from "react-icons/bs"
import Menu from '../../Components/menu';
import Footer from '../../Components/footer';

const Contact = () => {
const [hoverName, setHoverName]= useState(false)
const [hoverEmail, setHoverEmail]= useState(false)
const [hoverSubject, setHoverSubject]= useState(false)
const [hoverDescription, setHoverDescription]= useState(false)

const mouseOnName = () => {
setHoverName(true)
}
const mouseOutName = () => {
  setHoverName(false)
}

const messageName = () =>{
  return(
    <>
  <span className='prueba'></span>
  <span>  Nombre:</span>
  </>
  )
}

const mouseOnEmail = () => {
  setHoverEmail(true)
  }
  const mouseOutEmail = () => {
    setHoverEmail(false)
  }

  const messageEmail = () =>{
    return(
      <>
    <span className='prueba'></span>
    <span>  Email:</span>
    </>
    )
  }
  
  const mouseOnSubject = () => {
    setHoverSubject(true)
    }
    const mouseOutSubject = () => {
      setHoverSubject(false)
    }
    

    const messageSubject = () =>{
      return(
        <>
      <span className='prueba'></span>
      <span>  Tema:</span>
      </>
      )
    }

    const mouseOnDescription = () => {
      setHoverDescription(true)
      }

      const mouseOutDescription = () => {
        setHoverDescription(false)
      }

      const messageDescription = () =>{
        return(
          <>
        <span className='prueba'></span>
        <span>  Descripción:</span>
        </>
        )
      }



  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9aepurj', 'template_5bvbjsb', form.current, 'I4QHSM7OLUEhzEO2A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


    return ( 
        <body>
            <div className="size">
              <Container className='gridContact'>
                <Row >
        <Col><img src={imagen2} alt="imagen" className='contact1'/> </Col>
        <Col><img src={imagen} alt="imagen" className='contact2'/></Col>
      </Row>
      <Row>
        <Col><img src={imagen3} alt="imagen" className='contact3'/></Col>
        <Col><img src={imagen2} alt="imagen" className='contact4'/></Col>
      </Row>
      <Row>
        <Col><img src={imagen} alt="imagen" className='contact5'/></Col>
        <Col><img src={imagen3} alt="imagen" className='contact6'/></Col>
      </Row>
    </Container>
            </div>

            <div className='titulo'>Contáctanos</div>

            <div className='subtitulos'>Escríbenos</div>
            <form ref={form} onSubmit={sendEmail} className='email'>
              <div className='infoContacto' onMouseEnter={mouseOnName} onMouseLeave={mouseOutName}>
              {hoverName ? messageName()   : <span>Nombre:</span> } 
            <div><input className='name' type="text" name="user_name" required /></div>
            </div>
           
            <div className='infoContacto' onMouseOver={mouseOnEmail} onMouseOut={mouseOutEmail} >
            {hoverEmail ? messageEmail()   : <span>Email:</span> } 
            <div><input className='name' type="email"  name="user_email" required /></div>
            </div>

            <div className='infoContacto' onMouseOver={mouseOnSubject} onMouseOut={mouseOutSubject}>
            {hoverSubject ? messageSubject()   : <span>Tema:</span> } 
            <div><input className='name' type="text"  name="subject" required /></div>
            </div>

            <div className='infoContacto' onMouseOver={mouseOnDescription} onMouseOut={mouseOutDescription}>
            {hoverDescription ? messageDescription()   : <span>Descripción:</span> } 
            <div><textarea style={{  border: "#282c34" , borderRadius: "6px"}} name="message" cols="30" rows="10"></textarea></div>
            </div>
            <Button variant="danger" type="submit">Send </Button>
            </form>
           
            <div className='subtitulos'>Llámanos</div>
            <div className='info'>3314607754</div>
            <div style={{paddingBottom:"250px"}}>
            <div className='subtitulos'>Síguenos</div>
            <div className='info'> <Button variant="secondary" className='facebook'><BsFacebook/></Button>
    <span style={{padding:"10px"}}></span>
    <Button variant="secondary" className='twitter'><BsTwitter/></Button>
    <span style={{padding:"10px"}}></span>
    <Button variant="secondary" className='instagram'><BsInstagram/></Button></div>
    </div>
            <Menu/>

            <Footer/>
            </body>

     );
}
 
export default Contact;