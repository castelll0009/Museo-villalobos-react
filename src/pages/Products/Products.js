import React from 'react';
import { homeObjTwo, homeObjThree, homeObjFour} from './Data';
import { InfoSection, Pricing } from '../../components';


const Products = () => {
  return (
    <div>      
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <Pricing/> 
      <InfoSection {...homeObjFour}/>
    </div>
  )
}

export default Products;
