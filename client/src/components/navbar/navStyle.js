import styled, {keyframes} from 'styled-components'

//Keyframe
const linkHover = keyframes`
  0%{
      padding-bottom: 25px;
  }
  25%{
      padding-bottom: 20px;
  }
  50%{
      padding-bottom: 15px;
  }
  75%{
      padding-bottom: 10px;
  }
  100%{
      padding-bottom: 5px;
  }
`

//Components

export const Navbar = styled.nav`
  background-color: white;
`
export const ImgNav = styled.img`
  :hover{
    opacity: 0.5;
  }
`

export const DivLinksNav = styled.div`
  float: right;
  margin: 40px 20px;
  font-size: 15pt;
`

export const LinkNav = styled.a`
   margin-right: 10px;
   color: black;
   text-decoration: none;
   animation-duration: 60ms;
   animation-timing-function: ease-in;
   padding: 5px;

   :hover{
      border-bottom: 2px black solid;
      animation-name: ${linkHover};
   }
`

