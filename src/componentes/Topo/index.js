import React from 'react';
import './style.css';

export default function Topo (){
    return(
    <header>
        <div className='secao-topo'>
            <img src='assets/logo.png'alt='imagem da logo'/> 
            <nav>                      
            <a href='#Produtos' >Produtos</a>
            <a href='#Sobre'>Sobre</a>
            <a href='#Contatos'>Contatos</a>
            </nav>
        </div>
    </header>
    )
}