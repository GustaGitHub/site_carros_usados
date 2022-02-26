import React, { useEffect, useState } from "react";
import api from '../../services/api'
import { useParams, useHistory, Link, Redirect } from "react-router-dom";
import { Price, MainDiv, DivRight, DivBtn, BtnCarousel, FlexRow, OfferBtn, CenterBtn, Image } from "./styled";

function Product(){
   const [car, setCar] = useState({}) 
   const [loadingPage , setLoadingPage ] = useState(true)

   const { id } =  useParams()
   const history = useHistory()

   useEffect(()=>{
      async function loadApi(){   
         await api.get(`stock`)
         .then((response)=>{
            const result = response.data   
            const findApi = result.find(e => e.id == id)
            if(findApi != undefined){                    /// Verificar se há algum anuncio com o id fornecido
               setCar(findApi)
               setLoadingPage(false)
            }else{
               history.push('/page_not_found')
            }   
         })
         .catch(err => {
            console.log(err)
         })
      }
      loadApi()
   },[])

   const displayImage = (param) => {
      if(param == 1){
         document.getElementById('img1')
         .style.display = 'inline'

         document.getElementById('img2')
         .style.display = 'none'
      }
      else if(param == 2){
         document.getElementById('img1')
         .style.display = 'none'

         document.getElementById('img2')
         .style.display = 'inline'
      }
   }

  return(
     <>
       {loadingPage ? (<h1>Carregando...</h1>) : (<>
         <MainDiv>
            <FlexRow>
               <div>
                  <Image src={car.images.image1} alt="#" width='400px' height='320px' id="img1"/>
                  <Image src={car.images.image2} alt="#" width='400px' height='320px' id="img2" style={{display:'none'}}/>
                  <br />
                  <DivBtn>
                     <BtnCarousel onClick={()=>displayImage(1)}>
                        {'<'}
                     </BtnCarousel>
                     <BtnCarousel onClick={()=>displayImage(2)}>
                        {'>'}
                     </BtnCarousel>
                  </DivBtn>
               </div>
            <DivRight>
               <Price>R$ {car.price}</Price>
               <h3><strong>
                  {car.brand} {car.model}
               </strong></h3>
               <hr />
               <br />
                  <h4>Ano: {car.year}</h4>
               <br />
                  <h4>KM: {car.km}</h4>
               <br />
                  <h4>{car.color}</h4>
               <br />
                  <p>Anunciado por: <strong>{car.advertiser}</strong></p>
                     <CenterBtn>
                        <OfferBtn>
                           Faça uma Proposta
                        </OfferBtn>
                     </CenterBtn>
            </DivRight>
            </FlexRow>
         </MainDiv>
       </>)}
      </>
   )
}

export default Product
