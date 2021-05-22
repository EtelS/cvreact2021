import React from 'react';
import analista from '../utiles/imagenes/analista-programador.jpg';
import dwfs from '../utiles/imagenes/dwfs.jpg';
import pm from '../utiles/imagenes/pm.jpg';
import ux from '../utiles/imagenes/UX.jpg'
import react from "../utiles/imagenes/react.png"

const Edu = () => {

    return ( 
        <section className="secciones" id="edu">
            <h3 className="red">Educacion / Education</h3>
            <img src={analista} width="300px" height="200px" alt="Certificado de Analista Programador" className="certificados" />
            <img src={dwfs} width="300px" height="200px" alt="Certificado de Desarrollladora Web" className="certificados" />
            <img src={pm} width="300px" height="200px" alt="Certificado de Project Manager" className="certificados" />
            <img src={ux} width="300px" height="200px" alt="Certificado de UX" className="certificados" />
            <img src={react} width="300px" height="200px" alt="Certificado de React JS" className="certificados" /> 
    
        </section>
     );
}
 
export default Edu;