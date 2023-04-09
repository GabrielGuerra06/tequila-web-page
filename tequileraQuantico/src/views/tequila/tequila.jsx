import React, {useState} from 'react';
import Menu from '../../Components/menu';
import "./tequila.css";
import Footer from '../../Components/footer';
import TequilaNav from '../../Components/tequilaNav';
import Blanco from './tequilas/blanco';
import Reposado from './tequilas/reposado';
import Añejo from './tequilas/añejo';
import ExtraAñejo from './tequilas/extraAñejo';
const Tequilas = () => {
    return ( 
        <>
        <TequilaNav/>
        <Blanco/>
        <Reposado/>
        <Añejo/>
        <ExtraAñejo/>
            <Footer/>
            <Menu/>
     
        </>
        
     );
}
 
export default Tequilas;