import React from 'react';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';
import { InfoSection, Pricing } from '../../components';


const Home = () => {
  return (
    <div>
      <InfoSection {...homeObjOne}/>
    
      <InfoSection {...homeObjTwo}/>  {/* artgallery * */}
      <InfoSection {...homeObjThree}/>
      <Pricing/> 
      <InfoSection {...homeObjFour}/>
    </div>
  )
}

export default Home;
