import React from 'react';
import GlobalStyle from './globalStyles';
import {BrowserRouter as Router, Route, Routes}  
from 'react-router-dom';
//import Navbar from './components/Navbar';
//import Navbar  from './components/Navbar/Navbar';
import Home from './pages/HomePage/Home'; 
import Services from './pages/Services/Services';
import ArtGallery from './pages/pageArtGallery/pageArtGallery';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import { Navbar, Footer} from './components';
import ScrollToTop from './components/ScrollToTop';




function App() {
  return (
    
 <Router>
  <GlobalStyle/>
  <ScrollToTop/>
  <Navbar/>
  <Routes>
    <Route path="/" exact element={<Home/>}/>
    <Route path="/gallery-art" exact element={<ArtGallery/>}/>    
    <Route path="/products" exact element={<Products/>}/>
    <Route path="/sign-up" exact element={<SignUp/>}/>
  </Routes>
  <Footer/>
 </Router>       
  );
}

export default App;
