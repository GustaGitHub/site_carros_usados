import {Navbar, DivLinksNav, LinkNav, ImgNav} from './navStyle'
import logo from '../../images/logo.png'

function Nav(){
   return(
      <Navbar>
         <a href="/">
            <ImgNav src={logo} alt="Logo" width="110px" height="100px"/>
         </a>
            <DivLinksNav>
               <LinkNav href="#">Tabela fipe</LinkNav>
               <LinkNav href="#">Anuncie</LinkNav>
            </DivLinksNav>  
      </Navbar>
   )
}

export default Nav