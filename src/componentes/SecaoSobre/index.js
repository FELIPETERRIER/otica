import React from "react";
import './style.css';


export default function SecaoSobre() {
    return (
        <section id="Sobre" className="sobre">
            <div className="box-text-img">
                <div className="box">
                    <h2>QUEM SOMOS NÓS?</h2>
                    <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
                </div>
                <div className="box-cards">
                    <img src="assets/loja.png" alt="Imagem da prateleira da loja." />
                    <div className="box-text">
                        <h2>Nossas Filiais</h2>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                </div>
                <div className="box-cards">                    
                    <div className="box-text">
                        <h2>Atendimento flexível</h2>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    <img src="assets/atendimento.png" alt="Imagem de uma atendente da loja." />
                </div>
            </div>




        </section>

    );

};

