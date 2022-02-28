import styled ,{keyframes} from 'styled-components'

export const FlexRow = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   
   @media (max-width: 415px){
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
`
export const MainDiv = styled.div`
   background-color: #DCDCDC;
   height: 100vh;
   padding-top: 20px;
   
   @media (max-width: 415px){
      height: 130vh;
   }
`
export const DivImgCarousel = styled.div`
   display: flex;
   justify-content: flex-start;
   margin-top: 2.5%;
   box-sizing: border-box;
   
   @media (max-width: 415px){
      margin-top: 4%;
      margin-bottom: 4%;
   }
`
export const ImgCarousel = styled.input.attrs({
   type : 'image'
})`
   opacity: 0.5;
   height: 90px;
   width: 90px;

   :hover{
      opacity: 1;
   }
`
export const DivRight = styled.div`
   background-color: white;
   width: 350px;
   height: 380px;
   padding-left: 15px;
`
export const Image = styled.img`
   @media (max-width: 415px){
      width: 350px;
      height: 340px;
   }
`
export const Price = styled.p`
   color: orange;
   font-size: 30pt;
   margin-bottom: 2.5%;
`
export const CenterBtn = styled.div`
   display: flex;
   justify-content: center;
`
export const OfferBtn = styled.button`
   background-color: rgb(244, 95, 0);
   padding: 20px;
   font-size: 17pt;
   color: white;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   margin-top: 35px;
   
   :hover{
      background-color: rgb(155, 75, 1);
   }
`