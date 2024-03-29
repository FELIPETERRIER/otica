import React from "react";
import './style.css';


export default function SecaoProdutos() {
    return (
        <section id="Produtos" className="secao-produtos">
            <div className="text-produtos">
                <div className="container">
                    <div>
                        <h2>Nossos produtos</h2>
                        <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                        <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <h2>Óculos de grau</h2>
                            <img src="assets/oculos01.png" alt="Óculos de grau" />
                            <p>R$ 500,00</p>
                        </div>
                        <div className="card">
                            <h2>Óculos transition</h2>
                            <img src="assets/oculos02.png" alt="Óculos transition" />
                            <p>R$ 750,00</p>
                        </div>
                        <div className="card">
                            <h2>Óculos de sol</h2>
                            <img src="assets/oculos03.png" alt="Óculos de sol" />
                            <p>R$ 700,00</p>
                        </div>
                        <div className="card">
                            <h2>Óculos infantil</h2>
                            <img src="assets/oculos04.png" alt="Óculos infantil" />
                            <p>R$ 500,00</p>
                        </div>
                    </div>
                    <p>Todos os nossos produtos incluem:</p>
                    <ul>
                        <li>Garantia de 1 ano</li>
                        <li>Manutenção preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>

                    </ul>

                </div>
            </div>



        </section>


    );

};

