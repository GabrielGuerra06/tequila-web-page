import React, {useEffect, useState} from 'react';
import Menu from '../../Components/menu';
import "./aboutUs.css";
import Carousel from 'react-bootstrap/Carousel';
import imagen from "../../images/main.jpg"
import imagen2 from "../../images/barril.jpg";
import imagen3 from "../../images/paisaje.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../Components/footer';


const AboutUs = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (  
        <div>
           <div className='titulo-contacto'>Somos TequileraQuantico una tequilera dedicada con el compromiso y al mejor servicio </div> 
          <div className='carrusel'>
           <Carousel fade>
      <Carousel.Item>
        <img
          className="imagenes"
          src={imagen}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagenes"
          src={imagen2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagenes"
          src={imagen3}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
    </div>
    <div className='titulo2'>Nuestros sabores hablan<br></br> por nosotros</div>
    <div className="grid-content">
<Container className='grid'>
    <Row >
        <Col className='imagen-grid'><img src={imagen} alt="imagen" className='imagen-grid'/> </Col>
        <Col className='imagen-grid'><img src={imagen2} alt="imagen" className='imagen-grid'/></Col>
        <Col className='imagen-grid'><img src={imagen3} alt="imagen" className='imagen-grid'/></Col>
        <div className='texto-front'>Al combinar el sabor, las experiencias y la calidad,<br></br> creemos en poder crear el mejor Tequila</div>
      </Row>
      </Container>
      </div>
      <div className="enfoque">NUESTRO ENFOQUE</div>
      <div className='mision'>MISIÓN</div>
      <div className='misionInfo'>Poder entregar los productos de mejor calidad para todos los compradores </div>
      <div className='vision'>VISIÓN</div>
      <div className='misionInfo'>Poder entregar los productos de mejor calidad para todos los compradores </div>
      <div className='vision'>VALORES</div>
      <div className='misionInfo'>Poder entregar los productos de mejor calidad para todos los compradores </div>
      
      <span  className='fondoColor'>
      <div className="nosotros">NUESTRO PROCESO</div>
      <div className='misionColor'>MISIÓN</div>
      </span>





     {scrollPosition <= 2800 ? <Menu/> : <div style={{display:"none"}}><Menu/> </div>  }
            <Footer/>
        </div>
    );
}
 
export default AboutUs;