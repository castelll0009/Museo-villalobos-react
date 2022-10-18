import styled from 'styled-components';
//import {Container } from '../../globalStyles'
import { FaMagento } from  'react-icons/fa';
import { FaBeer } from 'react-icons/fa';
import { Link  } from 'react-router-dom';
import  { Container} from '../../globalStyles';

export const Nav = styled.nav`
background: #101522;
height: fit-content;
max-height: 80px;
display: flex;
justify-content: center;
font-size: 1.2rem;
position: sticky;
padding: 0px 10px 0px 0px;
top: 0;
z-index: 999;
`;

export const NavbarContainer = styled(Container)`
display: flex; 
justify-content: space-between;
height: 80px;
//$(Container)

@media screen and (max-width: 786px){
   //padding-left: 20px; 
}
`;

export const  NavLogo = styled.a`
color: white;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
`;

// // export const  NavIcon = styled(FaMagento)` //React icons
// margin-right: 1rem;
// `;

export const  NavIcon = styled.img`
margin-right: 1rem;
max-width: 14%;
background-image: url(../../assets/imgs/logo-museo.png);
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px){
   display:  block;
   position: absolute;
   top: 0;
   right:  0; 
   transform: translate(-100%, 60%);
   font-size: 1.8rem;
   cursor: pointer;
}
`;

 export  const  NavMenu  = styled.ul`
 display: flex;
 align-items: center;
 list-style: none;
 text-align: center;

 @media screen and (max-width: 960px){
    display: flex;
    flex-direction:  column;
    width: 100%;
    height: 90vh;
    position: absolute; 
    top:  80px;
    left: ${({click}) => (click ? 0 : '-100%') };
    transition: all 0.5s ease; 
    background: #101522;
 }
 `;

export  const  NavItem = styled.li`
height:  80px;
border-bottom:  2px solid;

&:hover{
   border-bottom: 2px solid #4b59f7; 
}

@media screen and (max-width: 960px){
   width: 100%;

   &:hover{
      border: none;
   }
}
`

export const  NavLinks = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100% ;

@media screen and (max-width:  960px){
   text-align: center;
   padding: 2rem;
   width: 100%;
   display: table;

   &:hover{
      color: #4b594b;
      transition: all 0.3s ease;      
   }
}

`;

export const  NavItemBtn =  styled.li`
@media  screen and (max-width: 960px){
   display: flex;
   justify-content: center;
   align-items: center;
   width:  100%;
   height: 120px;
}
`;
export const NavBtnLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;
`


   