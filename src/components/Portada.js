import React from 'react';
import '../utiles/style.css';
const Portada = () => {
    return ( 
        <header id="grid-container">
        <div id="principal" className="imagen" alt="hola Soy Etel">
            <h4 id="hola" className="cursiva titulo">Hola, yo soy / Hello, I am </h4>
            <h1 id="nombre" className="titulo">Etel S. Perez</h1>
            <h2 id="cargo" className="titulo">WEB DEVELOPER</h2>

        </div>
       
        <div className="cabecera cursiva" id="name">Etel S. Perez</div>
        <div id="about" className="cabecera"><a href="#sobremi" className="cabecera2">SOBRE MI / ABOUT ME</a></div>
        <div id="skills" className="cabecera"><a href="#habilidad" className="cabecera2">HABILIDADES / SKILLS</a></div>
        <div id="experiencia" className="cabecera"><a href="#exp" className="cabecera2">EXPERIENCIA / EXPERIENCE</a></div>
        <div id="educacion" className="cabecera"><a href="#edu" className="cabecera2">EDUCACION / EDUCATION</a></div>
        <div id="portfolio" className="cabecera"><a href="#jobs" className="cabecera2">TRABAJOS / PORTFOLIO</a></div>
        <div id="contacto" className="cabecera"><a href="#contact" className="cabecera2">CONTACTO / CONTACT</a></div>
        <div id="pdf" className="cabecera"><a href="downloads/Curriculum_Etel_S_Perez.pdf" download="CV Etel S Perez" className="cabecera2">DESCARGAR / DOWNLOAD CV</a></div>
        <div id="redes" className="cabecera"><a href="#media" className="cabecera2">REDES SOCIALES / SOCIAL MEDIA</a></div>
    </header>

     );
}
 
export default Portada;