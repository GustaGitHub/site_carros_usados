import styled, {keyframes} from 'styled-components'

export const Homepage = styled.div`
   background-color: #DCDCDC;
   height: 100%;
   padding-top: 20px;
`
export const CardStock = styled.div`
   background-color: white;
   width: 420px;
   display:  flex;
   flex-direction: column;
   margin-bottom: 20px;
   padding: 10px;

   :hover{
      box-shadow: 0px 15px 25px 10px rgba(0,0,0,0.3);
      cursor: pointer;
      transition: ease-in-out;
      transition-duration: 180ms;
   }
   
   @media (max-width: 415px){
      width: 350px;
   }
`
export const ListStock = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`
export const Price = styled.h2`
   margin: 15px 0px 10px 0px;
   color: #ff9d00;
`
export const ImageHome = styled.img`
   @media (max-width: 415px){
      width: 330px;
   }
`