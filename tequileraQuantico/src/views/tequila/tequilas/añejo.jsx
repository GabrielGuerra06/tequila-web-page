import React, {useState} from 'react';
import madera from "../../../images/barril.jpg"
import citrico from '../../../images/paisaje.jpg';
import blanco from "../../../images/blanco.jpeg"
import {CSSTransition} from "react-transition-group"
import "./añejo.css";

const Añejo = () => {
    const [showFront, setShowFront] = useState(true)
    return ( 
        <div className='añejoContainer' id="linkToAñejo">
            <div style={{paddingTop:"100px"}}>
     {/* Card flip */}
     <div className='card-añejo'>
            <CSSTransition in={showFront} timeout={400} classNames="flip">
        <div className='card' onMouseEnter={()=> setShowFront(!showFront)}>
            <div className='card-back'>Back</div>
            <div className='card-front'><img src={blanco} alt="tequila cristalino" className='imagenPrueba'  /></div>    
        </div>
        </CSSTransition>
        </div>
         {/* Card flip */}
    <div className='tituloAñejo'>AÑEJO</div>
    <div className='containerAñejo'> 
    Tequila el Jimador Blanco es elaborado con 100% Agave Azul, jimado a mano y destilado doblemente con una claridad brillante. Hemos perfeccionado la habilidad de producir un tequila fresco.
    </div>

   <div className='caracteristicas3'>
    <div className='aroma3'>
    <img src={madera} alt="aroma" className='imagenAroma3'></img>
    <div className='aromaAñejo'>
        <div className='tituloAroma3'>Aroma</div>
        <div className='textoAroma3'>Un aroma dulce, amaderado, <br></br>con tonos de gengibre y amaranto</div>
     </div>
   
    </div>

    <div className='sabor3'>
    <img src={citrico} alt="sabor" className='imagenSabor3'></img>
    <div className='saborAñejo'>
        <div className='tituloAroma3'>Sabor</div>
        <div className='textoSabor3'>Un sabor sutil y noble cítrico con toques afrutados</div>
     </div>

    </div>
   </div>
   </div>
    </div>
     );
}
 
export default Añejo;