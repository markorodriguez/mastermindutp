import React from "react";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";

function Reglas() {
    return (
        <div>
            <section id="first">
                <div className="container">
                    <div className="row" id="first-section">
                        <div className="col content text-center">
                            <h1>MASTERMIND <span>WEB</span> </h1>
                            <div className="text-justified">
                                <h5>
                                    Mastermind es un juego de <b>lógica</b>. Este juego puede
                                    considerarse <b>educativo</b> ya que ayuda a desarrollar ciertas
                                    destrezas en el área <b>lógico matemática</b>. El objetivo es
                                    <b> descifrar</b> el código de colores que creó el otro jugador. Para
                                    hacerlo necesitarás <b>ir descartando posibilidades</b> según las
                                    pistas que te dará el sistema.
                                </h5>
                            </div>
                        </div>
                        <div className="col">
                            <div className="text-center">
                                <img className="img-fluid" alt="florin" src={image1}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="second">
                <div className="container">
                    <div className="row" id="second-section">
                        <div className="col text-center">
                            <img className="img-fluid" alt="florin" src={image2}></img>
                        </div>
                        <div className="col content text-center">
                            <h2>¿Cómo jugar?</h2>
                            <div className="text-justified">
                                <h5>Al comienzo de cada juego el sistema genera un código secreto de 4 colores, los cuales son elegidos
                                de un grupo de 6 colores, es por eso que puede existir la posibilidad de tener una combinación de 4 colores
                                idénticos.</h5>
                                <h5>
                                El objetivo es adivinar la combinación propuesta por el sistema. Para guiarte, el juega brinda pistas en forma de colores:
                                <ul>
                                    <li>Si el color y la posición son correctos se indicará con un punto negro. </li>
                                    <li>Si el color es el correcto, pero la posición no lo es se indicará con un punto rojo. </li>
                                </ul>          
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Reglas;
