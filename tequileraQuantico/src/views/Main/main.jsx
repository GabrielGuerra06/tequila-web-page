import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../Components/navBar"
import Menu from '../../Components/menu';
import "./main.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagen from "../../images/main.jpg"
import imagen2 from "../../images/barril.jpg"
import imagen3 from "../../images/paisaje.jpg"
import Footer from '../../Components/footer';


function Main() {
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

    <div classname="body">
<NavBar/>
<div >
<Container className='grid' >
      <Row >
        <Col><img src={imagen} alt="imagen" className='grid1'/> </Col>
        <Col><img src={imagen2} alt="imagen" className='grid2'/></Col>
        <Col><img src={imagen3} alt="imagen" className='grid3'/></Col>
      </Row>
      <Row>
        <Col><img src={imagen} alt="imagen" className='grid4'/></Col>
        <Col><img src={imagen2} alt="imagen" className='grid5'/></Col>
        <Col><img src={imagen3} alt="imagen" className='grid6'/></Col>
      </Row>
      <Row>
        <Col><img src={imagen3} alt="imagen" className='grid7'/></Col>
        <Col><img src={imagen} alt="imagen" className='grid8'/></Col>
        <Col><img src={imagen2} alt="imagen" className='grid9'/></Col>
      </Row>
      <Row>
        <Col><img src={imagen2} alt="imagen" className='grid10'/></Col>
        <Col><img src={imagen3} alt="imagen" className='grid11'/></Col>
        <Col><img src={imagen} alt="imagen" className='grid12'/></Col>
      </Row>
    </Container>
    </div>
    {scrollPosition <= 2700 ? <Menu/> : <div style={{display:"none"}}><Menu/> </div>  }
    <Footer/>
</div>


  );
}

export default Main;
