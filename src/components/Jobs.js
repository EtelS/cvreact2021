import React from 'react';
import commerce from  "../utiles/imagenes/e-commerce.png"
import perro from "../utiles/imagenes/perro.png"
import pesos from "../utiles/imagenes/pesos.png"
import bb from "../utiles/imagenes/bb.png"
import auto from "../utiles/imagenes/auto.png"
import sol from "../utiles/imagenes/sol.png"
import github from "../utiles/imagenes/github.png"

const Jobs = () => {
    return (   
    <section className="secciones" id="jobs">
    <h3 className="semired">Portfolio</h3>
    <ul>
        <li className="iconos"><a href= "https://distracted-leavitt-4bfc79.netlify.app/" target="blank"><img src={commerce} width="150" height="100" alt="E-Commerce" /><br /> E-Commerce</a></li>
        <li className="iconos"><a href= "https://jovial-snyder-651df9.netlify.app" target="blank"><img src={perro} width="150" height="100" alt="Veterinaria" /><br /> Turnos <br /> Veterinarios</a></li>
        <li className="iconos"><a href= "https://clever-mcnulty-6bd83d.netlify.app/" target="blank"><img src={pesos} width="150" height="100" alt="Presupuesto" /><br /> Presupuesto <br />Semanal</a></li>
        <li className="iconos"><a href= "https://adoring-goldberg-ee6bfd.netlify.app/" target="blank"><img src={bb} width="150" height="100" alt="Frases de Breaking Bad" /><br /> Frases de <br /> Breaking Bad</a></li>
        <li className="iconos"><a href= "https://suspicious-allen-d22de0.netlify.app" target="blank"><img src={auto} width="150" height="100" alt="Cotizador de Seguros" /><br /> Cotizador de <br /> Seguros</a></li>
        <li className="iconos"><a href= "https://clever-kowalevski-bed048.netlify.app" target="blank"><img src={sol} width="150" height="100" alt="Verificar el clima" /><br /> El <br />Clima</a></li>
        <li className="iconos"><a href="https://github.com/EtelS" target="blank"><img src={github} width="50" height="50" alt="Portfolio de GitHub"/><br />Perfil <br />de GitHub</a></li>
    </ul>
</section> );
}
 
export default Jobs;