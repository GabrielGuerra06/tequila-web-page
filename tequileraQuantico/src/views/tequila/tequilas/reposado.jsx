import React,  {useState} from 'react';
import madera from "../../../images/barril.jpg"
import citrico from '../../../images/paisaje.jpg';
import blanco from "../../../images/blanco.jpeg"
import "./reposado.css";
import {CSSTransition} from "react-transition-group"

const Reposado = () => {
    const [showFront, setShowFront] = useState(true)
    return (
        <div className='reposadoContainer' id='linkToReposado'>
            <div style={{paddingTop:"100px"}}></div>
     {/* Card flip */}
     <div className='card-reposado'>
            <CSSTransition in={showFront} timeout={400} classNames="flip">
        <div className='card' onMouseEnter={()=> setShowFront(!showFront)}>
            <div className='card-back'>Back</div>
            <div className='card-front'><img src={blanco} alt="tequila cristalino" className='imagenPrueba'  /></div>    
        </div>
        </CSSTransition>
        </div>
         {/* Card flip */}
    <div className='tituloReposado'>REPOSADO</div>
    <div className='containerReposado'> 
    Tequila el Jimador Blanco es elaborado con 100% Agave Azul, jimado a mano y destilado doblemente con una claridad brillante. Hemos perfeccionado la habilidad de producir un tequila fresco.
    </div>

   <div className='caracteristicas2'>
    <div className='aroma2'>
    <img src={madera} alt="aroma" className='imagenAroma2'></img>
    <div className='aromaReposado'>
        <div className='tituloAroma2'>Aroma</div>
        <div className='textoAroma2'>Un aroma dulce, amaderado, <br></br>con tonos de gengibre y amaranto</div>
     </div>
   
    </div>

    <div className='sabor2'>
    <img src={citrico} alt="aroma" className='imagenSabor2'></img>
    <div className='saborReposado'>
        <div className='tituloAroma2'>Sabor</div>
        <div className='textoSabor2'>Un sabor sutil y noble cítrico con toques afrutados</div>
     </div>

    </div>
   </div>
    </div>
      );
}
 
export default Reposado;