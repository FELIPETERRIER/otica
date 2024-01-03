import React from "react";
import './style.css';


export default function SecaoContato() {
    return (
        <section id="Contatos" className="contatos">
            <div className="limitar-secao ">
                <h2>Fale conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className="contatos_total">
                    <div className="contatos_y">
                        <h2>Contato</h2>
                        <div className="contatos_x">
                            <img src="assets/local.png" alt="local" />
                            <p>Nova Iguaçu, RJ</p></div>
                        <div className="contatos_x">
                            <img src="assets/telefone.png" alt="telefone" />
                            <p>(21) 9999-9999</p>
                        </div>
                        <div className="contatos_x">
                            <img src="assets/email.png" alt="local" />
                            <p>contato@oticavida.com</p>
                        </div>

                    </div>
                    <div className="contatos_y">
                        <h2>Nossas Redes Sociais</h2>
                        <div className="contatos_x">
                            <img src="assets/fb.png" alt="local" />
                            <p>/OticaVida</p>
                        </div>
                        <div className="contatos_x">
                            <img src="assets/ig.png" alt="telefone" />
                            <p>@oticavidarj</p>
                        </div>
                        <div className="contatos_x">
                            <img src="assets/tt.png" alt="local" />
                            <p>@oticavidarj</p>
                        </div>

                    </div>
                </div>
            </div>


        </section>





    );

};

