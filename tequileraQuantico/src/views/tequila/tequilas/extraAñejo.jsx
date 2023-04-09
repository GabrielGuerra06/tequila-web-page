import React, {useState} from 'react';
import madera from "../../../images/barril.jpg"
import citrico from '../../../images/paisaje.jpg';
import blanco from "../../../images/blanco.jpeg"
import {CSSTransition} from "react-transition-group"
import "./extraAñejo.css";

const ExtraAñejo = () => {
        const [showFront, setShowFront] = useState(true)
    return (
        <div className='extraAñejoContainer' id='linkToExtraAñejo'>
        <div style={{paddingTop:"100px"}}>
        {/* Card flip */}
        <div className='card-ExtraAñejo'>
            <CSSTransition in={showFront} timeout={400} classNames="flip">
        <div className='card' onMouseEnter={()=> setShowFront(!showFront)}>
            <div className='card-back'>Back</div>
            <div className='card-front'><img src={blanco} alt="tequila cristalino" className='imagenPrueba'  /></div>    
        </div>
        </CSSTransition>
        </div>
         {/* Card flip */}
        <div className='tituloExtraAñejo'>Extra Añejo</div>
        <div className='containerExtraAñejo'> 
        Tequila el Jimador Blanco es elaborado con 100% Agave Azul, jimado a mano y destilado doblemente con una claridad brillante. Hemos perfeccionado la habilidad de producir un tequila fresco.
        </div>
    
       <div className='caracteristicas4'>
        <div className='aroma4'>
        <img src={madera} alt="aroma" className='imagenAroma4'></img>
        <div className='aromaExtraAñejo'>
            <div className='tituloAroma4'>Aroma</div>
            <div className='textoAroma4'>Un aroma dulce, amaderado, <br></br>con tonos de gengibre y amaranto</div>
         </div>
       
        </div>
    
        <div className='sabor4'>
        <img src={citrico} alt="sabor" className='imagenSabor4'></img>
        <div className='saborExtraAñejo'>
            <div className='tituloAroma4'>Sabor</div>
            <div className='textoSabor4'>Un sabor sutil y noble cítrico con toques afrutados</div>
         </div>
    
        </div>
       </div>
       </div>
        </div>
      );
}
 
export default ExtraAñejo;