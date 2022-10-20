import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes} from  'react-icons/fa';
import { IconContext} from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
      Nav,
      NavbarContainer,
      NavLogo,
      NavIcon,
      MobileIcon,
      NavMenu,
      NavItem,
      NavLinks,
      NavItemBtn,
      NavBtnLink
    } from './Navbar.elements'; 
    
import imgLogoMuseo from '../../assets/imgs/logo-museo.png';
  
  const Navbar = () => {
    const [click, setClick] = useState(false);
    const [buttom, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobilMenu = () => setClick(false)

    const showButton = () => {
      if(window.innerWidth <= 960){
        setButton(false);
      }else{
        setButton(true);
      }
    };
    
    useEffect(() =>{
      showButton();
    },[]);

    return (
      <>
      <IconContext.Provider value= {{ color: '#fff'}}>
        <Nav>
          -

            <NavbarContainer>
                <NavLogo  to="/"  onClick={closeMobilMenu}>
                    <NavIcon src={imgLogoMuseo} />     
                     {/* <img className="" src={imgLogoMuseo}  className="logo" /> */}
                    Museo Villalobos
                </NavLogo>    
                <MobileIcon onClick = {handleClick}>
                    {click ? <FaTimes/> :
                <FaBars/>} 
                </MobileIcon>   
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks  to='/'>
                            Inicio
                        </NavLinks>
                    </NavItem>                              
                    <NavItem>
                        <NavLinks  to='/gallery-art'>
                            Galeria de arte
                        </NavLinks>
                    </NavItem>                              
                    <NavItem>
                        <NavLinks  to='/products'>
                            Artistas
                        </NavLinks>
                    </NavItem>                              
                    <NavItem>
                        <NavLinks  to='/
                        Videos'>
                            Videos
                        </NavLinks>
                    </NavItem>                            
                    <NavItem>
                        <NavLinks  to='/
                        Contacto'>
                            Contacto
                        </NavLinks>
                    </NavItem>
                    <NavItemBtn>
                      {buttom ? (
                        <NavBtnLink to="/sign-up">
                          <Button primary>SIGN UP</Button>
                        </NavBtnLink>
                      ): (
                        <NavBtnLink to="/sign-up">
                          <Button fontBig primary>
                            SingUp
                          </Button> 
                        </NavBtnLink> )
                      }
                    </NavItemBtn>
                </NavMenu>            
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
      </>
    )
  }

  export default Navbar
