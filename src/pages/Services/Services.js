import React from 'react';
import {homeObjFour} from './Data';
import { InfoSection, Pricing } from '../../components';


const Services = () => {
  return (
    <div>    
      <Pricing/> 
      <InfoSection {...homeObjFour}/>
    </div>
  )
}

export default Services;
