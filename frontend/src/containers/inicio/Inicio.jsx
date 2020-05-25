import React from 'react';
import gimnasio from '../../assets/imgs/gimnasio.jpg';
import './Inicio.scss';

const Home = () => {
    return ( 
        <div className="homeContainer">
            <img src={gimnasio} alt="imagen" className="fondo"/> 
        </div>
        // <div  styles={{ backgroundImage:`url(${gimnasio})` }}>
        // </div>

         

     );
}
 
export default Home;