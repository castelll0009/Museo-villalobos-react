import React from 'react';
import { homeObjThree} from './Data';
import { InfoSection, Pricing } from '../../components';


const SignUp = () => {
  return (
    <div>  
      <InfoSection {...homeObjThree}/>     
    </div>
  )
}

export default SignUp;
