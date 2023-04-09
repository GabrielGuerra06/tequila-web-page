import React, {useState} from 'react';
import madera from "../../../images/barril.jpg"
import citrico from '../../../images/paisaje.jpg';
import blanco from "../../../images/blanco.jpeg";
import {CSSTransition} from "react-transition-group"
import "./blanco.css";

const Blanco = () => {
    const [showFront, setShowFront] = useState(true)
    return (
    <div className='blancoContainer' id='linkToBlanco'>
        {/* Card flip */}
       <div className='flippable-card-container'>
            <CSSTransition in={showFront} timeout={400} classNames="flip">
        <div className='card' onMouseEnter={()=> setShowFront(!showFront)}>
            <div className='card-back'>Back</div>
            <div className='card-front'><img src={blanco} alt="tequila cristalino" className='imagenPrueba'  /></div>    
        </div>
        </CSSTransition>
        </div>
         {/* Card flip */}
    <div className='tituloBlanco'>BLANCO</div>
    <div className='containerBlanco'> 
    Tequila el Jimador Blanco es elaborado con 100% Agave Azul, jimado a mano y destilado doblemente con una claridad brillante. Hemos perfeccionado la habilidad de producir un tequila fresco.
    </div>

   <div className='caracteristicas'>
    <div className='aroma'>
    <img src={madera} alt="aroma" className='imagenAroma'></img>
    <div className='aromaBlanco'>
        <div className='tituloAroma'>Aroma</div>
        <div className='textoAroma'>Un aroma dulce, amaderado, <br></br>con tonos de gengibre y amaranto</div>
     </div>
   
    </div>

    <div className='sabor'>
    <img src={citrico} alt="aroma" className='imagenSabor'></img>
    <div className='saborBlanco'>
        <div className='tituloAroma'>Sabor</div>
        <div className='textoSabor'>Un sabor sutil y noble cítrico con toques afrutados</div>
     </div>

    </div>
   </div>
    </div>
);
}
 
export default Blanco;

