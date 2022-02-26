import React, { useState } from "react";
import api from '../../services/api';
import { useEffect } from 'react'
import { Homepage, CardStock, ListStock, Price, ImageHome } from './styled'

function Home(){
   
   const [stock, setStock] = useState([])
   const [loading, setLoading] = useState(true) // Sistema de carregamento

   useEffect(()=>{
   
      async function loadApi(){
         await api.get('stock')
         .then(response => {
            setStock(response.data)     // Consumo da API
            setLoading(false)
         })
      }
      loadApi()
   },[])

   return(
      <div>
         {loading ? (<h1>Carregando...</h1>) : 
      (<>
         <Homepage>
         <ListStock>
            {stock.map((e,index) => {
               let { image1 } = e.images
               return(
                     <CardStock key={index}>
                        <a href={`/product/${e.id}`} target="_blank"style={{textDecoration:'none',color:"inherit"}}>

                           <ImageHome src={image1} alt={e.model} width='400px' height="300px"/>
                           <Price>{e.price} R$</Price>
                           <h3><strong>{e.brand}</strong> {e.model}</h3>                 
                           <small>{e.km} KM | {e.year}</small>            
                        
                        </a>                     
                     </CardStock>
                  )
               })}
            </ListStock>
         </Homepage>
         </>)}   
      </div>
   )
}

export default Home