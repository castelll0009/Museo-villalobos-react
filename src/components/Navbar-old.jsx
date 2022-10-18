import React, {useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () =>{
    console.log(clicked);
    //cuando esta  true lo pasa  a false y viceversa 
    setClicked(!clicked)
  } 
  return (
    <>
    <NavContainer>
        <h2>Museo<span>Villalobos</span></h2>
        <div className={`links ${clicked ? 'active' : '' }`}>        
          <a href="">Galeria</a>
          <a href="">Artistas</a>
          <a href="">Obras de arte</a>
          <a href="">Acerca de</a>         
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick}/>          
        </div>
        <StyledBgDiv className={`initial ${clicked ? 'active' : ''}`}></StyledBgDiv>
    </NavContainer>    
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
h2{
    font-weight: 400;   
    font-size: 1em;
    span{
        font-weight: bold;        
        
    }  
     
  }
a{
    color: white;
    text-decoration: none;
     margin-right: 1rem;
  }
  background: gray;
  text-align: center;
  display: flex; 
  aling-items: center;
  justify-content: space-between;
  padding: 20px;

  .burguer{
    @media(min-width: 768px) {
      display: none;
    }
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto; 
    margin-right: auto;
    text-align: center;        
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px ){    
      position: initial; 
      margin: 0;
      a{
        font-size:  1rem;
        color: white;
        display: inline;
      }  
      display: block;
    }
  }

  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto; 
    margin-rigth: auto;
    top: 30%;
    left: 0;
    right: 0;
    margin-top: 1rem;
    text-align: center;    
    a{
      color: white;    
    }
  }
`
const StyledBgDiv = styled.div`
background-color: #222 ;
position: absolute;
top: -1000px;
left: -1000px;
z-index: -1;
transition: all 0.6s ease;
&.active{   //se activa  cuando ese active o si hover tambien 
  border-radius: 0 0 80% 0;  
  top: 0; 
  left: 0;
  width: 100%;
  height: 100%;   
}  
`