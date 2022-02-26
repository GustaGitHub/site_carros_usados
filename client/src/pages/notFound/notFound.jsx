import React from "react";
import { Div404, BackToHome } from './styled'
import img404 from '../../images/notfound.png'

function NotFound(){
   return(
      <Div404>
            <img src={img404} alt="Error" width={"190px"} height={"190px"}/>
            <h1>Erro 404</h1>
            <p>Pagina não encontrada</p>
            <BackToHome>
               <a href="/">Voltar a página inicial</a>
            </BackToHome> 
      </Div404>
   )
}

export default NotFound