import React from 'react';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';
import { InfoSection, Pricing } from '../../components';
import ArtGallery from '../../components/ArtGallery/ArtGallery';


const Home = () => {
  return (
    <div>
      <InfoSection {...homeObjOne}/>
      <ArtGallery/>
      <InfoSection {...homeObjTwo}/>  {/* artgallery * */}    
      <InfoSection {...homeObjThree}/>
      <Pricing/> 
      <InfoSection {...homeObjFour}/>
    </div>
  )
}

export default Home;
