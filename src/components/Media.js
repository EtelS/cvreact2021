import React from 'react';
import linkedin from "../utiles/imagenes/linkedin.png"
const Media = () => {
    return ( 
        <section className="secciones" id="media">
            <h3 className="blue">Redes Sociales</h3>
            <p><a href="https://www.linkedin.com/in/etel-perez-7a827969/" target="blank"><img src={linkedin} width="100px" height="50px" alt="Icono de Linkedin" /></a></p>
        </section>
   
     );
}
 
export default Media;