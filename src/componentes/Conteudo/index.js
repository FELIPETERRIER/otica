import React from "react";
import SecaoCapa from "../SecaoCapa";
import SecaoContato from "../SecaoContato";
import SecaoProdutos from "../SecaoProdutos";
import SecaoSobre from "../SecaoSobre";


export default function Conteudo(){
    return(
        <div>
        <SecaoCapa/>       
        <SecaoProdutos/>
        <SecaoSobre/>
        <SecaoContato/>
        </div>


    );

};



